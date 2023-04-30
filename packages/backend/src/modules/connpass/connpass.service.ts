import { Injectable } from '@nestjs/common'
import { ConnpassUsecase } from './usecases/connpass.usecase'
import { ConnpassEventEntity } from '../../entities/connpass-event.entity'

@Injectable()
export class ConnpassService {
  constructor(private readonly connpassUsecase: ConnpassUsecase) {}

  async getEventById(eventId: number): Promise<ConnpassEventEntity> {
    return await this.connpassUsecase.getEventById(eventId)
  }
}
