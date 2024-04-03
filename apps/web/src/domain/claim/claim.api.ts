import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Claim } from './claim.model'

export class ClaimApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Claim>,
  ): Promise<Claim[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/claims${buildOptions}`)
  }

  static findOne(
    claimId: string,
    queryOptions?: ApiHelper.QueryOptions<Claim>,
  ): Promise<Claim> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/claims/${claimId}${buildOptions}`)
  }

  static createOne(values: Partial<Claim>): Promise<Claim> {
    return HttpService.api.post(`/v1/claims`, values)
  }

  static updateOne(claimId: string, values: Partial<Claim>): Promise<Claim> {
    return HttpService.api.patch(`/v1/claims/${claimId}`, values)
  }

  static deleteOne(claimId: string): Promise<void> {
    return HttpService.api.delete(`/v1/claims/${claimId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Claim>,
  ): Promise<Claim[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/claims${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Claim>,
  ): Promise<Claim> {
    return HttpService.api.post(`/v1/users/user/${userId}/claims`, values)
  }

  static findManyByBountyId(
    bountyId: string,
    queryOptions?: ApiHelper.QueryOptions<Claim>,
  ): Promise<Claim[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/bountys/bounty/${bountyId}/claims${buildOptions}`,
    )
  }

  static createOneByBountyId(
    bountyId: string,
    values: Partial<Claim>,
  ): Promise<Claim> {
    return HttpService.api.post(`/v1/bountys/bounty/${bountyId}/claims`, values)
  }

  static findManyByWalletId(
    walletId: string,
    queryOptions?: ApiHelper.QueryOptions<Claim>,
  ): Promise<Claim[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/wallets/wallet/${walletId}/claims${buildOptions}`,
    )
  }

  static createOneByWalletId(
    walletId: string,
    values: Partial<Claim>,
  ): Promise<Claim> {
    return HttpService.api.post(`/v1/wallets/wallet/${walletId}/claims`, values)
  }
}
