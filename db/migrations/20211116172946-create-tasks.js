"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Tasks",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        taskName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        taskTime: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        listId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Lists" },
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Users" },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      options
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tasks", options);
  },
};
