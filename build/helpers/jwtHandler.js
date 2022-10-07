"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _jwt = _interopRequireDefault(require("../config/jwt"));

var _response = require("./response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Token Values
// Response Setting
let verifyToken = (req, res, next) => {
  if (req.headers['authorization']) {
    let token = req.headers['authorization'].split('jwt ')[1];

    _jsonwebtoken.default.verify(token, _jwt.default.secret, (err, decoded) => {
      if (err) {
        const error = {
          msg: err
        };
        res.status(403).json((0, _response.responseError)([error]));
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    const errorInvalid = {
      msg: 'El token no está presente. Intente nuevamente.'
    };
    res.status(401).json((0, _response.responseError)([errorInvalid]));
  }
};

exports.verifyToken = verifyToken;