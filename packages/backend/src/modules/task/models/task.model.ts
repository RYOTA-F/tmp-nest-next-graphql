import { Field, ObjectType, Int } from '@nestjs/graphql'
import { Status } from '@prisma/client'

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  duDate: string

  @Field()
  status: Status

  @Field()
  description: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
