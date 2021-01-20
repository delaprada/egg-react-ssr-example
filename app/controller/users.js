const controller = require('egg').Controller;

const toInt = function (str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class UserController extends controller {
  /**
   * 接口描述
   * 用户登录
   * 请求方式：post
   * 参数：{
   * username：string
   * age: int
   * }
   */
  // 展示所有用户
  async index() {
    const { ctx } = this;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.User.findAll(query);
  }

  // 展示用户
  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  // 创建用户
  async create() {
    console.log('创建用户');
    const { ctx } = this;
    const { username, age } = ctx.request.body;
    const user = await ctx.model.User.create({ username, age });
    ctx.status = 201;
    ctx.body = user;
  }

  // 更新用户
  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    const { age } = ctx.request.body;
    await user.update({ age });
    ctx.body = user;
  }

  // 删除用户
  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
