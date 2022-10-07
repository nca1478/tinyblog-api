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
class User extends _sequelize.Model {}

User.init({
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: _sequelize.DataTypes.ENUM,
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    defaultValue: 'ADMIN_ROLE'
  },
  active: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize: _connection.default,
  modelName: 'user'
});
var _default = User;
exports.default = _default;