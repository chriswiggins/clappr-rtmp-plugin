const CopyPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: resolve(__dirname, 'src/main.js'),

  externals: [
    { clappr: 'Clappr' }
  ],

  mode: isDev ? 'development' : 'production',

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sassOptions: {
                includePaths: [
                  resolve('node_modules/compass-mixins/lib'),
                  resolve('node_modules/clappr/src/base/scss'),
                  resolve('src/base/scss')
                ]
              },
              sourceMap: isDev
            }
          }
        ]
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minify: false,
              xhtml: true
            }
          }
        ]
      },

      {
        test: /\.(png|woff|eot|ttf|swf)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }

    ]
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: isDev ? 'rtmp.js' : 'rtmp.min.js',
    library: 'RTMP',
    libraryTarget: 'umd',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: resolve(__dirname, 'public'),
          from: '**/*',
          // globOptions: {
          //   ignore: [ '*.scss', '*.ts' ]
          // },
          to: 'assets'
        }
      ]
    })
  ],

  resolve: {
    extensions: ['.js'],
  },

  target: 'web',

};
