import { gql } from "@apollo/client";

export const CREATE_ADMIN = gql`
  mutation createAdmin($username: String!, $password: String!) {
    createAdmin(username: $username, password: $password) {
      token
      admin {
        _id
        username
        password
      }
    }
  }
`;
