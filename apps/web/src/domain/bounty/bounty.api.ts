import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Bounty } from './bounty.model'

export class BountyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Bounty>,
  ): Promise<Bounty[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bountys${buildOptions}`)
  }

  static findOne(
    bountyId: string,
    queryOptions?: ApiHelper.QueryOptions<Bounty>,
  ): Promise<Bounty> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bountys/${bountyId}${buildOptions}`)
  }

  static createOne(values: Partial<Bounty>): Promise<Bounty> {
    return HttpService.api.post(`/v1/bountys`, values)
  }

  static updateOne(bountyId: string, values: Partial<Bounty>): Promise<Bounty> {
    return HttpService.api.patch(`/v1/bountys/${bountyId}`, values)
  }

  static deleteOne(bountyId: string): Promise<void> {
    return HttpService.api.delete(`/v1/bountys/${bountyId}`)
  }

  static findManyByIssueId(
    issueId: string,
    queryOptions?: ApiHelper.QueryOptions<Bounty>,
  ): Promise<Bounty[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/issues/issue/${issueId}/bountys${buildOptions}`,
    )
  }

  static createOneByIssueId(
    issueId: string,
    values: Partial<Bounty>,
  ): Promise<Bounty> {
    return HttpService.api.post(`/v1/issues/issue/${issueId}/bountys`, values)
  }
}
