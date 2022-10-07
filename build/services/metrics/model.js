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
class Metric extends _sequelize.Model {}

Metric.init({
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  blogNumVisits: {
    type: _sequelize.DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize: _connection.default,
  modelName: 'metric'
});
var _default = Metric;
exports.default = _default;