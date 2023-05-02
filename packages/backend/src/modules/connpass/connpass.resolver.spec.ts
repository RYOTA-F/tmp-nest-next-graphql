import { Test, TestingModule } from '@nestjs/testing'
import { ConnpassResolver } from './connpass.resolver'
import { ConnpassService } from './connpass.service'
import { ConnpassEvent } from '../../gqltypes/connpass-event.gqltype'
import { ConnpassUsecase } from './usecases/connpass.usecase'
import { ConnpassAPIClient } from '../../clients/connpass/connpass-api.client'
import { ConnpassEventEntity } from '../../entities/connpass-event.entity'
import { ConnpassEventEntityFactory } from '../../../test/factories/connpass/connpass-event-entity.factory'
import { ConnpassEventGqltypeFactory } from '../../../test/factories/connpass/connpass-event-gqltype.factory'

describe('ConnpassResolver', () => {
  let connpassEventEntity: ConnpassEventEntity
  let connpassEventGQL: ConnpassEvent
  let connpassService: ConnpassService
  let connpassResolver: ConnpassResolver

  const eventIdMock = 1

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConnpassResolver,
        ConnpassService,
        ConnpassUsecase,
        ConnpassAPIClient,
      ],
    }).compile()

    connpassResolver = module.get<ConnpassResolver>(ConnpassResolver)
    connpassService = module.get<ConnpassService>(ConnpassService)
    connpassEventEntity = ConnpassEventEntityFactory.build()
    connpassEventGQL = ConnpassEventGqltypeFactory.build({
      id: connpassEventEntity.id,
      title: connpassEventEntity.title,
      catchCopy: connpassEventEntity.catchCopy,
      description: connpassEventEntity.description,
      eventUrl: connpassEventEntity.eventUrl,
      startedAt: connpassEventEntity.startedAt,
      endedAt: connpassEventEntity.endedAt,
      limit: connpassEventEntity.limit,
      hashTag: connpassEventEntity.hashTag,
      eventType: connpassEventEntity.eventType,
      accepted: connpassEventEntity.accepted,
      waiting: connpassEventEntity.waiting,
      updatedAt: connpassEventEntity.updatedAt,
      ownerId: connpassEventEntity.ownerId,
      ownerNickname: connpassEventEntity.ownerNickname,
      ownerDisplayName: connpassEventEntity.ownerDisplayName,
      place: connpassEventEntity.place,
      address: connpassEventEntity.address,
      lat: connpassEventEntity.lat,
      lon: connpassEventEntity.lon,
      series: {
        id: connpassEventEntity.series.id,
        title: connpassEventEntity.series.title,
        url: connpassEventEntity.series.url,
      },
    })

    jest
      .spyOn(connpassService, 'getEventById')
      .mockImplementation(() => Promise.resolve(connpassEventEntity))
  })

  describe('getConnpassEventById', () => {
    test('正常系: ConnpassEvent が返る', async () => {
      const result = await connpassResolver.getConnpassEventById(eventIdMock)

      expect(result).toEqual(connpassEventGQL)
      expect(connpassService.getEventById).toHaveBeenCalledWith(eventIdMock)
    })

    test('異常系: eventId が指定されていない場合 エラー がthrowされる', async () => {
      const subject = async () =>
        connpassResolver.getConnpassEventById(undefined)

      expect(subject).rejects.toThrow()
    })
  })
})
