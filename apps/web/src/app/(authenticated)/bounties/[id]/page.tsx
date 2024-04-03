'use client'

import { useEffect, useState } from 'react'
import { Typography, Descriptions, Badge, Spin, Button, Row, Col } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BountyDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [bounty, setBounty] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBountyDetails = async () => {
      try {
        const bountyDetails = await Api.Bounty.findOne(params.id, {
          includes: ['issue'],
        })
        setBounty(bountyDetails)
      } catch (error) {
        enqueueSnackbar('Failed to fetch bounty details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchBountyDetails()
  }, [params.id])

  const handleNavigateToIssue = () => {
    router.push(`/issue/${bounty?.issueId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Spin spinning={loading}>
        <Title level={2}>Bounty Details</Title>
        <Text>
          This page provides detailed information about a specific bounty.
        </Text>
        {bounty && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Bounty Status">
              <Badge
                status={bounty.status === 'Open' ? 'success' : 'error'}
                text={bounty.status}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Bounty Amount">{`$${bounty.issue?.bountyAmount}`}</Descriptions.Item>
            <Descriptions.Item label="Issue Title">
              {bounty.issue?.title}
            </Descriptions.Item>
            <Descriptions.Item label="Issue Description">
              {bounty.issue?.description}
            </Descriptions.Item>
            <Descriptions.Item label="Date Created">
              {dayjs(bounty.dateCreated).format('MMMM D, YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label="Related GitHub Issue">
              <Button
                type="link"
                icon={<GithubOutlined />}
                onClick={handleNavigateToIssue}
              >
                View Issue
              </Button>
            </Descriptions.Item>
          </Descriptions>
        )}
        {!loading && !bounty && <Text>Unable to find bounty details.</Text>}
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col>
            <Button type="primary" onClick={() => router.push('/bounties')}>
              Back to Bounties List
            </Button>
          </Col>
        </Row>
      </Spin>
    </PageLayout>
  )
}
