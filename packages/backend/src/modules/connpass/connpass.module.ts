import { Module } from '@nestjs/common'
import { ConnpassResolver } from './connpass.resolver'
import { ConnpassService } from './connpass.service'
import { ConnpassUsecase } from './usecases/connpass.usecase'
import { ConnpassAPIClient } from '../../clients/connpass/connpass-api.client'

@Module({
  providers: [
    ConnpassResolver,
    ConnpassService,
    ConnpassUsecase,
    ConnpassAPIClient,
  ],
})
export class ConnpassModule {}
