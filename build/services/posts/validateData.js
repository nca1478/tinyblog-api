"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByIdPostValidation = exports.createPostValidation = void 0;

var _expressValidator = require("express-validator");

var _dbValidators = require("../../helpers/dbValidators");

// Dependencies
// Helpers

/**
 * Validate body request of create user endpoint (POST /posts)
 * @return	{Array}		Rules of validation (express-validator)
 */
const createPostValidation = () => {
  return [(0, _expressValidator.check)('title').exists().withMessage('El título es requerido'), (0, _expressValidator.check)('summary').exists().withMessage('El resumen es requerido'), (0, _expressValidator.check)('body').exists().withMessage('El cuerpo es requerido')];
};
/**
 * Validate body request of get user endpoint (GET /posts/:id)
 * @return	{Array}		Rules of validation (express-validator)
 */


exports.createPostValidation = createPostValidation;

const findByIdPostValidation = () => {
  return [(0, _expressValidator.check)('id', 'No es un UUID correcto').isUUID(), (0, _expressValidator.check)('id').custom(_dbValidators.postExistsById), (0, _expressValidator.check)('id').custom(_dbValidators.postExistsByState)];
};

exports.findByIdPostValidation = findByIdPostValidation;