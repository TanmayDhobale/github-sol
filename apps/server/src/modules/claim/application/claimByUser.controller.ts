import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ClaimDomainFacade } from '@server/modules/claim/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ClaimApplicationEvent } from './claim.application.event'
import { ClaimCreateDto } from './claim.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ClaimByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private claimDomainFacade: ClaimDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/claims')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.claimDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/claims')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ClaimCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
