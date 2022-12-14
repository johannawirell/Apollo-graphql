/**
 * Function that is called when call a query or mutation
 */
import { users } from "../FakeData.js"

export const resolvers = {
  Query: {
    getAllUsers() {
      return users
    }
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args
      users.push(newUser)
      return newUser
    }
  }
}