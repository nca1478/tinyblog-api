"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _response = require("../../helpers/response");

var _service = _interopRequireDefault(require("./service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers
// Service Class
class MetricController extends _service.default {
  constructor(dependenciesData) {
    super(dependenciesData);
    this.error = new Error();
  }

  async updateVisits(req, res) {
    try {
      const result = await this.updateBlogVisits();

      if (!result) {
        const error = (0, _response.responseError)({
          msg: 'Error actualizando número de visitas del blog.'
        });
        return res.status(401).json(error);
      } else {
        const response = (0, _response.responsePOST)({
          result,
          msg: 'Número de visitas del blog actualizado exitosamente.'
        });
        return res.status(200).json(response);
      }
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async getVisits(req, res) {
    try {
      const result = await this.getBlogVisits();
      const response = (0, _response.responseGET)(null, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

}

var _default = MetricController;
exports.default = _default;