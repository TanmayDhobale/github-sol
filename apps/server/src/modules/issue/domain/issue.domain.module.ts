import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { IssueDomainFacade } from './issue.domain.facade'
import { Issue } from './issue.model'

@Module({
  imports: [TypeOrmModule.forFeature([Issue]), DatabaseHelperModule],
  providers: [IssueDomainFacade, IssueDomainFacade],
  exports: [IssueDomainFacade],
})
export class IssueDomainModule {}
