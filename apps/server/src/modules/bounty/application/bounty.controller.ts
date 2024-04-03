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
import { Bounty, BountyDomainFacade } from '@server/modules/bounty/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BountyApplicationEvent } from './bounty.application.event'
import { BountyCreateDto, BountyUpdateDto } from './bounty.dto'

@Controller('/v1/bountys')
export class BountyController {
  constructor(
    private eventService: EventService,
    private bountyDomainFacade: BountyDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.bountyDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BountyCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.bountyDomainFacade.create(body)

    await this.eventService.emit<BountyApplicationEvent.BountyCreated.Payload>(
      BountyApplicationEvent.BountyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:bountyId')
  async findOne(@Param('bountyId') bountyId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.bountyDomainFacade.findOneByIdOrFail(
      bountyId,
      queryOptions,
    )

    return item
  }

  @Patch('/:bountyId')
  async update(
    @Param('bountyId') bountyId: string,
    @Body() body: BountyUpdateDto,
  ) {
    const item = await this.bountyDomainFacade.findOneByIdOrFail(bountyId)

    const itemUpdated = await this.bountyDomainFacade.update(
      item,
      body as Partial<Bounty>,
    )
    return itemUpdated
  }

  @Delete('/:bountyId')
  async delete(@Param('bountyId') bountyId: string) {
    const item = await this.bountyDomainFacade.findOneByIdOrFail(bountyId)

    await this.bountyDomainFacade.delete(item)

    return item
  }
}
