const path = require('path');

const env = process.env.NODE_ENV || 'development';

const configMap = {
  development: './webpack/webpack.dev.js',
  production: './webpack/webpack.prod.js',
  staging: './webpack/webpack.stg.js',
};

const configPath = configMap[env] || configMap['development'];

module.exports = require(path.resolve(__dirname, configPath));