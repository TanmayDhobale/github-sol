import { User } from '../user'

import { Claim } from '../claim'

export class Wallet {
  id: string

  solanaAddress: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  claims?: Claim[]
}
