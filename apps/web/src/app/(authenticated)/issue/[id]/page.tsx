'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Descriptions, Badge, Button, Space } from 'antd'
import { DollarCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function IssueDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [issue, setIssue] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const fetchedIssue = await Api.Issue.findOne(params.id, {
          includes: ['bountys', 'bountys.claims'],
        })
        setIssue(fetchedIssue)
      } catch (error) {
        enqueueSnackbar('Failed to fetch issue details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchIssue()
    }
  }, [params.id])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Text>Loading...</Text>
      </PageLayout>
    )
  }

  if (!issue) {
    return (
      <PageLayout layout="narrow">
        <Text>Issue not found</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <InfoCircleOutlined /> Issue Details
      </Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Title">{issue.title}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {issue.description}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge
            status={issue.status === 'Open' ? 'success' : 'error'}
            text={issue.status}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Bounty Amount">
          <DollarCircleOutlined /> {issue.bountyAmount}
        </Descriptions.Item>
      </Descriptions>
      <Space style={{ marginTop: '20px' }}>
        <Button
          type="primary"
          onClick={() => router.push(`/claim-bounty/${issue.id}`)}
        >
          Claim Bounty
        </Button>
        <Button onClick={() => router.push('/bounties')}>
          Back to Bounties
        </Button>
      </Space>
    </PageLayout>
  )
}
