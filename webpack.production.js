const { merge } = require('webpack-merge');
const Terserplugin = require('terser-webpack-plugin');

// production環境時にマージする設定ファイルをインポート
const base = require('./webpack.base');

// webpack.base.jsとwebpack.production.jsのマージ
module.exports = merge(base, {
  mode: 'production',
  
  // ソースマップを設定
  devtool: 'source-map',
  
  // assetsファイルの圧縮に関わる設定
  optimization: {
    minimize: true,
    minimizer: [
      new Terserplugin({
         terserOptions: {
           compress: {
             drop_console: true
           },
         },
      }),
    ],
  },
});
