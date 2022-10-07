"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userExistsByEmail = exports.postExistsByState = exports.postExistsById = void 0;

var _model = _interopRequireDefault(require("../services/users/model"));

var _model2 = _interopRequireDefault(require("../services/posts/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Models
const userExistsByEmail = async (email = '') => {
  const userExists = await _model.default.findOne({
    where: {
      email
    }
  });

  if (userExists) {
    throw new Error(`El email ${email} ya existe`);
  }
};

exports.userExistsByEmail = userExistsByEmail;

const postExistsById = async id => {
  const postExists = await _model2.default.findOne({
    where: {
      id
    }
  });

  if (!postExists) {
    throw new Error(`El Post con el ID ${id} no existe`);
  }
};

exports.postExistsById = postExistsById;

const postExistsByState = async id => {
  const postExists = await _model2.default.findOne({
    where: {
      id,
      active: true
    }
  });

  if (!postExists) {
    throw new Error(`El Post con el ID ${id} no está activo`);
  }
};

exports.postExistsByState = postExistsByState;