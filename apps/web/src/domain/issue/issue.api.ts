import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Issue } from './issue.model'

export class IssueApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Issue>,
  ): Promise<Issue[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/issues${buildOptions}`)
  }

  static findOne(
    issueId: string,
    queryOptions?: ApiHelper.QueryOptions<Issue>,
  ): Promise<Issue> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/issues/${issueId}${buildOptions}`)
  }

  static createOne(values: Partial<Issue>): Promise<Issue> {
    return HttpService.api.post(`/v1/issues`, values)
  }

  static updateOne(issueId: string, values: Partial<Issue>): Promise<Issue> {
    return HttpService.api.patch(`/v1/issues/${issueId}`, values)
  }

  static deleteOne(issueId: string): Promise<void> {
    return HttpService.api.delete(`/v1/issues/${issueId}`)
  }
}
