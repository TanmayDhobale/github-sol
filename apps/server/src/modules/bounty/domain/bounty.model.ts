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

import { Issue } from '../../../modules/issue/domain'

import { Claim } from '../../../modules/claim/domain'

@Entity()
export class Bounty {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  status?: string

  @Column({ nullable: true })
  claimDate?: string

  @Column({})
  issueId: string

  @ManyToOne(() => Issue, parent => parent.bountys)
  @JoinColumn({ name: 'issueId' })
  issue?: Issue

  @OneToMany(() => Claim, child => child.bounty)
  claims?: Claim[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
