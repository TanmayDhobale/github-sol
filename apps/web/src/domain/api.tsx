import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { IssueApi } from './issue/issue.api'

import { BountyApi } from './bounty/bounty.api'

import { WalletApi } from './wallet/wallet.api'

import { ClaimApi } from './claim/claim.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Issue extends IssueApi {}

  export class Bounty extends BountyApi {}

  export class Wallet extends WalletApi {}

  export class Claim extends ClaimApi {}
}
