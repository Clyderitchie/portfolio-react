const gql = String.raw;

module.exports = gql`
  type Admin {
    _id: ID
    username: String
    password: String
  }

  type Query {
    getAllAdmins: [Admin]
    getAdmin(adminId: ID): Admin 
  }

  type Mutation {
  createAdmin(username: String!, password: String!): Admin
}
`;
