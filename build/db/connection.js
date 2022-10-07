"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _env = require("../config/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// DB Connection Values
const {
  dbName,
  dbUser,
  dbPass,
  dbHost
} = _env.config; // DB Connection (MySQL)

const sequelize = new _sequelize.default(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});
module.exports = sequelize;