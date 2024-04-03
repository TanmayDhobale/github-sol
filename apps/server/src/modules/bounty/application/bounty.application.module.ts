import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BountyDomainModule } from '../domain'
import { BountyController } from './bounty.controller'

import { IssueDomainModule } from '../../../modules/issue/domain'

import { BountyByIssueController } from './bountyByIssue.controller'

@Module({
  imports: [AuthenticationDomainModule, BountyDomainModule, IssueDomainModule],
  controllers: [BountyController, BountyByIssueController],
  providers: [],
})
export class BountyApplicationModule {}
