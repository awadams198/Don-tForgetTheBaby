"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Tasks";
    return queryInterface.bulkInsert(
      options,
      [
        {
          taskName: "Buy Milk",
          taskTime: 5,
          listId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Pick up eggs",
          taskTime: 5,
          listId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Laundry",
          taskTime: 45,
          listId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Cook dinner",
          taskTime: 60,
          listId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Vacuum",
          taskTime: 30,
          listId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Write code",
          taskTime: 120,
          listId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Debug ex-coworker's project",
          taskTime: 60,
          listId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Sous vide center cut filet mignon",
          taskTime: 120,
          listId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskName: "Boost to Diamond",
          taskTime: 1440,
          listId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    options.tableName = "Tasks";
    return queryInterface.bulkDelete(options);
  },
};
