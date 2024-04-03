'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography, Row, Col, Space } from 'antd'
import { WalletOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ClaimBountyPage() {
  const router = useRouter()
  const { id: issueId } = useParams<any>()
  const { user, isAuthenticated } = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { solanaAddress: string }) => {
    if (!isAuthenticated || !user?.id) {
      enqueueSnackbar('You must be logged in to claim a bounty.', {
        variant: 'error',
      })
      return
    }

    try {
      setLoading(true)
      const wallet = await Api.Wallet.createOneByUserId(user.id, {
        solanaAddress: values.solanaAddress,
      })
      await Api.Claim.createOneByWalletId(wallet.id, {
        userId: user.id,
        bountyId: issueId,
      })
      enqueueSnackbar('Bounty claimed successfully!', { variant: 'success' })
      router.push('/my-claims')
    } catch (error) {
      enqueueSnackbar('Failed to claim the bounty. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  if (!issueId) {
    return <PageLayout layout="narrow">Invalid issue ID.</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>
              <WalletOutlined /> Claim Bounty
            </Title>
            <Paragraph>
              Submit your Solana wallet address to claim the bounty for this
              GitHub issue.
            </Paragraph>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Solana Wallet Address"
                name="solanaAddress"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Solana wallet address!',
                  },
                ]}
              >
                <Input placeholder="Enter your Solana wallet address" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Claim Bounty
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
