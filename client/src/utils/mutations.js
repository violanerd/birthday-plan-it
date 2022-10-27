import { gql } from '@apollo/client';

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
mutation AddParty($name: String!, $theme: Int!, $description: String, $date: String, $location: String, $guests: [String]) {
    addParty(name: $name, theme: $theme, description: $description, date: $date, location: $location, guests: $guests) {
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
  `;
