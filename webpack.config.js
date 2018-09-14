const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const plugins = [new TransferWebpackPlugin([
    { from: 'public/', to: 'assets/' }
    ])];
let filename = 'rtmp.js';

const production = process.env.NODE_ENV === 'production';

if (production) {
    filename = 'rtmp.min.js';
}

module.exports = {
    mode: production ? 'production' : 'development',
    entry: path.resolve(__dirname, 'index.js'),
    devtool: production ? "source-map" : "",
    externals: {
        clappr: 'Clappr',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: true,
                }
            },
            {
                test: /\.scss$/,
                loaders: ['css-loader', 'sass-loader?includePaths[]='
                  + path.resolve(__dirname, './node_modules/compass-mixins/lib')
                  + '&includePaths[]='
                  + path.resolve(__dirname, './node_modules/clappr/src/base/scss')
                  + '&includePaths[]='
                  + path.resolve(__dirname, './src/base/scss')
                ],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.html/, loader: 'html-loader?minimize=false'
            },
            {
                test: /\.(png|woff|eot|ttf|swf)/, loader: 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename,
        library: 'RTMP',
        libraryTarget: 'umd',
    },
};
