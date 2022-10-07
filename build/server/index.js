"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _chalk = _interopRequireDefault(require("chalk"));

var _services = require("../services");

var _connection = _interopRequireDefault(require("../db/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Debugging utility
const debug = require('debug')('tinyBlog:DB'); // Api Routes


require('../db/associations');

class Server {
  constructor() {
    this.app = (0, _express.default)();
    this.port = process.env.PORT; // Settings

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use((0, _cors.default)());
    this.app.use((0, _morgan.default)(':method :url :status :response-time ms - :res[content-length] [:date[clf]] :remote-addr')); // Bodyparser

    this.app.use(_express.default.json());
    this.app.use(_express.default.urlencoded({
      extended: false
    })); // Static Files

    this.app.use(_express.default.static('public'));
  }

  listen() {
    const port = process.env.PORT;
    this.app.listen(port, () => {
      console.log(`${_chalk.default.yellow('[tinyBlog-api:REST]')} Escuchando en puerto ${port}`);
    });
  }

  routes() {
    this.app.use('/api/v1/users', _services.userRoutes);
    this.app.use('/api/v1/posts', _services.postRoutes);
    this.app.use('/api/v1/metrics', _services.metricRoutes);
  }

  startDBConnection() {
    _connection.default.sync({
      force: false
    }).then(() => {
      debug('Conexión a base de datos exitosa');
      console.log(`${_chalk.default.yellow('[tinyBlog:DB]')} Conexión a base de datos exitosa`);
    }).catch(error => {
      console.log(error);
      console.log(`${_chalk.default.red('[tinyBlog:DB]')} Error de conexión a la base de datos ${error}`);
    });
  }

}

module.exports = Server;