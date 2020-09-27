(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [29, 18],
  {
    '8A/p': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('0Owb'),
        l = a('cDcd'),
        r = a.n(l),
        u = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        s = a.n(u);
      const c = r.a.memo(function() {
        var e = a('K+nK'),
          t = e(a('cDcd')),
          n = e(a('xnNV')),
          l = function() {
            return t.default.createElement(n.default, null);
          };
        return t['default'].createElement(l);
      });
      t['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'statustext' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#statustext' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'StatusText',
            ),
          ),
          r.a.createElement(
            s.a,
            Object(n['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react';\n\nimport { StatusText } from 'qbmi';\n\nconst Demo = () => {\n  const planStatus = [\n    // \u72b6\u6001(1-\u5df2\u7533\u8bf7\uff0c2-\u88ab\u64a4\u56de\uff0c3-\u672a\u5f00\u59cb\uff0c4-\u8fdb\u884c\u4e2d\uff0c5-\u6682\u505c\u4e2d\uff0c 6-\u5df2\u5b8c\u6210\uff0c7-\u5df2\u7ec8\u6b62\uff0c8-\u5df2\u9000\u56de)\n    { value: 1, label: '\u5df2\u7533\u8bf7', status: 'processing' },\n    { value: 2, label: '\u88ab\u64a4\u56de', status: 'warning' },\n    { value: 3, label: '\u5df2\u521b\u5efa', status: 'muted' },\n    { value: 4, label: '\u8fdb\u884c\u4e2d', status: 'processing' },\n    { value: 5, label: '\u6682\u505c\u4e2d', status: 'processing' },\n    { value: 6, label: '\u5df2\u5b8c\u6210', status: 'success' },\n    { value: 7, label: '\u5df2\u7ec8\u6b62', status: 'error' },\n    { value: 8, label: '\u5df2\u9000\u56de', status: 'warning' },\n  ];\n\n  return (\n    planStatus &&\n    planStatus.map(item => <StatusText mode=\"tag\" type={item.status} label={item.label} />)\n  );\n};\n\nexport default Demo;\n",
                  jsx:
                    "import React from 'react';\nimport { StatusText } from 'qbmi';\n\nconst Demo = () => {\n  const planStatus = [\n    // \u72b6\u6001(1-\u5df2\u7533\u8bf7\uff0c2-\u88ab\u64a4\u56de\uff0c3-\u672a\u5f00\u59cb\uff0c4-\u8fdb\u884c\u4e2d\uff0c5-\u6682\u505c\u4e2d\uff0c 6-\u5df2\u5b8c\u6210\uff0c7-\u5df2\u7ec8\u6b62\uff0c8-\u5df2\u9000\u56de)\n    {\n      value: 1,\n      label: '\u5df2\u7533\u8bf7',\n      status: 'processing',\n    },\n    {\n      value: 2,\n      label: '\u88ab\u64a4\u56de',\n      status: 'warning',\n    },\n    {\n      value: 3,\n      label: '\u5df2\u521b\u5efa',\n      status: 'muted',\n    },\n    {\n      value: 4,\n      label: '\u8fdb\u884c\u4e2d',\n      status: 'processing',\n    },\n    {\n      value: 5,\n      label: '\u6682\u505c\u4e2d',\n      status: 'processing',\n    },\n    {\n      value: 6,\n      label: '\u5df2\u5b8c\u6210',\n      status: 'success',\n    },\n    {\n      value: 7,\n      label: '\u5df2\u7ec8\u6b62',\n      status: 'error',\n    },\n    {\n      value: 8,\n      label: '\u5df2\u9000\u56de',\n      status: 'warning',\n    },\n  ];\n  return (\n    planStatus &&\n    planStatus.map((item) => <StatusText mode=\"tag\" type={item.status} label={item.label} />)\n  );\n};\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/status-text', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            r.a.createElement(c, null),
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
                  r.a.createElement('th', null, '\u8bf4\u660e'),
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
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement('td', null, '\u72b6\u6001\u7c7b\u578b'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'label'),
                  r.a.createElement('td', null, '\u72b6\u6001\u6587\u672c'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'mode'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6a21\u5f0f(\u63a5\u53d7 tag \u548c badge\uff0cbadge \u5de6\u4fa7\u5c0f\u70b9,tag \u6807\u7b7e\u6846)',
                  ),
                  r.a.createElement('td', null, 'stirng'),
                  r.a.createElement('td', null, 'badge'),
                ),
              ),
            ),
            r.a.createElement(
              'h2',
              { id: '\u72b6\u6001\u7c7b\u578b\u53ca\u6587\u672c\u5bf9\u5e94\u8bf4\u660e' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u72b6\u6001\u7c7b\u578b\u53ca\u6587\u672c\u5bf9\u5e94\u8bf4\u660e',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u72b6\u6001\u7c7b\u578b\u53ca\u6587\u672c\u5bf9\u5e94\u8bf4\u660e',
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
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u6587\u672c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'success'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5df2\u5b8c\u6210\uff08\u6b63\u5e38\u7ed3\u675f\uff09',
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'error'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5df2\u7ec8\u6b62\uff08\u5f02\u5e38\u7ed3\u675f\uff09',
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'muted'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u672a\u5f00\u59cb\u3001\u5df2\u521b\u5efa\uff08\u672a\u8fdb\u5165\u6d41\u7a0b\uff09',
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'processing'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5df2\u5f00\u59cb\u3001\u6b63\u5e38\u6d41\u7a0b\u4e2d',
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'warning'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u88ab\u9000\u56de\uff0c\u5df2\u64a4\u56de\uff08\u8fdb\u884c\u4e2d\u7684\u5f02\u5e38\u60c5\u51b5\uff09',
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    gDX6: function(e, t, a) {
      'use strict';
      a('Awhp');
      var n = a('KrTs'),
        l = (a('+BJd'), a('mr32')),
        r = a('cDcd'),
        u = a.n(r);
      class s extends u.a.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = this.props,
            t = e.type,
            a = e.label,
            r = e.mode;
          return 'tag' === r
            ? u.a.createElement(l['a'], { color: 'muted' === t ? 'default' : t }, a)
            : u.a.createElement(n['a'], { status: 'muted' === t ? 'default' : t, text: a || '' });
        }
      }
      (s.defaultProps = void 0), (s.defaultProps = { mode: 'badge' }), (t['a'] = s);
    },
    xnNV: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = a('gDX6');
      const u = () => {
        const e = [
          { value: 1, label: '\u5df2\u7533\u8bf7', status: 'processing' },
          { value: 2, label: '\u88ab\u64a4\u56de', status: 'warning' },
          { value: 3, label: '\u5df2\u521b\u5efa', status: 'muted' },
          { value: 4, label: '\u8fdb\u884c\u4e2d', status: 'processing' },
          { value: 5, label: '\u6682\u505c\u4e2d', status: 'processing' },
          { value: 6, label: '\u5df2\u5b8c\u6210', status: 'success' },
          { value: 7, label: '\u5df2\u7ec8\u6b62', status: 'error' },
          { value: 8, label: '\u5df2\u9000\u56de', status: 'warning' },
        ];
        return (
          e &&
          e.map(e => l.a.createElement(r['a'], { mode: 'tag', type: e.status, label: e.label }))
        );
      };
      t['default'] = u;
    },
  },
]);
