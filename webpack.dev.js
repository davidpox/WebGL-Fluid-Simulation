const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const merge = require("webpack-merge");
const path = require("path");
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "template.html",
            inject: "body",
            minify: {
            }
        }),
        new WriteFilePlugin(),
    ],
    output: {
        filename: "./bin/[name].js",
        path: path.resolve(__dirname, "dev")
    }
});