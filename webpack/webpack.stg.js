const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map', // デバッグ用ソースマップあり
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname, '../dist/stg'),
        filename: 'bundle.[contenthash].js',
        clean: true,
    }
});