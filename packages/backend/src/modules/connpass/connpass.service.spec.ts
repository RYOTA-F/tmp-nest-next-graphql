import { Test, TestingModule } from '@nestjs/testing'
import { ConnpassAPIClient } from '@clients/connpass/connpass-api.client'
import { ConnpassEventEntity } from '@entities/connpass-event.entity'
import { ConnpassEventEntityFactory } from '@factories/connpass/connpass-event-entity.factory'
import { ConnpassUsecase } from './connpass.usecase'
import { ConnpassResolver } from './connpass.resolver'
import { ConnpassService } from './connpass.service'

describe('ConnpassService', () => {
  let connpassService: ConnpassService
  let connpassUsecase: ConnpassUsecase
  let connpassEventEntity: ConnpassEventEntity

  const targetId = 1

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConnpassResolver,
        ConnpassService,
        ConnpassUsecase,
        ConnpassAPIClient,
      ],
    }).compile()

    connpassService = module.get<ConnpassService>(ConnpassService)
    connpassUsecase = module.get<ConnpassUsecase>(ConnpassUsecase)
    connpassEventEntity = ConnpassEventEntityFactory.build()

    jest
      .spyOn(connpassUsecase, 'getEventById')
      .mockImplementation(() => Promise.resolve(connpassEventEntity))
  })

  describe('getEventById', () => {
    test('正常系: getEventById が呼ばれる', async () => {
      await connpassService.getEventById(targetId)

      expect(connpassUsecase.getEventById).toHaveBeenCalledTimes(1)
      expect(connpassUsecase.getEventById).toHaveBeenCalledWith(targetId)
    })

    test('正常系: ConnpassEventEntity が返る', async () => {
      const result = await connpassService.getEventById(targetId)

      expect(result).toEqual(connpassEventEntity)
    })
  })
})
