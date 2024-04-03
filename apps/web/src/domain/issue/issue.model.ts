import { Bounty } from '../bounty'

export class Issue {
  id: string

  title: string

  description?: string

  status?: string

  bountyAmount?: number

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  bountys?: Bounty[]
}
