(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [31],
  {
    ovKD: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('0Owb'),
        l = t('cDcd'),
        r = t.n(l),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        o = t.n(c);
      const i = r.a.memo(function() {
        var e = t('K+nK'),
          a = e(t('cDcd')),
          n = e(t('bZOO')),
          l = function() {
            return a.default.createElement(n.default, null);
          };
        return a['default'].createElement(l);
      });
      a['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'tableoperation' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#tableoperation' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'TableOperation',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\n\nimport { TableOperation } from 'qbmi';\n\nconst data = [\n  <a onClick={() => {}}> \u7f16\u8f91 </a>,\n  <a onClick={() => {}}> \u590d\u5236 </a>,\n  <a onClick={() => {}}> \u542f\u7528 </a>,\n];\n\nconst Demo = () => <TableOperation operations={data} />;\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/table-operation', dependencies: { qbmi: '0.0.20' }, files: {} },
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
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'props'),
                  r.a.createElement('td', null, '\u663e\u793a\u5185\u5bb9'),
                  r.a.createElement('td', null, 'array'),
                  r.a.createElement('td', null, '-'),
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
