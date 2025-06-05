const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production'; // ← 本番環境かどうか判定

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@pages': path.resolve(__dirname, '../src/pages/'),
            '@components': path.resolve(__dirname, '../src/components/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',   // CSS を JS に変換
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-pxtorem')({
                                        rootValue: 37.5,
                                        propList: ['*'],  // すべてのプロパティのpxを変換
                                        unitPrecision: 5,
                                        minPixelValue: 2,
                                        exclude: /node_modules/,
                                    }),
                                ],
                            },
                        },
                    },
                    'sass-loader',  // Sass/SCSS を CSS に変換
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                common: {
                    test: /[\\/]src[\\/]components[\\/]/,
                    name: 'common',
                    minChunks: 2,
                    priority: -10,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
            },
        },
    },
};