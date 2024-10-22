const gql = String.raw;

module.exports = gql`
  type Admin {
    _id: ID
    username: String
    password: String
  }

  type Auth {
    token: ID
    admin: Admin
  }

  type Query {
    getAllAdmins: [Admin]
    getAdmin(adminId: ID!): Admin
  }

  type Mutation {
    createAdmin(username: String!, password: String!): Auth
  }
`;
