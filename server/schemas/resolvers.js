const {  AuthenticationError, signToken } = require('../utils/auth');
const { Admin } = require("../models");

module.exports = {
  Query: {
    getAllAdmins: async () => {
      return await Admin.find({});
    },
    getAdmin: async (_, args) => {
      return await Admin.findById(args.adminId);
    },
  },
  Mutation: {
    createAdmin: async (_, args) => {
      //   try {
      //     // Ensure both username and password are passed and valid
      //     if (!username || !password) {
      //       throw new Error("Username and password are required.");
      //     }

      //     // Create the Admin with the provided fields
      //     const admin = await Admin.create({ username, password });

      //     return admin;
      //   } catch (error) {
      //     console.error(error);
      //     throw new Error("Failed to create admin");
      //   }
      const admin = await Admin.create(args);
      const token = signToken(admin);
      return { token, admin };
    },
  },
};
