const Sequelize = require("sequelize");
const Animal = require("./animal");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // 연결객체

db.Animal = Animal;

db.sequelize = sequelize;

Animal.initiate(sequelize);

module.exports = db;
