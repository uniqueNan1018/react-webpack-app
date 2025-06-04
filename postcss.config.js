export default {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
        unitPrecision: 5,
        minPixelValue: 2,
        exclude: /node_modules/
      }
    }
  }