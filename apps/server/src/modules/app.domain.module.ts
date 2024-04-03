import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { IssueDomainModule } from './issue/domain'

import { BountyDomainModule } from './bounty/domain'

import { WalletDomainModule } from './wallet/domain'

import { ClaimDomainModule } from './claim/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    IssueDomainModule,

    BountyDomainModule,

    WalletDomainModule,

    ClaimDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
