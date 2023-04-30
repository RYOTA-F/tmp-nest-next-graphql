import { Resolver, Query, Args, Int } from '@nestjs/graphql'
import { ConnpassEvent } from '../../gqltypes/connpass-event.gqltype'
import { ConnpassService } from './connpass.service'

@Resolver(() => ConnpassEvent)
export class ConnpassResolver {
  constructor(private readonly connpassService: ConnpassService) {}

  @Query(() => ConnpassEvent)
  async getConnpassEventById(
    @Args('eventId', { type: () => Int, nullable: true })
    eventId: number | undefined,
  ): Promise<ConnpassEvent> {
    return await this.connpassService.getEventById(eventId)
  }
}
