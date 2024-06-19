const Sequelize = require("sequelize");
const Animal = require("./animal");
const User = require("./user");
const Post = require("./post");
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
db.User = User;
db.Post = Post;

db.sequelize = sequelize;

Animal.initiate(sequelize);
User.initiate(sequelize);
Post.initiate(sequelize);

User.associate(db);
Post.associate(db);

module.exports = db;
