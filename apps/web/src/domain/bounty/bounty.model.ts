import { Issue } from '../issue'

import { Claim } from '../claim'

export class Bounty {
  id: string

  status?: string

  claimDate?: string

  issueId: string

  issue?: Issue

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  claims?: Claim[]
}
