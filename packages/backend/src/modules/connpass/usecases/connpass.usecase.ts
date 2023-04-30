import { Injectable } from '@nestjs/common'
import { ConnpassAPIClient } from 'src/clients/connpass/connpass-api.client'
import { ConnpassEventEntity } from '../../../entities/connpass-event.entity'
import { DataNotFoundError } from '../../../errors/data-not-found.error'

@Injectable()
export class ConnpassUsecase {
  constructor(private readonly connpassApiClient: ConnpassAPIClient) {}

  async getEventById(eventId: number): Promise<ConnpassEventEntity> {
    const res = await this.connpassApiClient.fetchEventById(eventId)

    if (!res.events[0]) {
      throw new DataNotFoundError(`ID: ${eventId} のイベントが見つかりません`)
    }

    return new ConnpassEventEntity(
      res.events[0].event_id,
      res.events[0].title,
      res.events[0].catch,
      res.events[0].description,
      res.events[0].event_url,
      new Date(res.events[0].started_at),
      new Date(res.events[0].ended_at),
      res.events[0].limit,
      res.events[0].hash_tag,
      res.events[0].event_type,
      res.events[0].accepted,
      res.events[0].waiting,
      new Date(res.events[0].updated_at),
      res.events[0].owner_id,
      res.events[0].owner_nickname,
      res.events[0].owner_display_name,
      res.events[0].place,
      res.events[0].address,
      res.events[0].lat,
      res.events[0].lon,
      res.events[0].series,
    )
  }
}
