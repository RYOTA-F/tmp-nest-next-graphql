import { ApolloError } from 'apollo-server-errors'

export class BadRequestException extends ApolloError {
  constructor(message: string) {
    super(message, 'BAD_REQUEST')
    Object.defineProperty(this, 'name', { value: 'BadRequestException' })
  }
}
