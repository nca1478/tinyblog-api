"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
class UserService {
  constructor(dependenciesData) {
    this.error = new Error();

    if (!dependenciesData.user) {
      this.error.dependencyError = 'User Model is undefined';
      throw this.error.dependencyError;
    } else {
      this.user = dependenciesData.user;
    }
  }

  async createUser(dataUser) {
    try {
      const result = await this.user.create(dataUser);
      return result;
    } catch (err) {
      throw err;
    }
  }

  setUserInfo = user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    };
  };

  async loginUser(dataLogin) {
    const {
      email,
      password
    } = dataLogin;

    try {
      const user = await this.user.findOne({
        where: {
          email,
          active: true
        }
      });

      if (user) {
        let compare = _bcryptjs.default.compareSync(password, user.password);

        const userInfo = this.setUserInfo(user);

        if (compare) {
          return userInfo;
        } else {
          return compare;
        }
      } else {
        return user;
      }
    } catch (err) {
      throw err;
    }
  }

}

var _default = UserService;
exports.default = _default;