(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [23, 13],
  {
    Obv0: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('0Owb'),
        c = n('cDcd'),
        l = n.n(c),
        r = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        o = n.n(r);
      const i = l.a.memo(function() {
        var e = n('K+nK'),
          t = e(n('cDcd')),
          a = e(n('fE8S')),
          c = function() {
            return t.default.createElement(a.default, null);
          };
        return t['default'].createElement(c);
      });
      t['default'] = function() {
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
            o.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Descriptions } from 'qbmi';\n\nconst dataList = [\n  { label: '\u627f\u8fd0\u5546', value: 'carrierName' },\n  { label: '\u63d0\u8d27\u65b9\u5f0f', value: 'pickUpTypeStr' },\n  { label: '\u8d39\u7528\u627f\u62c5\u65b9', value: 'payerStr' },\n  { label: '\u8f66\u53f7', value: 'vehicleNumber' },\n  { label: '\u8054\u7cfb\u4eba', value: 'contact' },\n  { label: '\u8054\u7cfb\u7535\u8bdd', value: 'contactNumber' },\n];\n\nexport default () => <Descriptions title=\"\u8fd9\u662f\u6807\u9898\" list={dataList} col={3} />;\n",
                },
              },
              { path: '/_demos/descriptions', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            l.a.createElement(i, null),
          ),
        );
      };
    },
    fE8S: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        c = n.n(a),
        l = n('0Owb'),
        r = (n('cIOH'), n('jhiw'), n('lSNA')),
        o = n.n(r),
        i = n('J4zp'),
        s = n.n(i),
        m = n('cDf5'),
        u = n.n(m),
        d = n('TSYQ'),
        p = n.n(d),
        b = n('Zm9Q'),
        v = n('ACnJ'),
        f = n('uaoM'),
        E = n('H84U');
      function y(e) {
        return void 0 !== e && null !== e;
      }
      var h = function(e) {
          var t,
            n = e.itemPrefixCls,
            c = e.component,
            l = e.span,
            r = e.className,
            i = e.style,
            s = e.bordered,
            m = e.label,
            u = e.content,
            d = e.colon,
            b = c;
          return s
            ? a['createElement'](
                b,
                {
                  className: p()(
                    ((t = {}),
                    o()(t, ''.concat(n, '-item-label'), y(m)),
                    o()(t, ''.concat(n, '-item-content'), y(u)),
                    t),
                    r,
                  ),
                  style: i,
                  colSpan: l,
                },
                y(m) ? m : u,
              )
            : a['createElement'](
                b,
                { className: p()(''.concat(n, '-item'), r), style: i, colSpan: l },
                a['createElement'](
                  'div',
                  { className: ''.concat(n, '-item-container') },
                  m &&
                    a['createElement'](
                      'span',
                      {
                        className: p()(
                          ''.concat(n, '-item-label'),
                          o()({}, ''.concat(n, '-item-no-colon'), !d),
                        ),
                      },
                      m,
                    ),
                  u &&
                    a['createElement'](
                      'span',
                      { className: p()(''.concat(n, '-item-content')) },
                      u,
                    ),
                ),
              );
        },
        N = h;
      function w(e, t, n) {
        var c = t.colon,
          l = t.prefixCls,
          r = t.bordered,
          o = n.component,
          i = n.type,
          s = n.showLabel,
          m = n.showContent;
        return e.map(function(e, t) {
          var n = e.props,
            u = n.label,
            d = n.children,
            p = n.prefixCls,
            b = void 0 === p ? l : p,
            v = n.className,
            f = n.style,
            E = n.span,
            y = void 0 === E ? 1 : E,
            h = e.key;
          return 'string' === typeof o
            ? a['createElement'](N, {
                key: ''.concat(i, '-').concat(h || t),
                className: v,
                style: f,
                span: y,
                colon: c,
                component: o,
                itemPrefixCls: b,
                bordered: r,
                label: s ? u : null,
                content: m ? d : null,
              })
            : [
                a['createElement'](N, {
                  key: 'label-'.concat(h || t),
                  className: v,
                  style: f,
                  span: 1,
                  colon: c,
                  component: o[0],
                  itemPrefixCls: b,
                  bordered: r,
                  label: u,
                }),
                a['createElement'](N, {
                  key: 'content-'.concat(h || t),
                  className: v,
                  style: f,
                  span: 2 * y - 1,
                  component: o[1],
                  itemPrefixCls: b,
                  bordered: r,
                  content: d,
                }),
              ];
        });
      }
      var x = function(e) {
          var t = e.prefixCls,
            n = e.vertical,
            c = e.row,
            l = e.index,
            r = e.bordered;
          return n
            ? a['createElement'](
                a['Fragment'],
                null,
                a['createElement'](
                  'tr',
                  { key: 'label-'.concat(l), className: ''.concat(t, '-row') },
                  w(c, e, { component: 'th', type: 'label', showLabel: !0 }),
                ),
                a['createElement'](
                  'tr',
                  { key: 'content-'.concat(l), className: ''.concat(t, '-row') },
                  w(c, e, { component: 'td', type: 'content', showContent: !0 }),
                ),
              )
            : a['createElement'](
                'tr',
                { key: l, className: ''.concat(t, '-row') },
                w(c, e, {
                  component: r ? ['th', 'td'] : 'td',
                  type: 'item',
                  showLabel: !0,
                  showContent: !0,
                }),
              );
        },
        C = x,
        k = function(e) {
          var t = e.children;
          return t;
        },
        j = k,
        S = n('0n0R'),
        O = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function g(e, t) {
        if ('number' === typeof e) return e;
        if ('object' === u()(e))
          for (var n = 0; n < v['b'].length; n++) {
            var a = v['b'][n];
            if (t[a] && void 0 !== e[a]) return e[a] || O[a];
          }
        return 3;
      }
      function D(e, t, n) {
        var a = e;
        return (
          (void 0 === t || t > n) &&
            ((a = Object(S['a'])(e, { span: n })),
            Object(f['a'])(
              void 0 === t,
              'Descriptions',
              'Sum of column `span` in a line not match `column` of Descriptions.',
            )),
          a
        );
      }
      function P(e, t) {
        var n = Object(b['a'])(e).filter(function(e) {
            return e;
          }),
          a = [],
          c = [],
          l = t;
        return (
          n.forEach(function(e, r) {
            var o,
              i = null === (o = e.props) || void 0 === o ? void 0 : o.span,
              s = i || 1;
            if (r === n.length - 1) return c.push(D(e, i, l)), void a.push(c);
            s < l ? ((l -= s), c.push(e)) : (c.push(D(e, s, l)), a.push(c), (l = t), (c = []));
          }),
          a
        );
      }
      function J(e) {
        var t,
          n = e.prefixCls,
          c = e.title,
          l = e.extra,
          r = e.column,
          i = void 0 === r ? O : r,
          m = e.colon,
          d = void 0 === m || m,
          b = e.bordered,
          f = e.layout,
          y = e.children,
          h = e.className,
          N = e.style,
          w = e.size,
          x = a['useContext'](E['b']),
          k = x.getPrefixCls,
          j = x.direction,
          S = k('descriptions', n),
          D = a['useState']({}),
          J = s()(D, 2),
          L = J[0],
          A = J[1],
          q = g(i, L);
        a['useEffect'](function() {
          var e = v['a'].subscribe(function(e) {
            'object' === u()(i) && A(e);
          });
          return function() {
            v['a'].unsubscribe(e);
          };
        }, []);
        var I = P(y, q);
        return a['createElement'](
          'div',
          {
            className: p()(
              S,
              ((t = {}),
              o()(t, ''.concat(S, '-').concat(w), w && 'default' !== w),
              o()(t, ''.concat(S, '-bordered'), !!b),
              o()(t, ''.concat(S, '-rtl'), 'rtl' === j),
              t),
              h,
            ),
            style: N,
          },
          (c || l) &&
            a['createElement'](
              'div',
              { className: ''.concat(S, '-header') },
              c && a['createElement']('div', { className: ''.concat(S, '-title') }, c),
              l && a['createElement']('div', { className: ''.concat(S, '-extra') }, l),
            ),
          a['createElement'](
            'div',
            { className: ''.concat(S, '-view') },
            a['createElement'](
              'table',
              null,
              a['createElement'](
                'tbody',
                null,
                I.map(function(e, t) {
                  return a['createElement'](C, {
                    key: t,
                    index: t,
                    colon: d,
                    prefixCls: S,
                    vertical: 'vertical' === f,
                    bordered: b,
                    row: e,
                  });
                }),
              ),
            ),
          ),
        );
      }
      J.Item = j;
      var L = J,
        A = n('PpiC');
      const q = e => {
        const t = e.list,
          n = void 0 === t ? [] : t,
          a = e.title,
          r = void 0 === a ? '' : a,
          o = e.col,
          i = void 0 === o ? 3 : o,
          s = Object(A['a'])(e, ['list', 'title', 'col']);
        return c.a.createElement(
          L,
          Object(l['a'])({ title: r, column: i }, s),
          n &&
            Array.isArray(n) &&
            n.length > 0 &&
            n.map(e =>
              c.a.createElement(L.Item, { label: e.label, span: e.span || 1 }, e.value || '--'),
            ),
        );
      };
      var I = q;
      const T = [
        { label: '\u627f\u8fd0\u5546', value: 'carrierName' },
        { label: '\u63d0\u8d27\u65b9\u5f0f', value: 'pickUpTypeStr' },
        { label: '\u8d39\u7528\u627f\u62c5\u65b9', value: 'payerStr' },
        { label: '\u8f66\u53f7', value: 'vehicleNumber' },
        { label: '\u8054\u7cfb\u4eba', value: 'contact' },
        { label: '\u8054\u7cfb\u7535\u8bdd', value: 'contactNumber' },
      ];
      t['default'] = () =>
        c.a.createElement(I, { title: '\u8fd9\u662f\u6807\u9898', list: T, col: 3 });
    },
    jhiw: function(e, t, n) {},
  },
]);
