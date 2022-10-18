const sequelize = require("sequelize");

const db = new sequelize("truck-n-parcel", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
