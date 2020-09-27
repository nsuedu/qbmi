(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [25, 15],
  {
    '4pLY': function(e, t, a) {
      'use strict';
      var n = a('R+Pm');
      const c = Object(n['a'])({ scriptUrl: '//at.alicdn.com/t/font_1671065_9j52mtuhkew.js' });
      t['a'] = c;
    },
    InT0: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        c = a.n(n),
        r = a('4pLY');
      t['default'] = () =>
        c.a.createElement(r['a'], { type: 'iconlabelstatus_completed2x', style: { fontSize: 30 } });
    },
    mS1X: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('0Owb'),
        c = a('cDcd'),
        r = a.n(c),
        l = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        s = a.n(l);
      const o = r.a.memo(function() {
        var e = a('K+nK'),
          t = e(a('cDcd')),
          n = e(a('InT0')),
          c = function() {
            return t.default.createElement(n.default, null);
          };
        return t['default'].createElement(c);
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
            s.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { IconFont } from 'qbmi';\n\nexport default () => <IconFont type=\"iconlabelstatus_completed2x\" style={{ fontSize: 30 }} />;\n",
                },
              },
              {
                path: '/_demos/icon-font',
                title: 'Default usage',
                desc: '<div class="markdown"><p>Pass in a Set acceptable parameter.</p></div>',
                'title.zh-CN': '\u9ed8\u8ba4\u7528\u6cd5',
                'desc.zh-CN':
                  '<div class="markdown"><p>\u4f20\u5165\u4e00\u4e2a Set \u53ef\u63a5\u53d7\u7684\u53c2\u6570\u3002</p></div>',
                dependencies: { qbmi: '0.0.20' },
                files: {},
              },
            ),
            r.a.createElement(o, null),
          ),
        );
      };
    },
  },
]);
