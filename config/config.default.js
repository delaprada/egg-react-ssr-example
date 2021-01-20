const path = require('path');

module.exports = (app) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1610862343048_2407';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public'),
  };

  config.reactssr = {
    layout: path.join(app.baseDir, 'app/view/layout.html'),
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'eggtest',
    username: 'root',
    password: '1999125ZZR',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
