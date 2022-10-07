"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  dbName: process.env.DBNAME,
  dbUser: process.env.DBUSER,
  dbPass: process.env.DBPASS,
  dbHost: process.env.DBHOST
};
exports.config = config;