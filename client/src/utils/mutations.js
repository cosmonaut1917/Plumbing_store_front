import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!, $phone: String!) {
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
mutation addUser($username: String!, $email: String!, $password: String!, $phone: String!, $admin: Boolean) {
  addUser(username: $username, email: $email, password: $password, phone: $phone, admin: $admin) {
    token
    user {
      _id
      username
      email
      password
      phone
      admin
    }
  }
}
`;

// export const UPDATE_USER = gql`
//   mutation updateUser($id: ID!, $username: String!, $email: String!, $phone: String!) {
//     updateUser(_id: $id, username: $username, email: $email) {
//       user {
//         _id
//         username
//         email
//       }
//     }
//   }
// `;
export const UPDATE_USER_ADMIN = gql`
mutation udateUser($id: ID!, $admin: Boolean) {
  updateUser(_id: $id, admin: $admin) {
    _id
    username
    email
    password
    phone
    admin
  }
}
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
  }
`;




