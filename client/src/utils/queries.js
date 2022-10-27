import { gql } from '@apollo/client';

export const EMAIL_GUESTS = gql`
query emailGuests($id: ID!) {
    emailGuests(_id: $id) {
      guests
    }
  }
`