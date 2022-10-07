"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _showValErrors = require("../../middlewares/showValErrors");

var _jwtHandler = require("../../helpers/jwtHandler");

var _validateData = require("./validateData");

// Helpers
// Validate Data
class PostRouter {
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
    } // Create New Post


    this.router.post('/', [_jwtHandler.verifyToken, (0, _validateData.createPostValidation)(), _showValErrors.showValErrors], this.controller.create.bind(this.controller)); // Search Posts

    this.router.get('/search', this.controller.search.bind(this.controller)); // Get Posts (Published/Unpublish)

    this.router.get('/published', this.controller.findAllbyPub.bind(this.controller)); // Get Last Posts

    this.router.get('/lastposts', this.controller.lastPosts.bind(this.controller)); // Get Posts (Admin Dashboard)

    this.router.get('/', [_jwtHandler.verifyToken, _showValErrors.showValErrors], this.controller.findAll.bind(this.controller)); // Get Post by ID

    this.router.get('/:id', [(0, _validateData.findByIdPostValidation)(), _showValErrors.showValErrors], this.controller.findById.bind(this.controller)); // Update Post

    this.router.put('/:id/update', [_jwtHandler.verifyToken, (0, _validateData.findByIdPostValidation)(), (0, _validateData.createPostValidation)(), _showValErrors.showValErrors], this.controller.update.bind(this.controller)); // Update Num Visits

    this.router.put('/:id/visits', this.controller.updateVisits.bind(this.controller)); // Publish/Unpublish Post

    this.router.put('/:id/publish', [_jwtHandler.verifyToken, (0, _validateData.findByIdPostValidation)(), _showValErrors.showValErrors], this.controller.publish.bind(this.controller)); // Delete Post

    this.router.delete('/:id', [_jwtHandler.verifyToken, (0, _validateData.findByIdPostValidation)(), _showValErrors.showValErrors], this.controller.delete.bind(this.controller));
  }

  setRoutes() {
    return this.router;
  }

}

var _default = PostRouter;
exports.default = _default;