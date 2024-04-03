import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ClaimDomainModule } from '../domain'
import { ClaimController } from './claim.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ClaimByUserController } from './claimByUser.controller'

import { BountyDomainModule } from '../../../modules/bounty/domain'

import { ClaimByBountyController } from './claimByBounty.controller'

import { WalletDomainModule } from '../../../modules/wallet/domain'

import { ClaimByWalletController } from './claimByWallet.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ClaimDomainModule,

    UserDomainModule,

    BountyDomainModule,

    WalletDomainModule,
  ],
  controllers: [
    ClaimController,

    ClaimByUserController,

    ClaimByBountyController,

    ClaimByWalletController,
  ],
  providers: [],
})
export class ClaimApplicationModule {}
