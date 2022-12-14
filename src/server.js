/**
 * Entry point of API
 */
import { ApolloServer } from 'apollo-server-express'
import express from 'express'

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: process.env.PORT }, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})