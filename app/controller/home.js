const egg = require('egg');
const path = require('path');

module.exports = class HomeController extends (
  egg.Controller
) {
  async server(ctx) {
    // index.js 对应 app/web/page/home/index.jsx webpack 构建后 JSBundle 文件
    await ctx.render('index.js', {
      message: 'egg react server side render',
    });
  }

  async client(ctx) {
    ctx.logger.info(`AppController, ctx.url is ${ctx.request.url}`);

    // renderClient 前端渲染，Node层只做 layout.html 和资源依赖组装，渲染交给前端渲染。
    // 与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
    await ctx.renderClient('index.js', {
      message: 'egg react client render',
    });
  }
};
