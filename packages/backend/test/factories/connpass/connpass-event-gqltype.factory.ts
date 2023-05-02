import { Factory } from 'fishery'
import { ConnpassEvent } from '../../../src/gqltypes/connpass-event.gqltype'

export const ConnpassEventGqltypeFactory = Factory.define<ConnpassEvent>(
  ({ sequence }) =>
    ({
      id: sequence,
      title: `title-${sequence}`,
      catchCopy: `catch-${sequence}`,
      description: `description-${sequence}`,
      eventUrl: `event_url-${sequence}`,
      startedAt: new Date(),
      endedAt: new Date(),
      limit: sequence,
      hashTag: `hash_tag-${sequence}`,
      eventType: `event_type-${sequence}`,
      accepted: sequence,
      waiting: sequence,
      updatedAt: new Date(),
      ownerId: sequence,
      ownerNickname: `owner_nickname-${sequence}`,
      ownerDisplayName: `owner_display_name-${sequence}`,
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
