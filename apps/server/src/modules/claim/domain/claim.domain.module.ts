import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ClaimDomainFacade } from './claim.domain.facade'
import { Claim } from './claim.model'

@Module({
  imports: [TypeOrmModule.forFeature([Claim]), DatabaseHelperModule],
  providers: [ClaimDomainFacade, ClaimDomainFacade],
  exports: [ClaimDomainFacade],
})
export class ClaimDomainModule {}
