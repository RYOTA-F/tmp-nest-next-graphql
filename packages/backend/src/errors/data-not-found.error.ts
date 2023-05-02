import { ApolloError } from 'apollo-server-errors'

export class DataNotFoundException extends ApolloError {
  constructor(message: string) {
    super(message, 'DATE_NOT_FOUND')
    Object.defineProperty(this, 'name', { value: 'DataNotFoundException' })
  }
}
