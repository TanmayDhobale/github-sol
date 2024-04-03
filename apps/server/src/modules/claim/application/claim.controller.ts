import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Claim, ClaimDomainFacade } from '@server/modules/claim/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ClaimApplicationEvent } from './claim.application.event'
import { ClaimCreateDto, ClaimUpdateDto } from './claim.dto'

@Controller('/v1/claims')
export class ClaimController {
  constructor(
    private eventService: EventService,
    private claimDomainFacade: ClaimDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.claimDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ClaimCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.claimDomainFacade.create(body)

    await this.eventService.emit<ClaimApplicationEvent.ClaimCreated.Payload>(
      ClaimApplicationEvent.ClaimCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:claimId')
  async findOne(@Param('claimId') claimId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.claimDomainFacade.findOneByIdOrFail(
      claimId,
      queryOptions,
    )

    return item
  }

  @Patch('/:claimId')
  async update(
    @Param('claimId') claimId: string,
    @Body() body: ClaimUpdateDto,
  ) {
    const item = await this.claimDomainFacade.findOneByIdOrFail(claimId)

    const itemUpdated = await this.claimDomainFacade.update(
      item,
      body as Partial<Claim>,
    )
    return itemUpdated
  }

  @Delete('/:claimId')
  async delete(@Param('claimId') claimId: string) {
    const item = await this.claimDomainFacade.findOneByIdOrFail(claimId)

    await this.claimDomainFacade.delete(item)

    return item
  }
}
