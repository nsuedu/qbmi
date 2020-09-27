export default {
  esm: 'babel',
  cjs: 'babel',
  extractCSS: true,
  disableTypeCheck: true,
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
};
