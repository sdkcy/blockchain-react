/**
 * blockchain
 * dev-server.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.dev.config");

const options = {
    contentBase: "public",
    hot: true,
    watchOptions: {
        poll: 300,
        ignored: /node_modules/
    },
    historyApiFallback: true
};

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(3000, () => {
    console.log("Server running...");
});
