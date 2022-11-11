const Sequelize = require("sequelize")

const sequelize = new Sequelize("upload_system", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports =  sequelize;
