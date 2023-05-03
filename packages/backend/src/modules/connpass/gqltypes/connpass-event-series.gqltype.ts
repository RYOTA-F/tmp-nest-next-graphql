import { Field, ObjectType, Int } from '@nestjs/graphql'

@ObjectType()
export abstract class ConnpassEventSeries {
  @Field(() => Int, { description: 'グループ: ID' })
  id!: number

  @Field(() => String, { description: 'グループ: 名称' })
  title!: string

  @Field(() => String, { description: 'グループ: URL' })
  url!: string
}
