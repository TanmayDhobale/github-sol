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

import { Claim } from '../../../modules/claim/domain'

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  solanaAddress: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.wallets)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Claim, child => child.wallet)
  claims?: Claim[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
