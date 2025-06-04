const env = process.env.WEBPACK_ENV || 'dev';

module.exports = require(`./webpack/webpack.${env}.js`);