(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [28],
  {
    gsWr: function(e, n, a) {
      'use strict';
      a.r(n);
      var t = a('0Owb'),
        r = a('cDcd'),
        l = a.n(r),
        s = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        c = a.n(s);
      const i = l.a.memo(function() {
        var e = a('K+nK'),
          n = e(a('cDcd')),
          t = e(a('es0w')),
          r = function() {
            return n.default.createElement(t.default, null);
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
            c.a,
            Object(t['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\n\nimport { Select } from 'qbmi';\n\n// \u6a21\u62df\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\n\nconst listServer = props =>\n  new Promise(resolve => {\n    const data = [\n      {\n        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',\n        name: 'string1',\n        disable: false,\n      },\n      {\n        id: '3fa85234-5717-4562-b3fc-2c963f66afa6',\n        name: 'string2',\n        disable: false,\n      },\n      {\n        id: '3fa85f64-34717-4562-b3fc-2c963f66afa6',\n        name: 'string3',\n        disable: false,\n      },\n      {\n        id: '3fa85f64-5717-4662-b3fc-2c963f66afa6',\n        name: 'string4',\n        disable: false,\n      },\n      {\n        id: '3fa85f64-5717-45562-b3fc-2c963f66afa6',\n        name: 'string5',\n        disable: false,\n      },\n    ];\n    resolve({ data });\n  });\n\nconst Demo = props => {\n  return (\n    <Select\n      listServer={listServer}\n      // requestParams={}\n      // hasAllText\n      // customLabel\n      labelValue={{ value: 'id', label: 'name' }}\n      hasNoneText\n    />\n  );\n};\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/select', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            l.a.createElement(i, null),
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
              'API',
            ),
          ),
        );
      };
    },
  },
]);
