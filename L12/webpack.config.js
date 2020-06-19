const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./src/index.js",
    // development 开发模式
    // production 产品模式 加密
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'), // 当前文件夹/dist
        filename: 'js/main.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: 'url-loader?limit=10240&name=img/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [

        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/template.html"
        }),
        new ExtractTextPlugin("css/styles.css"),
        new VueLoaderPlugin()
    ],

}