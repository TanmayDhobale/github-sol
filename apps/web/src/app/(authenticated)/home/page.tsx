'use client'
import { PageLayout } from '@web/layouts/Page.layout' // Assuming this can stay the same
import { Divider, Flex, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography

export default function HomePage() {
  return (
    <PageLayout layout="super-narrow">
      <Flex align="center" vertical>
        <Title level={1} style={{ marginBottom: 5 }}>
          Welcome to Github-SOL 👋
        </Title>
        <Title level={5} style={{ marginTop: 0, marginBottom: 15 }}>
          {' '}
       Features
Automatic Reward Distribution: The app listens to GitHub pull request events and automatically calculates and distributes USDC rewards to contributors based on predefined rules.
Transparent Transactions: All USDC token transfers are recorded on the Ethereum blockchain, providing transparency and auditability.
Rewards Dashboard: Contributors can view their earned rewards, transaction history, and input their Ethereum wallet addresses through a user-friendly dashboard.
Invoicing and Reporting: The app generates invoices and reports for contributors, detailing their contributions and rewards received.
        </Title>

        <Paragraph style={{ marginTop: 0 }}>
         GitHub-SOL-Auto-Dispenser is a decentralized application that rewards contributors with USDC (USD Coin) tokens for their pull request contributions on GitHub repositories. It leverages the power of the Ethereum blockchain and the Ethers.js library to facilitate secure and transparent token transfers.


        </Paragraph>
        <Paragraph>
          You can read our{' '}
          <a
            href=""
            target="_blank"
          >
           
          </a>{' '}
          to get the best out of it.
        </Paragraph>
        <Divider />
        <Text type="secondary">
          If you have any problems, join our{' '}
          <a href="" target="_blank">
            Discord
          </a>
          . We reply fast!
        </Text>
      </Flex>
    </PageLayout>
  )
}
