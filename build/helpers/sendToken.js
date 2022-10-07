"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTokenUser = exports.recoveryToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _jwt = _interopRequireDefault(require("../config/jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// JWT Values
const sendTokenUser = user => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  };
  return _jsonwebtoken.default.sign(payload, _jwt.default.secret, _jwt.default.expirationUser);
};

exports.sendTokenUser = sendTokenUser;

const recoveryToken = email => {
  const payload = {
    email,
    isRecovery: true
  };
  return _jsonwebtoken.default.sign(payload, _jwt.default.secret, _jwt.default.expirationRecoverPass);
};

exports.recoveryToken = recoveryToken;