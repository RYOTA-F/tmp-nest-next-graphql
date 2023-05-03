import { Injectable } from '@nestjs/common'
import { ConnpassEventEntity } from './entities/connpass-event.entity'
import { ConnpassUsecase } from './connpass.usecase'

@Injectable()
export class ConnpassService {
  constructor(private readonly connpassUsecase: ConnpassUsecase) {}

  async getEventById(eventId: number): Promise<ConnpassEventEntity> {
    return await this.connpassUsecase.getEventById(eventId)
  }
}
