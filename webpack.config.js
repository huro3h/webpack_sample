module.exports = {
  // 実行モード 設定が無いと4以降は警告が出る
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
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
