"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySearchPosts = exports.queryPostsPublished = exports.queryPostsList = exports.queryPostById = exports.queryLastPosts = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Op = _sequelize.default.Op;

const queryPostsList = (userId, user, paginationData) => {
  const {
    limit,
    skip
  } = paginationData;
  return {
    where: {
      userId,
      active: true
    },
    order: [['createdAt', 'DESC']],
    attributes: {
      exclude: ['userId']
    },
    distinct: true,
    include: [{
      model: user,
      as: 'user',
      attributes: ['id', 'name', 'email', 'role']
    }],
    limit,
    offset: skip
  };
};

exports.queryPostsList = queryPostsList;

const querySearchPosts = (search, user) => {
  return {
    where: {
      title: search ? {
        [Op.like]: '%' + search + '%'
      } : {
        [Op.ne]: null
      },
      published: true,
      active: true
    },
    order: [['createdAt', 'DESC']],
    attributes: {
      exclude: ['userId']
    },
    include: [{
      model: user,
      as: 'user',
      attributes: ['id', 'name', 'email', 'role']
    }]
  };
};

exports.querySearchPosts = querySearchPosts;

const queryPostsPublished = (status, user, paginationData) => {
  const {
    limit,
    skip
  } = paginationData;
  return {
    where: {
      published: status,
      active: true
    },
    order: [['createdAt', 'DESC']],
    attributes: {
      exclude: ['userId']
    },
    distinct: true,
    include: [{
      model: user,
      as: 'user',
      attributes: ['id', 'name', 'email', 'role']
    }],
    limit,
    offset: skip
  };
};

exports.queryPostsPublished = queryPostsPublished;

const queryLastPosts = (limit, user) => {
  return {
    where: {
      published: true,
      active: true
    },
    order: [['createdAt', 'DESC']],
    attributes: {
      exclude: ['userId']
    },
    include: [{
      model: user,
      as: 'user',
      attributes: ['id', 'name', 'email', 'role']
    }],
    limit
  };
};

exports.queryLastPosts = queryLastPosts;

const queryPostById = (postId, user) => {
  return {
    where: {
      id: postId,
      active: true
    },
    attributes: {
      exclude: ['userId']
    },
    include: [{
      model: user,
      as: 'user',
      attributes: ['id', 'name', 'email', 'role']
    }]
  };
};

exports.queryPostById = queryPostById;