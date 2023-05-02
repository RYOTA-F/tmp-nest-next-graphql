import { ApolloError } from 'apollo-server-errors'

export class ClientException extends ApolloError {
  constructor(message: string) {
    super(message, 'CLIENT_ERROR')
    Object.defineProperty(this, 'name', { value: 'ClientException' })
  }
}
