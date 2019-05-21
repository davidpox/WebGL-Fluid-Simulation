const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const merge = require("webpack-merge");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    performance: {
        hints: false
    },
    plugins: [
        new CleanWebpackPlugin(["output/"]),
        new HtmlWebpackPlugin({
            template: "template.html",
            inject: "head",
            minify: {}
        }),
        new CopyWebpackPlugin([{from: "**/**.*", context: "dev/", ignore: ["bin/**", "src/**"]}]),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    output: {
        filename: "./bin/[name].min.js",
        path: path.resolve(__dirname, "output"),
    }
});