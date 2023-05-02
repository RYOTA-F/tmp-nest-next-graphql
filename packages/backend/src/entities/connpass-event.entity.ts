import { ConnpassEventSeries } from 'src/clients/connpass/connpass-api.types'

export class ConnpassEventEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly catchCopy: string,
    public readonly description: string,
    public readonly eventUrl: string,
    public readonly startedAt: Date,
    public readonly endedAt: Date,
    public readonly limit: number | null,
    public readonly hashTag: string,
    public readonly eventType: string,
    public readonly accepted: number,
    public readonly waiting: number,
    public readonly updatedAt: Date,
    public readonly ownerId: number,
    public readonly ownerNickname: string,
    public readonly ownerDisplayName: string,
    public readonly place: string | null,
    public readonly address: string | null,
    public readonly lat: string,
    public readonly lon: string,
    public readonly series: ConnpassEventSeries | null,
  ) {}
}
