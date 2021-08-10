module.exports = {
  // 実行モード 設定が無いと4以降は警告が出る
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
  // 開発環境でのデバッグ用, minifyではなくオリジナルに近いコードがマッピングされる
  // https://webpack.js.org/configuration/devtool/
  devtool:'eval-source-map',
  output: {
    // 出力先フォルダ
    path: `${__dirname}/dist`,
    // 出力先ファイル名
    filename: "main.js"
  },
  devServer: {
    contentBase: './dist'
  },
}
