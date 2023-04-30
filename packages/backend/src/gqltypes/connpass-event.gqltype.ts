import { Field, ObjectType, Int, GraphQLISODateTime } from '@nestjs/graphql'
import { ConnpassEventSeries } from './connpass-event-series.gqltype'

@ObjectType()
export abstract class ConnpassEvent {
  @Field(() => Int, { description: 'ID' })
  id!: number

  @Field(() => String, { description: 'イベント名' })
  title!: string

  @Field(() => String, { description: 'キャッチコピー' })
  catchCopy!: string

  @Field(() => String, { description: 'イベント概要' })
  description!: string

  @Field(() => String, { description: 'URL' })
  eventUrl!: string

  @Field(() => GraphQLISODateTime, { description: '開始日時' })
  startedAt!: Date

  @Field(() => GraphQLISODateTime, { description: '終了日時' })
  endedAt!: Date

  @Field(() => Int, { description: '定員', nullable: true })
  limit!: number

  @Field(() => String, { description: 'Twitterハッシュタグ' })
  hashTag!: string

  @Field(() => String, { description: '参加タイプ' })
  eventType!: string

  @Field(() => Int, { description: '参加者数' })
  accepted!: number

  @Field(() => Int, { description: '補欠者数' })
  waiting!: number

  @Field(() => GraphQLISODateTime, { description: '更新日時' })
  updatedAt!: Date

  @Field(() => Int, { description: '管理者: ID' })
  ownerId!: number

  @Field(() => String, { description: '管理者: ニックネーム' })
  ownerNickname!: string

  @Field(() => String, { description: '管理者: 表示名' })
  ownerDisplayName!: string

  @Field(() => String, { description: '会場: 名称', nullable: true })
  place!: string

  @Field(() => String, { description: '会場: 住所', nullable: true })
  address!: string

  @Field(() => String, { description: '会場: 緯度', nullable: true })
  lat!: string

  @Field(() => String, { description: '会場: 経度', nullable: true })
  lon!: string

  @Field(() => ConnpassEventSeries, { description: 'グループ', nullable: true })
  series!: ConnpassEventSeries
}
