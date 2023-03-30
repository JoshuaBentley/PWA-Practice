const path = require("path")
const loader = require("sass-loader")

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader",
                "sass-loader"
                ]
            }
        ]
    }
}