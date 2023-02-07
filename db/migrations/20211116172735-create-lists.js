"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Lists",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        listName: {
          type: Sequelize.STRING(50),
          allowNull: false,
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
    return queryInterface.dropTable("Lists", options);
  },
};
