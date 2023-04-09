import { Field, InputType } from '@nestjs/graphql'
import { IsDateString, IsNotEmpty } from 'class-validator'

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsDateString()
  duDate: string

  @Field()
  description: string
}
