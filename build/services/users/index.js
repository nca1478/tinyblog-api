"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _model = _interopRequireDefault(require("./model"));

var _controller = _interopRequireDefault(require("./controller"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Models
// User Dependencies
const dataDependencies = {
  user: _model.default
}; // Injecting Dependencies

const router = _express.default.Router();

const userController = new _controller.default(dataDependencies);
const userRouter = new _routes.default(router, userController);
const userRoutes = userRouter.setRoutes();
exports.userRoutes = userRoutes;