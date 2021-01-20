const service = require('egg').Service;

class UserService extends service {
  // 创建用户
  async create(user) {
    this.ctx.logger.info('create user');
    return this.ctx.model.User.create(user);
  }
}

module.exports = UserService;