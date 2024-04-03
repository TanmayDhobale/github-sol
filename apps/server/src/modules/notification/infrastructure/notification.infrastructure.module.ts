import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationIssueSubscriber } from './subscribers/notification.issue.subscriber'

import { NotificationBountySubscriber } from './subscribers/notification.bounty.subscriber'

import { NotificationWalletSubscriber } from './subscribers/notification.wallet.subscriber'

import { NotificationClaimSubscriber } from './subscribers/notification.claim.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationIssueSubscriber,

    NotificationBountySubscriber,

    NotificationWalletSubscriber,

    NotificationClaimSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
