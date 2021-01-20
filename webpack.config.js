const path = require('path');
const fs = require('fs');
const rootPath = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(rootPath, relativePath);
const projectPath = resolve('app/web');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: 'app/web/page/home/index.jsx',
  },
  resolve: {
    alias: {
      '@': projectPath, // 子项目根目录
      '@component': path.resolve(projectPath, 'component'),
    },
  },
};
