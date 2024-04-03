import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Bounty } from './bounty.model'

import { Issue } from '../../issue/domain'

@Injectable()
export class BountyDomainFacade {
  constructor(
    @InjectRepository(Bounty)
    private repository: Repository<Bounty>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Bounty>): Promise<Bounty> {
    return this.repository.save(values)
  }

  async update(item: Bounty, values: Partial<Bounty>): Promise<Bounty> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Bounty): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Bounty> = {},
  ): Promise<Bounty[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Bounty> = {},
  ): Promise<Bounty> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByIssue(
    item: Issue,
    queryOptions: RequestHelper.QueryOptions<Bounty> = {},
  ): Promise<Bounty[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('issue')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        issueId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
