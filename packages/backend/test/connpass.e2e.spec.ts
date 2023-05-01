import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { BadRequestException } from '../src/errors/bad-request-exception.error'
import { BAD_REQUEST_EXCEPTION_MESSAGE } from '../src/errors/const/bad-request-exception.const'

describe('connpass', () => {
  let app: INestApplication

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = testModule.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
    jest.resetAllMocks()
  })

  describe('getConnpassEventById', () => {
    const query = `
      query ($eventId: Int) {
        getConnpassEventById(eventId: $eventId) {
          id
          title
          catchCopy
        }
      }
    `
    const variables = { eventId: 281130 }

    test('正常系: データが取得できる', async () => {
      const res = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query, variables })
      const getConnpassEventById = res.body.data.getConnpassEventById

      expect(getConnpassEventById.id).toEqual(variables.eventId)
      expect(getConnpassEventById.title).toEqual(
        '5/20(土)【エンジニアキャリア座談会 @ 秋葉原】',
      )
      expect(getConnpassEventById.catchCopy).toEqual(
        '〜 AI時代にどう生き残っていくか 〜',
      )
    })

    test('異常系: eventId が指定されていない場合 BadRequestException がthrowされる', async () => {
      const subject = async () =>
        request(app.getHttpServer()).post('/graphql').send({ query })

      try {
        await subject()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.message).toEqual(
          BAD_REQUEST_EXCEPTION_MESSAGE.EVENT_ID_IS_NOT_SPECIFIED,
        )
      }
    })
  })
})
