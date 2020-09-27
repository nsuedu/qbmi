(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [36],
  {
    '2iTE': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        r = t('cDcd'),
        l = t.n(r),
        o = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        s = t.n(o);
      const c = l.a.memo(function() {
        var e = t('K+nK'),
          n = e(t('cDcd')),
          a = e(t('mfQf')),
          r = function() {
            return n.default.createElement(a.default, null);
          };
        return n['default'].createElement(r);
      });
      n['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h1',
              { id: 'uploadimport-\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6\u6570\u636e' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#uploadimport-\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6\u6570\u636e',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'uploadImport \u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6\u6570\u636e',
            ),
            l.a.createElement(
              'p',
              null,
              '\u5bf9 .xlsx \u3001xls \u8868\u683c\u6570\u636e\u8fdb\u884c\u4e0a\u4f20\u5bfc\u5165',
            ),
            l.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f55\u65f6\u4f7f\u7528' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            l.a.createElement(
              'p',
              null,
              '\u4e0a\u4f20\u5e26\u6a21\u7248\u5185\u5bb9\u7684\u8868\u683c\u6587\u4ef6',
            ),
            l.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4ee3\u7801\u6f14\u793a' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
          ),
          l.a.createElement(
            s.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { UploadImport } from 'qbmi';\n\nimport { purchasingPrefix } from '../constants';\nimport { executeImportPurOrder, batchImportPurOrderByFile } from '../services';\nimport templates from '../constants/exportTemplates';\n\nconst Index = () => {\n  return (\n    <UploadImport\n      uploadParams={{\n        confirmTitle: '\u91c7\u8d2d\u8ba2\u5355\u5bfc\u5165\u786e\u8ba4',\n        uploadUrl: batchImportPurOrderByFile,\n        confirmService: executeImportPurOrder,\n        exportErrorUrl: `${purchasingPrefix}/order/export-errorrows`,\n        callback: () => {\n          console?.log('upload Import');\n        },\n      }}\n      downloadParams={{\n        downloadUrl: templates.purchaseOrder,\n        name: '\u91c7\u8d2d\u8ba2\u5355\u6a21\u677f',\n      }}\n    />\n  );\n};\n\nexport default Index;\n",
                },
              },
              {
                path: '/_demos/upload-import',
                CSSInDependencies: ['antd/dist/antd.css'],
                dependencies: {
                  qbmi: '0.0.20',
                  antd: '4.6.6',
                  'umi-request': '1.3.5',
                  lodash: '4.17.20',
                  umi: '3.2.22',
                },
                files: {
                  'constants/index.js': {
                    path: '../constants',
                    content:
                      "// \u540e\u7aef\u5fae\u670d\u52a1\u524d\u7f00\n\n// \u7cfb\u7edf\nconst systemPrefix = '/api/v1/system';\n// \u767b\u5f55\nconst apiPrefix = '/api/v1/web';\n// \u7269\u6d41\nconst consignmentPrefix = '/api/v1/consignment';\n// \u4e0a\u4f20\nconst uploadPrefix = '/api/v1/web/upload';\n// \u8bbe\u5907\nconst devicePrefix = '/api/v1/device';\n// \u9500\u552e\nconst salesPrefix = '/api/v1/sales';\n// \u91c7\u8d2d\nconst purchasingPrefix = '/api/v1/purchasing';\n// \u4ed3\u5e93\nconst warehousePrefix = '/api/v1/warehouse';\n// \u8d26\u6237\nconst accountPrefix = '/api/v1/account';\n// \u751f\u4ea7\nconst proPrefix = '/api/v1/manufacturing';\n// \u62a5\u8868\nconst reportfix = '/api/v1/reporting';\n// \u6d88\u606f\nconst messagingfix = '/api/v1/messaging';\n\nexport {\n  systemPrefix,\n  apiPrefix,\n  consignmentPrefix,\n  uploadPrefix,\n  devicePrefix,\n  salesPrefix,\n  purchasingPrefix,\n  warehousePrefix,\n  accountPrefix,\n  proPrefix,\n  reportfix,\n  messagingfix,\n};\n",
                  },
                  'services/index.js': {
                    path: '../services',
                    content:
                      "import request from '../src/utils/request';\nimport { purchasingPrefix } from '../constants';\n\n/**\n * block start\n */\nexport async function executeImportPurOrder(params) {\n  return request.post(`${purchasingPrefix}/order/import`, {\n    data: params,\n  });\n}\n\nexport const batchImportPurOrderByFile = `${purchasingPrefix}/order/upload`;\n/**\n * block end\n */\n",
                  },
                  'src/utils/request/index.ts': {
                    path: '../src/utils/request',
                    content:
                      "/**\n * request \u7f51\u7edc\u8bf7\u6c42\u5de5\u5177\n * \u66f4\u8be6\u7ec6\u7684 api \u6587\u6863\b: https://github.com/umijs/umi-request\n */\n\nimport { extend } from 'umi-request';\nimport { notification } from 'antd';\nimport { isObject } from 'lodash';\nimport { history } from 'umi';\nimport { apiPrefix } from '../../../constants';\n\n// 401\u62a5\u9519\u91cd\u590d\u5904\u7406\nlet authFalse = false;\n\nconst codeMessage = {\n  200: '\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002',\n  201: '\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002',\n  202: '\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002',\n  204: '\u5220\u9664\u6570\u636e\u6210\u529f\u3002',\n  400: '\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002',\n  401: '\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002',\n  403: '\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002',\n  404: '\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002',\n  406: '\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002',\n  410: '\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002',\n  422: '\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002',\n  500: '\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002',\n  502: '\u7f51\u5173\u9519\u8bef\u3002',\n  503: '\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002',\n  504: '\u7f51\u5173\u8d85\u65f6\u3002',\n};\n/**\n * \u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\n */\n\nconst errorNotice = (message, description) => {\n  if (!authFalse) {\n    authFalse = true;\n    notification.error({\n      message,\n      description,\n      onClose: () => {\n        authFalse = false;\n      },\n    });\n  }\n};\n\nconst errorHandler = error => {\n  const { response } = error;\n  if (response && response.status) {\n    const errorText = codeMessage[response.status] || response.statusText;\n    const { status, url } = response;\n    // 401\u5904\u7406\n    if (status === 401) {\n      // \u5237\u65b0\u5931\u8d25\u8df3\u8f6c\u767b\u5f55\n      localStorage.clear();\n      history.push('/');\n    }\n    errorNotice(`\u8bf7\u6c42\u9519\u8bef ${status}: ${url}`, errorText);\n  } else if (!response) {\n    errorNotice('\u7f51\u7edc\u5f02\u5e38', '\u60a8\u7684\u7f51\u7edc\u53d1\u751f\u5f02\u5e38\uff0c\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668');\n  }\n  return response;\n};\n/**\n * \u914d\u7f6erequest\u8bf7\u6c42\u65f6\u7684\u9ed8\u8ba4\u53c2\u6570\n * ~\u9759\u6001\u914d\u7f6e\n */\nconst request = extend({\n  errorHandler,\n  // \u9ed8\u8ba4\u9519\u8bef\u5904\u7406\n  // credentials: 'include', // \u9ed8\u8ba4\u8bf7\u6c42\u662f\u5426\u5e26\u4e0acookie\n  // \u6d4f\u89c8\u5668\u4e0d\u5728\u8bf7\u6c42\u4e2d\u5305\u542b\u51ed\u636e\n  credentials: 'omit',\n  headers: {\n    'Content-Type': 'application/json; charSet=utf-8',\n    mode: 'cors',\n  },\n});\n\n/**\n * request\u62e6\u622a\u5668, \u6539\u53d8url \u6216 options.\n * ~\u52a8\u6001\u914d\u7f6e\n */\nrequest.interceptors.request.use((url, options = {}) => {\n  const newUrl = url;\n  let newOptions = { ...options };\n  const tokenInfo =\n    localStorage.tokenInfo && localStorage.tokenInfo !== 'null'\n      ? JSON.parse(localStorage.tokenInfo)\n      : {};\n  // \u975e\u767b\u5f55\u63a5\u53e3\u6dfb\u52a0token\n  if (!url.includes('/account/login')) {\n    newOptions.headers.Authorization = `Bearer ${tokenInfo.accessToken}`;\n  }\n\n  // \u5237\u65b0token\u53bb\u6389Authorization\n  if (url.includes('/account/refresh')) {\n    newOptions.headers.Authorization = null;\n  }\n\n  // \u5f00\u53d1\u73af\u5883\u6dfb\u52a0\u79df\u6237\u4fe1\u606f\n  // const addr = window.location.origin;\n\n  // if (addr.includes('localhost:')) {\n  //   newOptions.headers.Tenant = '05e8c098-81e6-4ffa-9d37-6918818b699d';\n  // }\n\n  if (options.method === 'post') {\n    if (isObject(options.body)) {\n      newOptions = { ...newOptions, body: JSON.stringify(options.body) };\n    }\n  }\n  return {\n    url: newUrl,\n    options: newOptions,\n  };\n});\n\n// \u514b\u9686\u54cd\u5e94\u5bf9\u8c61\u505a\u89e3\u6790\u5904\u7406\nrequest.interceptors.response.use(async responseSelf => {\n  const resObj = responseSelf.clone();\n  let data;\n  if (resObj.status === 200) {\n    data = await resObj.json();\n  } else {\n    data = null;\n  }\n  // \u5904\u7406token\u5931\u6548\n  const { tokenExpires } = localStorage;\n  const currentTime = new Date().getTime();\n  // token\u5931\u6548\u524d4\u5c0f\u65f6\u5237\u65b0\n  if (tokenExpires > 0 && tokenExpires - currentTime < 14400000) {\n    const tokenInfo =\n      localStorage.tokenInfo && localStorage.tokenInfo !== 'null'\n        ? JSON.parse(localStorage.tokenInfo)\n        : {};\n    request(`${apiPrefix}/account/refresh`, {\n      method: 'POST',\n      data: {\n        refreshToken: tokenInfo.refreshToken,\n      },\n    }).then(resp => {\n      if (resp && resp.data && resp.data.tokenInfo) {\n        localStorage.tokenInfo = JSON.stringify(resp.data.tokenInfo);\n        localStorage.tokenExpires = new Date().getTime() + resp.data.tokenInfo.expires * 1000;\n      } else {\n        localStorage.tokenInfo = null;\n        localStorage.tokenExpires = 0;\n        history.push('/');\n      }\n    });\n  }\n  // \u5904\u7406\u8fd4\u56de\u6570\u636e\n  if (data) {\n    if (data.success) {\n      return responseSelf;\n    }\n    if (!authFalse) {\n      notification.error({\n        message: '\u63d0\u793a',\n        duration: 2.5,\n        description: data.msg,\n        onClose: () => {\n          authFalse = false;\n        },\n      });\n    }\n    // \u5f3a\u5236\u4e0b\u7ebf\u548c\u5176\u4ed6\u5730\u65b9\u767b\u5f55\n    if (data.code === 10005 || data.code === 10006) {\n      authFalse = true;\n      localStorage.tokenInfo = null;\n      localStorage.tokenExpires = 0;\n      history.push('/');\n    }\n  }\n  return responseSelf;\n});\n\nexport default request;\n",
                  },
                  'constants/exportTemplates.js': {
                    path: '../constants/exportTemplates',
                    content:
                      "/*\n\u6279\u91cf\u5bfc\u51fa\u6a21\u677f\n*/\nexport default {\n  // productPlan: 'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/\u751f\u4ea7\u8ba1\u5212.xlsx', // \u751f\u4ea7\u8ba1\u5212\n  productPlan:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/cable/%E7%94%9F%E4%BA%A7%E8%AE%A1%E5%88%92.xlsx', // \u751f\u4ea7\u8ba1\u5212\n\n  saleOrder: 'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/\u9500\u552e\u8ba2\u5355.xlsx', // \u9500\u552e\u8ba2\u5355\n  saleOrderMaterial:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/cable/\u9500\u552e\u8ba2\u5355\u7269\u6599.xlsx', // \u9500\u552e\u8ba2\u5355\u7269\u6599\n\n  purchaseOrder:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/\u91c7\u8d2d\u8ba2\u5355.xlsx', // \u91c7\u8d2d\u8ba2\u5355\n  materialInventory:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/\u7269\u6599\u5e93\u5b58.xlsx', // \u7269\u6599\u5e93\u5b58\n  materialBase:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/cable/\u7269\u6599\u57fa\u7840.xlsx', // \u7269\u6599\u57fa\u7840\n  purchasePlan:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/\u91c7\u8d2d\u9700\u6c42\u6e05\u5355.xlsx', // \u91c7\u8d2d\u9700\u6c42\u6e05\u5355\n  materialBom:\n    'https://kb-common.s3.cn-northwest-1.amazonaws.com.cn/excel-template/1.1/\u6295\u4ea7\u7269\u6599\u5bfc\u5165\u6a21\u677f.xlsx', // \u7269\u6599\u6e05\u5355\u6295\u5165\u7269\u6599\n};\n",
                  },
                },
              },
            ),
            l.a.createElement(c, null),
          ),
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'api' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'api',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u53c2\u6570'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'uploadParams'),
                  l.a.createElement('td', null, '\u4e0a\u4f20\u53c2\u6570'),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '---'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'downloadParams'),
                  l.a.createElement('td', null, '\u4e0b\u8f7d\u53c2\u6570'),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '---'),
                ),
              ),
            ),
            l.a.createElement(
              'h5',
              { id: 'uploadparams' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#uploadparams' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'uploadParams',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u53c2\u6570'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'confirmTitle'),
                  l.a.createElement('td', null, '\u786e\u8ba4\u5f39\u7a97\u6807\u9898'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'uploadUrl'),
                  l.a.createElement('td', null, '\u4e0a\u4f20 server'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'uploadOption'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u4e0a\u4f20\u63a5\u53e3\u4f20\u9012\u7684\u53c2\u6570',
                  ),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'exportErrorUrl'),
                  l.a.createElement('td', null, '\u9519\u8bef\u5bfc\u51fa\u63a5\u53e3\u5730\u5740'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'confirmService'),
                  l.a.createElement('td', null, '\u786e\u8ba4\u5bfc\u5165 server'),
                  l.a.createElement('td', null, 'function'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'callback'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5bfc\u5165\u56de\u8c03\u9ed8\u8ba4\u4f20\u9012\u540e\u7aef\u8fd4\u56de\u7ed3\u679c',
                  ),
                  l.a.createElement('td', null, 'function(response)'),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
            l.a.createElement(
              'h5',
              { id: 'downloadparams' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#downloadparams' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'downloadParams',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u53c2\u6570'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'downloadUrl'),
                  l.a.createElement('td', null, '\u4e0b\u8f7d\u5730\u5740'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'name'),
                  l.a.createElement('td', null, '\u4e0b\u8f7d\u6a21\u677f\u540d\u79f0'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
