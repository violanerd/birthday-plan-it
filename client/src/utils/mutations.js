import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PARTY = gql`
  mutation AddParty(
    $hostName: String!
    $theme: Int!
    $description: String
    $date: String
    $location: String
    $guests: [String]
    $time: String
  ) {
    addParty(
      hostName: $hostName
      theme: $theme
      description: $description
      date: $date
      location: $location
      guests: $guests
      time: $time
    ) {
      _id
      hostName
      description
      date
      guests
      location
      time
      theme
    }
  }
`;

export const ADD_GUEST = gql`
  mutation ($partyId: ID!, $email: String!) {
    inviteGuest(partyId: $partyId, email: $email) {
      _id
      hostName
      guests
    }
  }
`;
export const RSVP = gql`
  mutation ($partyId: ID!) {
    rsvpToParty(partyId: $partyId) {
      _id
      guests
      rsvps
    }
  }
`;

export const ADD_DESCRIPTION = gql`
  mutation ($partyId: ID!, $description: String!) {
    addDescription(partyId: $partyId, description: $description) {
      _id
      hostName
      description
    }
  }
`;
