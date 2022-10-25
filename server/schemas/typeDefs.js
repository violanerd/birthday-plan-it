const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    parties: [Party]
  }

  type Party {
    _id: ID
    name: String
    description: String
    host: String
    guests: [String]
    date: String
    location: String
    theme: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    parties(username: String): [Party]
    party(_id: ID!): Party
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addParty(
      name: String!
      description: String
      date: String
      location: String
      theme: Int!
      guests: [String]
    ): Party
    inviteGuest(partyId: ID!, email: String!): Party
  }
`;

module.exports = typeDefs;
