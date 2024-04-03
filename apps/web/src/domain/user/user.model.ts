import { Notification } from '../notification'

import { Wallet } from '../wallet'

import { Claim } from '../claim'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  wallets?: Wallet[]

  claims?: Claim[]
}
