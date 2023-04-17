import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import '@/styles/globals.css'

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
