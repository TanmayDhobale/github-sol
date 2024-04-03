import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Issue as IssueModel } from './issue/issue.model'

import { Bounty as BountyModel } from './bounty/bounty.model'

import { Wallet as WalletModel } from './wallet/wallet.model'

import { Claim as ClaimModel } from './claim/claim.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Issue extends IssueModel {}

  export class Bounty extends BountyModel {}

  export class Wallet extends WalletModel {}

  export class Claim extends ClaimModel {}
}
