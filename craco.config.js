const path = require('path');
const pathResolve = pathUrl => path.join(__dirname,pathUrl);
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = {
    webpack: {
      alias: {
        '@@': pathResolve('.'),
        '@': pathResolve('src'),
      },
    },
    babel: {
      plugins: [
        ['import', { 
            libraryName: 'antd',
            libraryDirectory:'es', 
            style: 'css' 
        }], // 按需加载
        // ['@babel/plugin-proposal-decorators', { legacy: true }] // 支持装饰器语法
      ]
    },
    plugins:[
      {
        plugin: new AntdDayjsWebpackPlugin(),
      },
    ]
}