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
import { Wallet, WalletDomainFacade } from '@server/modules/wallet/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { WalletApplicationEvent } from './wallet.application.event'
import { WalletCreateDto, WalletUpdateDto } from './wallet.dto'

@Controller('/v1/wallets')
export class WalletController {
  constructor(
    private eventService: EventService,
    private walletDomainFacade: WalletDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.walletDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: WalletCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.walletDomainFacade.create(body)

    await this.eventService.emit<WalletApplicationEvent.WalletCreated.Payload>(
      WalletApplicationEvent.WalletCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:walletId')
  async findOne(@Param('walletId') walletId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.walletDomainFacade.findOneByIdOrFail(
      walletId,
      queryOptions,
    )

    return item
  }

  @Patch('/:walletId')
  async update(
    @Param('walletId') walletId: string,
    @Body() body: WalletUpdateDto,
  ) {
    const item = await this.walletDomainFacade.findOneByIdOrFail(walletId)

    const itemUpdated = await this.walletDomainFacade.update(
      item,
      body as Partial<Wallet>,
    )
    return itemUpdated
  }

  @Delete('/:walletId')
  async delete(@Param('walletId') walletId: string) {
    const item = await this.walletDomainFacade.findOneByIdOrFail(walletId)

    await this.walletDomainFacade.delete(item)

    return item
  }
}
