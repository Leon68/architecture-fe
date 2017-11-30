const path= require('path')
const entry= require('./entry')

module.exports = {
  context: path.resolve(procwss.cwd(),""),
  entry: entry,
  output: {
    path: path.resolve(process.cwd(),"dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
        loader: 'css-loader',
      },
      {
        test:/\.scss$/,
        loader: 'sass-loader',
      },
      {
        test:/\.less$/,
        loader: 'less-loader',
      },
      {
        test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=[name]_[sha]'
      }
    ]
  }
}
