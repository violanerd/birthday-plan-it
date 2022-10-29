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
    hostName: String
    description: String
    guests: [String]
    rsvps: [String]
    date: String
    location: String
    time: String
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
    parties(hostName: String): [Party]
    party(_id: ID!): Party
    emailGuests(_id: ID!): Party
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addParty(
      hostName: String!
      description: String
      date: String
      location: String
      theme: Int!
      guests: [String]
      time: String
    ): Party
    inviteGuest(partyId: ID!, email: String!): Party
    rsvpToParty(partyId: ID!): Party
    addDescription(partyId: ID!, description: String!): Party
  }
`;

module.exports = typeDefs;
