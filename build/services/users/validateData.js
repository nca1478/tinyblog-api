"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUserValidation = exports.createUserValidation = void 0;

var _expressValidator = require("express-validator");

var _dbValidators = require("../../helpers/dbValidators");

// Dependencies
// Helpers

/**
 * Validate body request of create user endpoint (POST /users)
 * @return	{Array}		Rules of validation (express-validator)
 */
const createUserValidation = () => {
  return [(0, _expressValidator.check)('name').exists().withMessage('El nombre es requerido'), (0, _expressValidator.check)('email').exists().withMessage('El email es requerido'), (0, _expressValidator.check)('email').isEmail().normalizeEmail().withMessage('Debe ser un email válido'), (0, _expressValidator.check)('email').custom(_dbValidators.userExistsByEmail), (0, _expressValidator.check)('password').exists().withMessage('La contraseña es requerida'), (0, _expressValidator.check)('password').matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!"#$%&()=?¿*-_.:,;+^\\-`.+,/]{8,}$/).withMessage('La contraseña debe contener al menos 8 caracteres y al menos 1 número')];
};
/**
 * Validate body request of login user endpoint (POST /users/login)
 * @return	{Array}		Rules of validation (express-validator)
 */


exports.createUserValidation = createUserValidation;

const loginUserValidation = () => {
  return [(0, _expressValidator.check)('email').exists().withMessage('El email es requerido'), (0, _expressValidator.check)('email').isEmail().normalizeEmail().withMessage('Debe ser un email válido'), (0, _expressValidator.check)('password').exists().withMessage('La contraseña es requerida')];
};

exports.loginUserValidation = loginUserValidation;