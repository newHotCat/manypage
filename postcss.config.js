module.exports = {
    // parser: 'sugarss',
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      'cssnano': {}
    }
}

// 先执行 plugins 再执行 parser