import { Injectable } from '@nestjs/common'
import { ConnpassAPIClient } from '../../clients/connpass/connpass-api.client'
import { ConnpassEventEntity } from '../../entities/connpass-event.entity'
import { DataNotFoundException } from '../../errors/data-not-found.error'

@Injectable()
export class ConnpassUsecase {
  constructor(private readonly connpassApiClient: ConnpassAPIClient) {}

  async getEventById(eventId: number): Promise<ConnpassEventEntity> {
    const query = `?event_id=${eventId}`
    const res = await this.connpassApiClient.fetchEvent(query)

    if (!res!.events[0]) {
      throw new DataNotFoundException(
        `ID: ${eventId} のイベントが見つかりません`,
      )
    }

    const targetEvent = res.events[0]

    return new ConnpassEventEntity(
      targetEvent.event_id,
      targetEvent.title,
      targetEvent.catch,
      targetEvent.description,
      targetEvent.event_url,
      new Date(targetEvent.started_at),
      new Date(targetEvent.ended_at),
      targetEvent.limit,
      targetEvent.hash_tag,
      targetEvent.event_type,
      targetEvent.accepted,
      targetEvent.waiting,
      new Date(targetEvent.updated_at),
      targetEvent.owner_id,
      targetEvent.owner_nickname,
      targetEvent.owner_display_name,
      targetEvent.place,
      targetEvent.address,
      targetEvent.lat,
      targetEvent.lon,
      targetEvent.series,
    )
  }
}
