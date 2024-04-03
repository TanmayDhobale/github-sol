'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SubmitIssuePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const onSubmit = async values => {
    try {
      const { title, description, bountyAmount } = values
      await Api.Issue.createOne({
        title,
        description,
        bountyAmount: Number(bountyAmount),
      })
      enqueueSnackbar('Issue submitted successfully', { variant: 'success' })
      router.push('/bounties')
    } catch (error) {
      enqueueSnackbar('Failed to submit issue', { variant: 'error' })
    }
  }

  if (!authentication.isAuthenticated) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Submit an Issue</Title>
        <Paragraph>You must be logged in to submit an issue.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Submit an Issue</Title>
      <Paragraph>
        Submit a new issue related to GitHub projects for a bounty.
      </Paragraph>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="bountyAmount"
          label="Bounty Amount ($)"
          rules={[
            { required: true, message: 'Please input the bounty amount!' },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Upload Supporting Document">
          <Upload.Dragger
            name="files"
            fileList={fileList}
            customRequest={handleUpload}
            maxCount={1}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Issue
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
