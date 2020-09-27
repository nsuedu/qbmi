import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'qbmi',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',

  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
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
