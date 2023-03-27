const Sequelize = require("sequelize");

const _user = require("./user");
const _comment = require("./comment");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = _user;
db.Comment = _comment;

_user.init(sequelize);
_comment.init(sequelize);

_user.associate(db);
_comment.associate(db);

module.exports = db;
