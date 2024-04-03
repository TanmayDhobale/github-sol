import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BountyDomainFacade } from './bounty.domain.facade'
import { Bounty } from './bounty.model'

@Module({
  imports: [TypeOrmModule.forFeature([Bounty]), DatabaseHelperModule],
  providers: [BountyDomainFacade, BountyDomainFacade],
  exports: [BountyDomainFacade],
})
export class BountyDomainModule {}
