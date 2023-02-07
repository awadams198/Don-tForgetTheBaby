"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Lists";
    return queryInterface.bulkInsert(
      options,
      [
        {
          listName: "Completed Tasks",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Groceries",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Chores",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Work To-Do's",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Favors for Friends",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Lists";
    return queryInterface.bulkDelete(options);
  },
};
