import { Factory } from 'fishery'
import { ConnpassEventEntity } from '@modules/connpass/entities/connpass-event.entity'

export const ConnpassEventEntityFactory = Factory.define<ConnpassEventEntity>(
  ({ sequence }) =>
    new ConnpassEventEntity(
      sequence,
      `title-${sequence}`,
      `catch-${sequence}`,
      `description-${sequence}`,
      `event_url-${sequence}`,
      new Date(),
      new Date(),
      sequence,
      `hash_tag-${sequence}`,
      `event_type-${sequence}`,
      sequence,
      sequence,
      new Date(),
      sequence,
      `owner_nickname-${sequence}`,
      `owner_display_name-${sequence}`,
      `place-${sequence}`,
      `address-${sequence}`,
      `lat-${sequence}`,
      `lon-${sequence}`,
      {
        id: sequence,
        title: `title-${sequence}`,
        url: `url-${sequence}`,
      },
    ),
)
