"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _response = require("../../helpers/response");

var _sendToken = require("../../helpers/sendToken");

var _service = _interopRequireDefault(require("./service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
// Helpers
// Service Class
class UserController extends _service.default {
  constructor(dependenciesData) {
    super(dependenciesData);
    this.error = new Error();
  }

  async create(req, res) {
    try {
      const dataUser = {
        name: req.body.name,
        email: req.body.email,
        password: _bcryptjs.default.hashSync(req.body.password),
        role: req.body.role
      };
      const result = await this.createUser(dataUser);
      const response = (0, _response.responsePOST)({
        msg: 'Usuario creado exitosamente.',
        user: result,
        token: (0, _sendToken.sendTokenUser)(result)
      });
      return res.status(201).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async login(req, res) {
    try {
      const dataLogin = {
        email: req.body.email,
        password: req.body.password
      };
      let result = await this.loginUser(dataLogin);

      if (result) {
        const data = {
          msg: 'Login Exitoso.',
          user: result,
          token: (0, _sendToken.sendTokenUser)(result)
        };
        const response = (0, _response.responsePOST)(data);
        return res.status(200).json(response);
      } else {
        if (result === null) {
          const error = (0, _response.responseError)({
            msg: 'El email no existe o el usuario no está activo'
          });
          return res.status(404).json(error);
        } else {
          const error = (0, _response.responseError)({
            msg: 'La combinación de email y contraseña no existe'
          });
          return res.status(401).json(error);
        }
      }
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

}

var _default = UserController;
exports.default = _default;