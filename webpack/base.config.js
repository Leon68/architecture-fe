const path = require('path')
const entry = require('./entry')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    context: path.resolve(process.cwd(), "src"),
    entry: entry,
    watch: true,
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                }),
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader',
            },
            {
                test: /\.less$/,
                loader: 'less-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader",
                options: {
                    name: 'assets/[name]_[sha512:hash:base64:7].[ext]'
                },
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}
