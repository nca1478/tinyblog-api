"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
require('dotenv').config({
  path: _path.default.join(__dirname, '../.env')
}); // Start Server


const Server = require('./server');

const server = new Server();
server.listen(); // Start DB Connection

server.startDBConnection();