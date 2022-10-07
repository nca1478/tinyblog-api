"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _model = _interopRequireDefault(require("./model"));

var _model2 = _interopRequireDefault(require("../users/model"));

var _controller = _interopRequireDefault(require("./controller"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Models
// Post Dependencies
const dataDependencies = {
  post: _model.default,
  user: _model2.default
}; // Injecting Dependencies

const router = _express.default.Router();

const postController = new _controller.default(dataDependencies);
const postRouter = new _routes.default(router, postController);
const postRoutes = postRouter.setRoutes();
exports.postRoutes = postRoutes;