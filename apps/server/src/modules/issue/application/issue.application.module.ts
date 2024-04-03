import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { IssueDomainModule } from '../domain'
import { IssueController } from './issue.controller'

@Module({
  imports: [AuthenticationDomainModule, IssueDomainModule],
  controllers: [IssueController],
  providers: [],
})
export class IssueApplicationModule {}
