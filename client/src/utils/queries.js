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
export const QUERY_USER_PARTY = gql`
  query User($username: String) {
    user(username: $username) {
      party {
        _id
      }
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
