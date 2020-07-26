const path = require('path');
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "assets"),
  entry: path.resolve(__dirname, "./assets/src/index.js"),
  output: {
    path: path.resolve(__dirname, "assets/dist"),
    filename: "main.bundle.js",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
        ],
      }
    ]
  }
}