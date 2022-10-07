"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _showValErrors = require("../../middlewares/showValErrors");

var _validateData = require("./validateData");

// Helpers
// Validate Data
class UserRouter {
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
    } // Create New User


    this.router.post('/', [(0, _validateData.createUserValidation)(), _showValErrors.showValErrors], this.controller.create.bind(this.controller)); // Login User

    this.router.post('/login', [(0, _validateData.loginUserValidation)(), _showValErrors.showValErrors], this.controller.login.bind(this.controller));
  }

  setRoutes() {
    return this.router;
  }

}

var _default = UserRouter;
exports.default = _default;