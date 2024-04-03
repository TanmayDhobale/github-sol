import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { WalletDomainFacade } from './wallet.domain.facade'
import { Wallet } from './wallet.model'

@Module({
  imports: [TypeOrmModule.forFeature([Wallet]), DatabaseHelperModule],
  providers: [WalletDomainFacade, WalletDomainFacade],
  exports: [WalletDomainFacade],
})
export class WalletDomainModule {}
