import { Test, TestingModule } from '@nestjs/testing'
import { ConnpassUsecase } from './connpass.usecase'
import { ConnpassAPIClient } from '../../clients/connpass/connpass-api.client'
import { ConnpassEventsResponse } from '../../clients/connpass/connpass-api.types'
import { ConnpassEventEntity } from '../../entities/connpass-event.entity'
import { ConnpassEventEntityFactory } from '../../../test/factories/connpass/connpass-event-entity.factory'
import { ConnpassEventsResponseFactory } from '../../../test/factories/connpass/connpass-api.factory'

describe('ConnpassUsecase', () => {
  let connpassUsecase: ConnpassUsecase
  let connpassAPIClient: ConnpassAPIClient
  let connpassEventEntity: ConnpassEventEntity
  let connpassEventsResponse: ConnpassEventsResponse
  let connpassEventsNotFoundResponse: ConnpassEventsResponse

  let eventId: number

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnpassUsecase, ConnpassAPIClient],
    }).compile()

    connpassUsecase = module.get<ConnpassUsecase>(ConnpassUsecase)
    connpassAPIClient = module.get<ConnpassAPIClient>(ConnpassAPIClient)

    connpassEventsResponse = ConnpassEventsResponseFactory.build()
    connpassEventsNotFoundResponse = ConnpassEventsResponseFactory.build({
      events: [],
    })

    connpassEventEntity = ConnpassEventEntityFactory.build({
      id: connpassEventsResponse.events[0].event_id,
      title: connpassEventsResponse.events[0].title,
      catchCopy: connpassEventsResponse.events[0].catch,
      description: connpassEventsResponse.events[0].description,
      eventUrl: connpassEventsResponse.events[0].event_url,
      startedAt: connpassEventsResponse.events[0].started_at,
      endedAt: connpassEventsResponse.events[0].ended_at,
      limit: connpassEventsResponse.events[0].limit,
      hashTag: connpassEventsResponse.events[0].hash_tag,
      eventType: connpassEventsResponse.events[0].event_type,
      accepted: connpassEventsResponse.events[0].accepted,
      waiting: connpassEventsResponse.events[0].waiting,
      updatedAt: connpassEventsResponse.events[0].updated_at,
      ownerId: connpassEventsResponse.events[0].owner_id,
      ownerNickname: connpassEventsResponse.events[0].owner_nickname,
      ownerDisplayName: connpassEventsResponse.events[0].owner_display_name,
      place: connpassEventsResponse.events[0].place,
      address: connpassEventsResponse.events[0].address,
      lat: connpassEventsResponse.events[0].lat,
      lon: connpassEventsResponse.events[0].lon,
      series: connpassEventsResponse.events[0].series,
    })

    jest
      .spyOn(connpassAPIClient, 'fetchEvent')
      .mockImplementation(() => Promise.resolve(connpassEventsResponse))
  })

  describe('getEventById', () => {
    test('正常系: ConnpassEventEntity が返る', async () => {
      eventId = 1
      const query = `?event_id=${eventId}`

      await connpassUsecase.getEventById(eventId)

      expect(connpassAPIClient.fetchEvent).toBeCalledTimes(1)
      expect(connpassAPIClient.fetchEvent).toBeCalledWith(query)
    })

    test('正常系: getEventById が呼ばれる', async () => {
      eventId = 1
      const result = await connpassUsecase.getEventById(eventId)

      expect(result).toEqual(connpassEventEntity)
    })

    test('異常系: 存在しないID  の場合 エラー が throwされる', async () => {
      eventId = 0

      jest
        .spyOn(connpassAPIClient, 'fetchEvent')
        .mockImplementation(() =>
          Promise.resolve(connpassEventsNotFoundResponse),
        )

      const subject = async () => connpassUsecase.getEventById(eventId)

      expect(subject()).rejects.toThrow()
    })
  })
})
