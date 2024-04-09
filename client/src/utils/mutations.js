import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $phone: String!) {
    addUser(username: $username, email: $email, password: $password, phone: $phone) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $username: String!, $email: String!, $phone: String!) {
    updateUser(id: $id, username: $username, email: $email) {
      user {
        _id
        username
        email
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($cartItem: Product!) {
    addUser(cartItem: $cartItem) {
      token
      user {
        _id
        username
        email
        cart {
          _id
          product {
            _id
            productname
            description
            price
            stock
            image
          }
          total
        }
      }
    }
  }
`;


