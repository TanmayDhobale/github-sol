import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { WalletDomainModule } from '../domain'
import { WalletController } from './wallet.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { WalletByUserController } from './walletByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, WalletDomainModule, UserDomainModule],
  controllers: [WalletController, WalletByUserController],
  providers: [],
})
export class WalletApplicationModule {}
