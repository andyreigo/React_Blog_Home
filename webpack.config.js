const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.resolve('./dist'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.html','.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"./index.html"
    })
  ],
}


module.exports = config;