export default {
  esm: 'babel',
  cjs: 'babel',
  extractCSS: true,
  disableTypeCheck: true,
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  cssModules: {
    generateScopedName: '[name][local]_[hash:base64:5]',
  },
  // cssModules: {
  //   generateScopedName: '[name][local]_[hash:base64:5]'
  // },
};
