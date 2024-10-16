module.exports = function override(config, env) {
  const newRule = {
    test: /\.txt$/i,
    loader: 'raw-loader',
    options: {
      esModule: false,
    },
  }
  config.module.rules.find((r) => r.oneOf).oneOf.unshift(newRule)
  return config
}

let fs;
if (typeof window === 'undefined') {
fs = require('fs');
}