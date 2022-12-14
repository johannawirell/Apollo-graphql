/**
 * Entry point of API
 */
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { typeDefs } from './schema/typeDefs.js'
import { resolvers } from './schema/resolvers.js'

/**
 * The main function of the application.
 */
const main = async () => {
  const app = express()

  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  server.applyMiddleware({ app })

  app.listen({ port: process.env.PORT }, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
}

main().catch(console.error)
