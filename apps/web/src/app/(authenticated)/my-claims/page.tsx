'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Table, Tag, Space } from 'antd'
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyClaimsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [claims, setClaims] = useState([])

  useEffect(() => {
    const fetchClaims = async () => {
      if (userId) {
        try {
          const userClaims = await Api.Claim.findManyByUserId(userId, {
            includes: ['bounty', 'wallet'],
          })
          setClaims(userClaims)
        } catch (error) {
          enqueueSnackbar('Failed to fetch claims', { variant: 'error' })
        }
      }
    }

    fetchClaims()
  }, [userId])

  const columns = [
    {
      title: 'Bounty ID',
      dataIndex: ['bounty', 'id'],
      key: 'bountyId',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => (
        <>
          {status === 'completed' ? (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Completed
            </Tag>
          ) : (
            <Tag icon={<SyncOutlined spin />} color="processing">
              Pending
            </Tag>
          )}
        </>
      ),
    },
    {
      title: 'Claim Date',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: date => <Text>{dayjs(date).format('DD/MM/YYYY')}</Text>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => router.push(`/bounties/${record.bountyId}`)}>
            View Bounty
          </a>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Claims</Title>
      <Text>
        Here you can view the status of your bounty claims, including pending
        and completed transactions.
      </Text>
      <Table columns={columns} dataSource={claims} rowKey="id" />
    </PageLayout>
  )
}
