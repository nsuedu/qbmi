import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'qbmi',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  externals:
    process.env.NODE_ENV === 'development'
      ? {
          react: 'window.React',
          'react-dom': 'window.ReactDOM',
          moment: 'window.moment',
          antd: 'window.antd',
        }
      : {},
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  links:
    process.env.NODE_ENV === 'development'
      ? ['https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css']
      : [],
  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
          'https://gw.alipayobjects.com/os/lib/moment/2.29.0/min/moment-with-locales.js',
          'https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd-with-locales.js',
        ]
      : [],
  hash: true,

  outputPath: 'docs-dist',
  publicPath: '/qbmi/',
  base: '/qbmi',
  exportStatic: {},

  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },

  chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },

  theme: {
    '@success-color': '#4dc29b', // 成功色
    '@error-color': '#ff4d4f', // 错误色
  },
  // more config: https://d.umijs.org/config
  proxy: {
    '/api': {
      // target: 'http://kingbee.cable.qbmi.xyz/',
      target: 'http://kingbee.cable-qa.qbmi.xyz/',
      changeOrigin: true,
    },
  },
});
