"use strict";

var _expressValidator = require("express-validator");

var _response = require("../helpers/response");

// Dependencies
// Helpers
const showValErrors = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json((0, _response.responseError)(errors.array()));
  }

  next();
};

module.exports = {
  showValErrors
};