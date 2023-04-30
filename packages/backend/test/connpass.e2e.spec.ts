import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'

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
    test('データが取得できる', async () => {
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
  })
})