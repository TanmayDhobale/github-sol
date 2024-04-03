import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Bounty } from '../../../modules/bounty/domain'

import { Wallet } from '../../../modules/wallet/domain'

@Entity()
export class Claim {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  status?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.claims)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  bountyId: string

  @ManyToOne(() => Bounty, parent => parent.claims)
  @JoinColumn({ name: 'bountyId' })
  bounty?: Bounty

  @Column({})
  walletId: string

  @ManyToOne(() => Wallet, parent => parent.claims)
  @JoinColumn({ name: 'walletId' })
  wallet?: Wallet

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
