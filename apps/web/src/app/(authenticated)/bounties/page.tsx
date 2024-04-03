'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Space } from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BountiesListPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const issuesFound = await Api.Issue.findMany({ includes: ['bountys'] })
        setIssues(issuesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch issues', { variant: 'error' })
      }
    }

    fetchIssues()
  }, [])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>GitHub Issues with Bounties</Title>
      <Text>Explore and claim bounties on open GitHub issues.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {issues?.map(issue => (
          <Col xs={24} sm={12} md={8} lg={6} key={issue.id}>
            <Card
              hoverable
              onClick={() => router.push(`/bounties/${issue.id}`)}
              title={issue.title}
              extra={<DollarCircleOutlined />}
            >
              <Space direction="vertical">
                <Text>
                  Description: {issue.description || 'No description'}
                </Text>
                <Text>Bounty: ${issue.bountyAmount}</Text>
                <Text>
                  Date: {dayjs(issue.dateCreated).format('DD/MM/YYYY')}
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
