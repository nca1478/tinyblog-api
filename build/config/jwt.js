"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  secret: process.env.SESSION_SECRET,
  expirationUser: {
    expiresIn: 60 * 60 * 24 * 1
  },
  // 1 days
  expirationRecoverPass: {
    expiresIn: 60 * 60 * 24 * 1
  } // 1 days

};
exports.default = _default;