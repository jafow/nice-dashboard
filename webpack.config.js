const path = require('path');
const webpack = require('webpack');

// const devFlagPlugin = new webpack.DefinePlugin({
//   __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
// });

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'client/'),
    filename: 'bundle.js',
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin(),
  //   devFlagPlugin,
  // ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
};
