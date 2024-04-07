import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query allUsers{
  users{
    _id
    username
    email
    password
    phone
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      phone
      admin
    }
  }
`;
export const QUERY_PRODUCTS = gql`
query products {
  products{
    _id
    productname
    description
    price
    stock
    image
  }
}
`;
export const QUERY_CLIENTS = gql`
query clients {
  clients{
    _id
    firstname
    lastname
    contact
  }
}
`;



