"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          firstName: "Demo",
          lastName: "User",
          username: "demo_user",
          email: "demo_user@email.com",
          hashedPassword: bcrypt.hashSync("demo"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options);
  },
};
