import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Claim } from './claim.model'

import { User } from '../../user/domain'

import { Bounty } from '../../bounty/domain'

import { Wallet } from '../../wallet/domain'

@Injectable()
export class ClaimDomainFacade {
  constructor(
    @InjectRepository(Claim)
    private repository: Repository<Claim>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Claim>): Promise<Claim> {
    return this.repository.save(values)
  }

  async update(item: Claim, values: Partial<Claim>): Promise<Claim> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Claim): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Claim> = {},
  ): Promise<Claim[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Claim> = {},
  ): Promise<Claim> {
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

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Claim> = {},
  ): Promise<Claim[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByBounty(
    item: Bounty,
    queryOptions: RequestHelper.QueryOptions<Claim> = {},
  ): Promise<Claim[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('bounty')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        bountyId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByWallet(
    item: Wallet,
    queryOptions: RequestHelper.QueryOptions<Claim> = {},
  ): Promise<Claim[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('wallet')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        walletId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
