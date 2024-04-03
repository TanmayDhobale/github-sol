import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ClaimDomainFacade } from '@server/modules/claim/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ClaimApplicationEvent } from './claim.application.event'
import { ClaimCreateDto } from './claim.dto'

import { WalletDomainFacade } from '../../wallet/domain'

@Controller('/v1/wallets')
export class ClaimByWalletController {
  constructor(
    private walletDomainFacade: WalletDomainFacade,

    private claimDomainFacade: ClaimDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/wallet/:walletId/claims')
  async findManyWalletId(
    @Param('walletId') walletId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.walletDomainFacade.findOneByIdOrFail(walletId)

    const items = await this.claimDomainFacade.findManyByWallet(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/wallet/:walletId/claims')
  async createByWalletId(
    @Param('walletId') walletId: string,
    @Body() body: ClaimCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, walletId }

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
