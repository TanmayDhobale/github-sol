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

import { Bounty } from '../../../modules/bounty/domain'

@Entity()
export class Issue {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  status?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  bountyAmount?: number

  @OneToMany(() => Bounty, child => child.issue)
  bountys?: Bounty[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
