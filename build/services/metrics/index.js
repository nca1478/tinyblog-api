"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metricRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _model = _interopRequireDefault(require("./model"));

var _controller = _interopRequireDefault(require("./controller"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Models
// Post Dependencies
const dataDependencies = {
  metric: _model.default
}; // Injecting Dependencies

const router = _express.default.Router();

const metricController = new _controller.default(dataDependencies);
const metricRouter = new _routes.default(router, metricController);
const metricRoutes = metricRouter.setRoutes();
exports.metricRoutes = metricRoutes;