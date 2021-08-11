const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
  // 実行モード 設定が無いと4以降は警告が出る
  mode: 'development',
  // エントリーポイント
  entry: './src/index.js',
  // 開発環境でのデバッグ用, minifyではなくオリジナルに近いコードがマッピングされる
  // https://webpack.js.org/configuration/devtool/
  
  // 複数のエントリーポイントを設定したい場合
  // entry: {
  //   main: './src/main.js',
  //   sub: './src/sub.js'
  // },
  
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // jsファイルを処理するためのローダー
        test: /\.m?js$/,
        // ローダー処理の除外対象
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            // ローダー名を設定
            loader: 'babel-loader',
            options: {
              // プリセットの設定
              presets: [
                [
                  // ES2015以降のコードを変換
                  '@babel/preset-env',
                  // ESモジュール構文を別のモジュール構文に変換する設定を無効化
                  // webpack環境では不要の為
                  { 'modules': false }
                ]
              ]
            }
          }
        ],
      },
      {
        // TypeScriptコードを処理するためのローダー
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
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
        // Sassファイルを処理するためのローダー
        test: /\.scss$/,
        // 記述の逆順で処理されるため
        // sassコンパイル -> css-loaderでモジュール化 -> style-loaderでページに組み込み
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // html-loaderの処理
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          // (url-loaderでリソースを処理する)
          options: {
            // 属性値をリソースとして処理すべきかどうかを指定, defaultでtrueなので省略可
            // 規定の主な属性 -> src, srcset, href, data, poster
            sources: true
            
            // 処理対象の属性を制限したい時はオブジェクト配列の形式で定義する
            // 例: 標準でサポートする属性に加えて、<img>要素のdata-src属性をリソースとして処理する場合
            // attributes: {
            //   list: [
            //     '...',
            //     {
            //       tag: 'img',
            //       attribute: 'data-src',
            //       type: 'src'
            //     }
            //   ]
            // }
          }
        }
      },
      {
        // xml-loaderの処理
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        // url-loaderで画像ファイルのバンドル
        test: /\.(gif|png|jpg|jpeg|svg|ttf|wof)/,
        loader: 'url-loader',
        options: {
          // file-loaderで画像サイズを制限する
          // しきい値を超えたら画像ファイルはファイル出力
          limit: 51200,
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
    }),
    
    // ESLintPlugin(eslint-loaderに代わるもの)
    new ESLintPlugin({}),
    
    // トップページの自動生成プラグイン
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: 'src/index.html'
    })
  ],
  
  resolve: {
    // インポート時に認識する拡張子
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  
  output: {
    // 出力先フォルダ
    path: `${ __dirname }/dist`,
    // 出力先ファイル名
    filename: "main.js",
    // publicPathパラメータ: CDNからassets配信時など、url関数を書き換えたい場合とか
    // build時にurl関数の値をリライトする
    // publicPath: "http://cdn.example.com/"
    
    // 複数エントリーポイント設定時
    // filename: '[name]-[chunkhash].js'
  },
  
  // 共通ライブラリを切り出して最適化する場合の設定
  // optimization: {
  //   splitChunks: {
  //     // バンドルされた共通ライブラリに付与する名前
  //     name: 'hogecommonlib',
  //
  //     // 共通ライブラリとして切り出す対象を表す
  //     chunks: 'initial'
  //   }
  // },
  
  devServer: {
    contentBase: './dist'
  },
}
