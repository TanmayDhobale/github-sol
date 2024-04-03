'use client'

import { useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { WalletOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddWalletPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: { solanaAddress: string }) => {
    if (!userId) return

    setLoading(true)
    try {
      await Api.Wallet.createOneByUserId(userId, {
        solanaAddress: values.solanaAddress,
      })
      enqueueSnackbar('Wallet added successfully!', { variant: 'success' })
      form.resetFields()
      router.push('/my-claims')
    } catch (error) {
      enqueueSnackbar('Failed to add wallet. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>
          <WalletOutlined /> Add Solana Wallet
        </Title>
        <Paragraph>
          Add your Solana wallet address to your account to claim bounties.
        </Paragraph>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="solanaAddress"
            label="Solana Wallet Address"
            rules={[
              {
                required: true,
                message: 'Please input your Solana wallet address!',
              },
              {
                type: 'string',
                min: 32,
                message: 'Invalid Solana wallet address!',
              },
            ]}
          >
            <Input placeholder="Enter your Solana wallet address" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add Wallet
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
