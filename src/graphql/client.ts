import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQL_HOST!, {
  headers: {
    authorization: process.env.BEARER!
  }
})
export default client
