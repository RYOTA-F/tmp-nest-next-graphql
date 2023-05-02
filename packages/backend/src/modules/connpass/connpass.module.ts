import { Module } from '@nestjs/common'
import { ConnpassAPIClient } from '@clients/connpass/connpass-api.client'
import { ConnpassResolver } from './connpass.resolver'
import { ConnpassService } from './connpass.service'
import { ConnpassUsecase } from './connpass.usecase'

@Module({
  providers: [
    ConnpassResolver,
    ConnpassService,
    ConnpassUsecase,
    ConnpassAPIClient,
  ],
})
export class ConnpassModule {}
