import { gql } from "@apollo/client";

export const EMAIL_GUESTS = gql`
  query emailGuests($id: ID!) {
    emailGuests(_id: $id) {
      guests
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      party {
        _id
        name
        description
        host
        guests
        date
        location
        theme
      }
    }
  }
`;
export const QUERY_USER = gql`
  query User($username: String) {
    user(username: $username) {
      _id
      username
      email
      party {
        _id
        name
        description
        host
        guests
        date
        location
        theme
      }
    }
  }
`;
export const QUERY_PARTIES = gql`
  query partyByUser($hostName: String!) {
    partyByUser(hostName: $hostName) {
      _id
      hostName
      description
      guests
      date
      location
      time
      theme
    }
  }
`;
export const QUERY_PARTY = gql`
  query partyById($id: ID!) {
    partyById(_id: $id) {
      _id
      hostName
      description
      guests
      rsvps
      declines
      date
      location
      time
      theme
    }
  }
`;
