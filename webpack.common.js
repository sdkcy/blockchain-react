/**
 * blockchain
 * webpack.common.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                loader: "react-hot-loader/webpack"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html"
        })
    ],
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        },
        extensions: [".js", ".jsx", ".json", ".css"]
    }
};
