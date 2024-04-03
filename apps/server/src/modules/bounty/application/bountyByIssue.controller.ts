import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BountyDomainFacade } from '@server/modules/bounty/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BountyApplicationEvent } from './bounty.application.event'
import { BountyCreateDto } from './bounty.dto'

import { IssueDomainFacade } from '../../issue/domain'

@Controller('/v1/issues')
export class BountyByIssueController {
  constructor(
    private issueDomainFacade: IssueDomainFacade,

    private bountyDomainFacade: BountyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/issue/:issueId/bountys')
  async findManyIssueId(
    @Param('issueId') issueId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.issueDomainFacade.findOneByIdOrFail(issueId)

    const items = await this.bountyDomainFacade.findManyByIssue(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/issue/:issueId/bountys')
  async createByIssueId(
    @Param('issueId') issueId: string,
    @Body() body: BountyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, issueId }

    const item = await this.bountyDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BountyApplicationEvent.BountyCreated.Payload>(
      BountyApplicationEvent.BountyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
