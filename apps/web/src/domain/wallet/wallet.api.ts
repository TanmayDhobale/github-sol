import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Wallet } from './wallet.model'

export class WalletApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Wallet>,
  ): Promise<Wallet[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/wallets${buildOptions}`)
  }

  static findOne(
    walletId: string,
    queryOptions?: ApiHelper.QueryOptions<Wallet>,
  ): Promise<Wallet> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/wallets/${walletId}${buildOptions}`)
  }

  static createOne(values: Partial<Wallet>): Promise<Wallet> {
    return HttpService.api.post(`/v1/wallets`, values)
  }

  static updateOne(walletId: string, values: Partial<Wallet>): Promise<Wallet> {
    return HttpService.api.patch(`/v1/wallets/${walletId}`, values)
  }

  static deleteOne(walletId: string): Promise<void> {
    return HttpService.api.delete(`/v1/wallets/${walletId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Wallet>,
  ): Promise<Wallet[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/wallets${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Wallet>,
  ): Promise<Wallet> {
    return HttpService.api.post(`/v1/users/user/${userId}/wallets`, values)
  }
}
