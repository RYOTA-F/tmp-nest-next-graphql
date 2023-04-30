import { Injectable } from '@nestjs/common'
import { CONNPASS_API_ENDPOINT } from './connpass-api.const'
import { ConnpassEventsResponse } from './connpass-api.types'
import { ClientError } from 'src/errors/client.error'

@Injectable()
export class ConnpassAPIClient {
  async fetchEventById(id: number): Promise<ConnpassEventsResponse> {
    const endPoint = `${CONNPASS_API_ENDPOINT}?event_id=${id}`

    return await fetch(endPoint)
      .then((response) => response.json())
      .catch((error) => {
        throw new ClientError(error)
      })
  }
}
