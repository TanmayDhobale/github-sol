import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { IssueApplicationModule } from './issue/application'

import { BountyApplicationModule } from './bounty/application'

import { WalletApplicationModule } from './wallet/application'

import { ClaimApplicationModule } from './claim/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    IssueApplicationModule,

    BountyApplicationModule,

    WalletApplicationModule,

    ClaimApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
