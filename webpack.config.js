const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 実行モード 設定が無いと4以降は警告が出る
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
  // 開発環境でのデバッグ用, minifyではなくオリジナルに近いコードがマッピングされる
  // https://webpack.js.org/configuration/devtool/
  devtool:'eval-source-map',
  module: {
    rules: [
      {
        // file-loaderでフォントファイルを処理する
        test: /\.(woff|woff2|eot|ttf|otf)/,
        use: [
          'file-loader'
        ]
      },
      {
        // css-loader, style-loaderの有効化
        test: /\.css$/,
        // ローダーは指定された逆順で処理される
        // 2.プラグインを適用する
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // url-loaderで画像ファイルのバンドル
        test: /\.(gif|png|jpg|jpeg|svg|ttf|wof)/,
        loader: 'url-loader',
        options: {
          // file-loaderで画像サイズを制限する
          // しきい値を超えたら画像ファイルはファイル出力
          limit: 5120,
          name: './images/[name].[ext]'
        }
      },
      {
        // csv-loaderでcsvファイルを処理する
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  },
  
  plugins: [
    // スタイルシートを別ファイルとしてlink要素で埋め込む為
    // 1. 使用するプラグインの登録
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  
  output: {
    // 出力先フォルダ
    path: `${__dirname}/dist`,
    // 出力先ファイル名
    filename: "main.js",
    // publicPathパラメータ: CDNからassets配信時など、url関数を書き換えたい場合とか
    // build時にurl関数の値をリライトする
    // publicPath: "http://cdn.example.com/"
  },
  devServer: {
    contentBase: './dist'
  },
}
