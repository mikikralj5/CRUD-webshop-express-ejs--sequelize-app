const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mikikralj5", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
