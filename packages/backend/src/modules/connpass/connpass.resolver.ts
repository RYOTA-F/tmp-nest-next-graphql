import { Resolver, Query, Args, Int } from '@nestjs/graphql'
import { ConnpassEvent } from '../../gqltypes/connpass-event.gqltype'
import { ConnpassService } from './connpass.service'
import { BadRequestException } from '../../errors/bad-request.error'
import { BAD_REQUEST_EXCEPTION_MESSAGE } from '../../errors/const/bad-request-exception.const'

@Resolver(() => ConnpassEvent)
export class ConnpassResolver {
  constructor(private readonly connpassService: ConnpassService) {}

  @Query(() => ConnpassEvent)
  async getConnpassEventById(
    @Args('eventId', { type: () => Int, nullable: true })
    eventId: number | undefined,
  ): Promise<ConnpassEvent> {
    if (!eventId)
      throw new BadRequestException(
        BAD_REQUEST_EXCEPTION_MESSAGE.EVENT_ID_IS_NOT_SPECIFIED,
      )

    return await this.connpassService.getEventById(eventId)
  }
}
