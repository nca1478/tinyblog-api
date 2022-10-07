"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _response = require("../../helpers/response");

var _pagination = require("../../helpers/pagination");

var _service = _interopRequireDefault(require("./service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers
// Service Class
class PostController extends _service.default {
  constructor(dependenciesData) {
    super(dependenciesData);
    this.error = new Error();
  }

  async create(req, res) {
    try {
      const data = {
        userId: req.user.id,
        title: req.body.title,
        summary: req.body.summary,
        body: req.body.body
      };
      const result = await this.createPost(data);
      const response = (0, _response.responsePOST)({
        msg: 'Post creado exitosamente.',
        post: result
      });
      return res.status(201).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async search(req, res) {
    try {
      const search = req.query.q;
      const result = await this.searchPosts(search);
      const response = (0, _response.responseGET)(null, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async findAllbyPub(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 8;

    try {
      const status = req.query.status === 'true' ? true : false;
      const paginationData = (0, _pagination.paginate)(page, limit);
      const result = await this.findPostsPublished(status, paginationData);
      const response = (0, _response.responseGET)(paginationData.pagination, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async lastPosts(req, res) {
    try {
      const limit = parseInt(req.query.limit);
      const result = await this.getLastPosts(limit);
      const response = (0, _response.responseGET)(null, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async findAll(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 4;

    try {
      const userId = req.user.id;
      const paginationData = (0, _pagination.paginate)(page, limit);
      const result = await this.findPosts(userId, paginationData);
      const response = (0, _response.responseGET)(paginationData.pagination, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async findById(req, res) {
    try {
      const postId = req.params.id;
      const result = await this.findPostById(postId);
      const response = (0, _response.responseGET)(null, result);
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = {
        title: req.body.title,
        summary: req.body.summary,
        body: req.body.body
      };
      const result = await this.updatePost(id, data);

      if (!result) {
        const error = (0, _response.responseError)({
          msg: 'Error actualizando post. Intente nuevamente.'
        });
        return res.status(401).json(error);
      } else {
        const response = (0, _response.responsePOST)({
          msg: 'Post actualizado exitosamente.'
        });
        return res.status(200).json(response);
      }
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async updateVisits(req, res) {
    try {
      const result = await this.updatePostVisits(req.params.id);

      if (!result) {
        const error = (0, _response.responseError)({
          msg: 'Error actualizando número de visitas.'
        });
        return res.status(401).json(error);
      } else {
        const response = (0, _response.responsePOST)({
          result,
          msg: 'Número de visitas actualizado exitosamente.'
        });
        return res.status(200).json(response);
      }
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async publish(req, res) {
    try {
      const id = req.params.id;
      const status = req.query.status === 'true' ? true : false;
      const result = await this.publishPost(id, status);

      if (!result) {
        const error = (0, _response.responseError)({
          msg: 'Error publicando post. Intente nuevamente.'
        });
        return res.status(401).json(error);
      } else {
        const response = (0, _response.responsePOST)({
          msg: `${status ? 'Publicación' : 'Despublicación'} Exitosa.`
        });
        return res.status(200).json(response);
      }
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await this.deletePost(id);
      const response = (0, _response.responsePOST)({
        msg: 'Post borrado exitosamente.'
      });
      return res.status(200).json(response);
    } catch (err) {
      const error = (0, _response.responseError)([err]);
      res.status(500).json(error);
    }
  }

}

var _default = PostController;
exports.default = _default;