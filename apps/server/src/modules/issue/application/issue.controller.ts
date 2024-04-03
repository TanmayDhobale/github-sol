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
import { Issue, IssueDomainFacade } from '@server/modules/issue/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { IssueApplicationEvent } from './issue.application.event'
import { IssueCreateDto, IssueUpdateDto } from './issue.dto'

@Controller('/v1/issues')
export class IssueController {
  constructor(
    private eventService: EventService,
    private issueDomainFacade: IssueDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.issueDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: IssueCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.issueDomainFacade.create(body)

    await this.eventService.emit<IssueApplicationEvent.IssueCreated.Payload>(
      IssueApplicationEvent.IssueCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:issueId')
  async findOne(@Param('issueId') issueId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.issueDomainFacade.findOneByIdOrFail(
      issueId,
      queryOptions,
    )

    return item
  }

  @Patch('/:issueId')
  async update(
    @Param('issueId') issueId: string,
    @Body() body: IssueUpdateDto,
  ) {
    const item = await this.issueDomainFacade.findOneByIdOrFail(issueId)

    const itemUpdated = await this.issueDomainFacade.update(
      item,
      body as Partial<Issue>,
    )
    return itemUpdated
  }

  @Delete('/:issueId')
  async delete(@Param('issueId') issueId: string) {
    const item = await this.issueDomainFacade.findOneByIdOrFail(issueId)

    await this.issueDomainFacade.delete(item)

    return item
  }
}
