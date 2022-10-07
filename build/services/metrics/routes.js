"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _showValErrors = require("../../middlewares/showValErrors");

var _jwtHandler = require("../../helpers/jwtHandler");

// Helpers
class MetricRouter {
  constructor(router, controller) {
    this.error = new Error();

    if (!router) {
      this.error.dependencyError = 'Express Router is undefined';
      throw this.error.dependencyError;
    } else {
      this.router = router;
    }

    if (!controller) {
      this.error.dependencyError = 'Controller is undefined';
      throw this.error.dependencyError;
    } else {
      this.controller = controller;
    } // Get Blog Num Visits


    this.router.get('/', this.controller.getVisits.bind(this.controller)); // Update Blog Num Visits

    this.router.put('/', this.controller.updateVisits.bind(this.controller));
  }

  setRoutes() {
    return this.router;
  }

}

var _default = MetricRouter;
exports.default = _default;