"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _connection = _interopRequireDefault(require("../../db/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// DB Connection
class Post extends _sequelize.Model {}

Post.init({
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  summary: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  body: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  published: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: false
  },
  numVisits: {
    type: _sequelize.DataTypes.INTEGER,
    defaultValue: 0
  },
  active: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize: _connection.default,
  modelName: 'post'
});
var _default = Post;
exports.default = _default;