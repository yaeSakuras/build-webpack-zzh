const merge = require('webpack-merge');
const cssnano = require('cssnano');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery',
          entry: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js',
          global: 'jQuery',
        },
      ],
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
