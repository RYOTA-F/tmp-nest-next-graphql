import { Factory } from 'fishery'
import { ConnpassEvent } from '../../../src/clients/connpass/connpass-api.types'

export const ConnpassApiFactory = Factory.define<ConnpassEvent>(
  ({ sequence }) =>
    ({
      event_id: sequence,
      title: `title-${sequence}`,
      catch: `catch-${sequence}`,
      description: `description-${sequence}`,
      event_url: `event_url-${sequence}`,
      started_at: new Date(),
      ended_at: new Date(),
      limit: sequence,
      hash_tag: `hash_tag-${sequence}`,
      event_type: `event_type-${sequence}`,
      accepted: sequence,
      waiting: sequence,
      updated_at: `updated_at-${sequence}`,
      owner_id: sequence,
      owner_nickname: `owner_nickname-${sequence}`,
      owner_display_name: `owner_display_name-${sequence}`,
      place: `place-${sequence}`,
      address: `address-${sequence}`,
      lat: `lat-${sequence}`,
      lon: `lon-${sequence}`,
      series: {
        id: sequence,
        title: `title-${sequence}`,
        url: `url-${sequence}`,
      },
    } as ConnpassEvent),
)