import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ClaimDomainFacade } from '@server/modules/claim/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ClaimApplicationEvent } from './claim.application.event'
import { ClaimCreateDto } from './claim.dto'

import { BountyDomainFacade } from '../../bounty/domain'

@Controller('/v1/bountys')
export class ClaimByBountyController {
  constructor(
    private bountyDomainFacade: BountyDomainFacade,

    private claimDomainFacade: ClaimDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/bounty/:bountyId/claims')
  async findManyBountyId(
    @Param('bountyId') bountyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.bountyDomainFacade.findOneByIdOrFail(bountyId)

    const items = await this.claimDomainFacade.findManyByBounty(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/bounty/:bountyId/claims')
  async createByBountyId(
    @Param('bountyId') bountyId: string,
    @Body() body: ClaimCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, bountyId }

    const item = await this.claimDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ClaimApplicationEvent.ClaimCreated.Payload>(
      ClaimApplicationEvent.ClaimCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
