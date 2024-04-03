import { User } from '../user'

import { Bounty } from '../bounty'

import { Wallet } from '../wallet'

export class Claim {
  id: string

  status?: string

  userId: string

  user?: User

  bountyId: string

  bounty?: Bounty

  walletId: string

  wallet?: Wallet

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
