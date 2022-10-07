"use strict";

var _model = _interopRequireDefault(require("../services/posts/model"));

var _model2 = _interopRequireDefault(require("../services/users/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Main Models
// ----------------------- DB Relationships ---------------------------
// ---------------- hasMany (1:M) & belongsTo (1:1) -------------------
// User-Post / Post-User
_model2.default.hasMany(_model.default, {
  as: 'posts',
  foreignKey: 'userId'
});

_model.default.belongsTo(_model2.default, {
  as: 'user',
  foreignKey: 'userId'
}); // --------------------- belongsToMany (N:M) -------------------------