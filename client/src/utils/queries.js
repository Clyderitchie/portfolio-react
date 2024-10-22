import { gql } from "@apollo/client";

export const QUERY_ADMINS = gql`
  query getAllAdmins {
    getAllAdmins {
      _id
      username
      password
    }
  }
`;

export const QUERY_ADMIN = gql`
  query getAdmin($adminId: ID!) {
    getAdmin(adminId: $adminId) {
      _id
      username
      password
    }
  }
`;
