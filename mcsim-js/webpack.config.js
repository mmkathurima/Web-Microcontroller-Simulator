const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.mjs',
        smb: "./src/smb.mjs",
        msim: "./src/msim.mjs"
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: '[name].js',
        chunkFilename: "[name].chunk.js",
        library: {
            type: "module"
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html', chunks: ["index"]}),
        new HtmlWebpackPlugin({
            template: "./src/smb.html", filename: "smb.html", inject: "head",
            chunks: ["smb"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/msim.html", filename: "msim.html", inject: "head",
            chunks: ["msim"]
        })
    ],
};