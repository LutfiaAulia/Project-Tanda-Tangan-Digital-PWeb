const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tbpweb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
