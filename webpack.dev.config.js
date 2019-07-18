/**
 * blockchain
 * webpack.dev.config.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

const config = require("./webpack.common");
const webpack = require("webpack");

config.mode = "development";

config.entry = [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server"
].concat(config.entry);

config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = config;
