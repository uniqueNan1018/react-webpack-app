const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        port: 3001,
        open: true,
    },
    output: {
        path: path.resolve(__dirname, '../dist/dev'),
        filename: 'bundle.[contenthash].js',
        clean: true,
    }
});