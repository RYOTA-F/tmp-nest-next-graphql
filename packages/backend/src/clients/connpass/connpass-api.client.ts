import { Injectable } from '@nestjs/common'
import { CONNPASS_API_ENDPOINT } from './connpass-api.const'
import { ConnpassEventsResponse } from './connpass-api.types'
import { ClientError } from '../../errors/client.error'

@Injectable()
export class ConnpassAPIClient {
  async fetchEvent(query: string): Promise<ConnpassEventsResponse> {
    const endPoint = `${CONNPASS_API_ENDPOINT}${query}`

    return await fetch(endPoint)
      .then((response) => response.json())
      .catch((error) => {
        throw new ClientError(error)
      })
  }
}
