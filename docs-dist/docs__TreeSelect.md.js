(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [34],
  {
    HVXH: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        l = t('cDcd'),
        r = t.n(l),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        d = t.n(c);
      const i = r.a.memo(function() {
        var e = t('K+nK'),
          n = e(t('cDcd')),
          a = e(t('hyqQ')),
          l = function() {
            return n.default.createElement(a.default, null);
          };
        return n['default'].createElement(l);
      });
      n['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\n\nimport { TreeSelect } from 'qbmi';\n\nconst getTreeForm = () =>\n  new Promise(resolve => {\n    const data = [\n      {\n        parentId: null,\n        id: '6e132030-eafa-4933-9460-561de0ff4cad',\n        stationName: '\u5e03\u827a',\n        description: null,\n        level: 0,\n        status: 1,\n        disabled: false,\n        children: [\n          {\n            parentId: '6e132030-eafa-4933-9460-561de0ff4cad',\n            id: '2748040f-14f9-4036-8236-4f5d20b51467',\n            stationName: 'A\u533a',\n            description: null,\n            level: 1,\n            status: 1,\n            disabled: false,\n            children: [\n              {\n                parentId: '2748040f-14f9-4036-8236-4f5d20b51467',\n                id: '64375d76-9134-4a78-857a-078c82caf505',\n                stationName: 'A\u533a2\u53f7',\n                description: null,\n                level: 2,\n                status: 1,\n                disabled: false,\n                children: [],\n              },\n              {\n                parentId: '2748040f-14f9-4036-8236-4f5d20b51467',\n                id: '4c7b44b8-3a8a-4c37-b154-d2047967ba60',\n                stationName: 'A\u533a3\u53f7',\n                description: null,\n                level: 2,\n                status: 1,\n                disabled: false,\n                children: [],\n              },\n            ],\n          },\n        ],\n      },\n    ];\n    resolve({ data });\n  });\n\nconst Demo = () => (\n  <TreeSelect\n    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\n    treeDefaultExpandAll\n    dataServer={getTreeForm}\n    transformOptions={{\n      hasAll: false,\n      title: 'stationName',\n      value: 'id',\n      onlyLastleafNoDisabled: true,\n    }}\n    placeholder=\"\u8bf7\u9009\u62e9\u5de5\u4f4d\"\n    style={{ width: 300 }}\n  />\n);\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/tree-select', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u6210\u5458'),
                  r.a.createElement('th', null, '\u89e3\u91ca'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'transformOptions'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f6c\u6362\u6570\u636e\u683c\u5f0f',
                    '{',
                    ' hasAll : Boolean, title : String, value : String, onlyLastleafNoDisabled : Boolean ',
                    '}',
                    ' hasAll \u662f\u5426\u5177\u6709\u5168\u9009\u9009\u9879\uff0ctitle \u4e3a\u5c55\u793a\u6587\u672c\uff08\u7c7b\u4f3c label\uff09\uff0conlyLastleafNoDisabled \u662f\u5426\u53ea\u80fd\u9009\u62e9\u53f6\u5b50\u8282\u70b9.',
                  ),
                  r.a.createElement('td', null, 'Object'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'dataServer'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bf7\u6c42\u4e0b\u62c9\u6570\u636e\u7684\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u662f promise \u5bf9\u8c61\uff0c\u5982 POST\uff0cGET \u8bf7\u6c42.',
                  ),
                  r.a.createElement('td', null, 'Function'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, '\u5176\u4ed6\u5c5e\u6027'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8be5\u7ec4\u4ef6\u652f\u6301 antd \u4e2d TreeSelect \u5c5e\u6027\uff0c\u66f4\u591a\u5c5e\u6027\u8be6\u60c5\u53c2\u8003: ',
                    r.a.createElement(
                      'a',
                      {
                        href: 'https://ant.design/components/tree-select-cn/#API',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'https://ant.design/components/tree-select-cn/#API',
                      r.a.createElement(
                        'svg',
                        {
                          xmlns: 'http://www.w3.org/2000/svg',
                          'aria-hidden': !0,
                          x: '0px',
                          y: '0px',
                          viewBox: '0 0 100 100',
                          width: '15',
                          height: '15',
                          className: '__dumi-default-external-link-icon',
                        },
                        r.a.createElement('path', {
                          fill: 'currentColor',
                          d:
                            'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                        }),
                        r.a.createElement('polygon', {
                          fill: 'currentColor',
                          points:
                            '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                        }),
                      ),
                    ),
                  ),
                  r.a.createElement('td', null),
                  r.a.createElement('td', null),
                ),
              ),
            ),
            r.a.createElement(
              'p',
              null,
              'More skills for writing demo: ',
              r.a.createElement(
                'a',
                {
                  href: 'https://d.umijs.org/guide/demo-principle',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'https://d.umijs.org/guide/demo-principle',
                r.a.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    'aria-hidden': !0,
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 100 100',
                    width: '15',
                    height: '15',
                    className: '__dumi-default-external-link-icon',
                  },
                  r.a.createElement('path', {
                    fill: 'currentColor',
                    d:
                      'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                  }),
                  r.a.createElement('polygon', {
                    fill: 'currentColor',
                    points:
                      '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                  }),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
