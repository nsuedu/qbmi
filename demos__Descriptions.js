(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    fE8S: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        c = n.n(a),
        l = n('0Owb'),
        o = (n('cIOH'), n('jhiw'), n('lSNA')),
        r = n.n(o),
        s = n('J4zp'),
        i = n.n(s),
        m = n('cDf5'),
        u = n.n(m),
        p = n('TSYQ'),
        d = n.n(p),
        b = n('Zm9Q'),
        v = n('ACnJ'),
        f = n('uaoM'),
        y = n('H84U');
      function h(e) {
        return void 0 !== e && null !== e;
      }
      var E = function(e) {
          var t,
            n = e.itemPrefixCls,
            c = e.component,
            l = e.span,
            o = e.className,
            s = e.style,
            i = e.bordered,
            m = e.label,
            u = e.content,
            p = e.colon,
            b = c;
          return i
            ? a['createElement'](
                b,
                {
                  className: d()(
                    ((t = {}),
                    r()(t, ''.concat(n, '-item-label'), h(m)),
                    r()(t, ''.concat(n, '-item-content'), h(u)),
                    t),
                    o,
                  ),
                  style: s,
                  colSpan: l,
                },
                h(m) ? m : u,
              )
            : a['createElement'](
                b,
                { className: d()(''.concat(n, '-item'), o), style: s, colSpan: l },
                a['createElement'](
                  'div',
                  { className: ''.concat(n, '-item-container') },
                  m &&
                    a['createElement'](
                      'span',
                      {
                        className: d()(
                          ''.concat(n, '-item-label'),
                          r()({}, ''.concat(n, '-item-no-colon'), !p),
                        ),
                      },
                      m,
                    ),
                  u &&
                    a['createElement'](
                      'span',
                      { className: d()(''.concat(n, '-item-content')) },
                      u,
                    ),
                ),
              );
        },
        N = E;
      function w(e, t, n) {
        var c = t.colon,
          l = t.prefixCls,
          o = t.bordered,
          r = n.component,
          s = n.type,
          i = n.showLabel,
          m = n.showContent;
        return e.map(function(e, t) {
          var n = e.props,
            u = n.label,
            p = n.children,
            d = n.prefixCls,
            b = void 0 === d ? l : d,
            v = n.className,
            f = n.style,
            y = n.span,
            h = void 0 === y ? 1 : y,
            E = e.key;
          return 'string' === typeof r
            ? a['createElement'](N, {
                key: ''.concat(s, '-').concat(E || t),
                className: v,
                style: f,
                span: h,
                colon: c,
                component: r,
                itemPrefixCls: b,
                bordered: o,
                label: i ? u : null,
                content: m ? p : null,
              })
            : [
                a['createElement'](N, {
                  key: 'label-'.concat(E || t),
                  className: v,
                  style: f,
                  span: 1,
                  colon: c,
                  component: r[0],
                  itemPrefixCls: b,
                  bordered: o,
                  label: u,
                }),
                a['createElement'](N, {
                  key: 'content-'.concat(E || t),
                  className: v,
                  style: f,
                  span: 2 * h - 1,
                  component: r[1],
                  itemPrefixCls: b,
                  bordered: o,
                  content: p,
                }),
              ];
        });
      }
      var x = function(e) {
          var t = e.prefixCls,
            n = e.vertical,
            c = e.row,
            l = e.index,
            o = e.bordered;
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
                  component: o ? ['th', 'td'] : 'td',
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
        g = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function O(e, t) {
        if ('number' === typeof e) return e;
        if ('object' === u()(e))
          for (var n = 0; n < v['b'].length; n++) {
            var a = v['b'][n];
            if (t[a] && void 0 !== e[a]) return e[a] || g[a];
          }
        return 3;
      }
      function P(e, t, n) {
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
      function A(e, t) {
        var n = Object(b['a'])(e).filter(function(e) {
            return e;
          }),
          a = [],
          c = [],
          l = t;
        return (
          n.forEach(function(e, o) {
            var r,
              s = null === (r = e.props) || void 0 === r ? void 0 : r.span,
              i = s || 1;
            if (o === n.length - 1) return c.push(P(e, s, l)), void a.push(c);
            i < l ? ((l -= i), c.push(e)) : (c.push(P(e, i, l)), a.push(c), (l = t), (c = []));
          }),
          a
        );
      }
      function D(e) {
        var t,
          n = e.prefixCls,
          c = e.title,
          l = e.extra,
          o = e.column,
          s = void 0 === o ? g : o,
          m = e.colon,
          p = void 0 === m || m,
          b = e.bordered,
          f = e.layout,
          h = e.children,
          E = e.className,
          N = e.style,
          w = e.size,
          x = a['useContext'](y['b']),
          k = x.getPrefixCls,
          j = x.direction,
          S = k('descriptions', n),
          P = a['useState']({}),
          D = i()(P, 2),
          J = D[0],
          I = D[1],
          L = O(s, J);
        a['useEffect'](function() {
          var e = v['a'].subscribe(function(e) {
            'object' === u()(s) && I(e);
          });
          return function() {
            v['a'].unsubscribe(e);
          };
        }, []);
        var z = A(h, L);
        return a['createElement'](
          'div',
          {
            className: d()(
              S,
              ((t = {}),
              r()(t, ''.concat(S, '-').concat(w), w && 'default' !== w),
              r()(t, ''.concat(S, '-bordered'), !!b),
              r()(t, ''.concat(S, '-rtl'), 'rtl' === j),
              t),
              E,
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
                z.map(function(e, t) {
                  return a['createElement'](C, {
                    key: t,
                    index: t,
                    colon: p,
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
      D.Item = j;
      var J = D,
        I = n('PpiC');
      const L = e => {
        const t = e.list,
          n = void 0 === t ? [] : t,
          a = e.title,
          o = void 0 === a ? '' : a,
          r = e.col,
          s = void 0 === r ? 3 : r,
          i = Object(I['a'])(e, ['list', 'title', 'col']);
        return c.a.createElement(
          J,
          Object(l['a'])({ title: o, column: s }, i),
          n &&
            Array.isArray(n) &&
            n.length > 0 &&
            n.map(e =>
              c.a.createElement(J.Item, { label: e.label, span: e.span || 1 }, e.value || '--'),
            ),
        );
      };
      var z = L;
      const H = [
        { label: '\u627f\u8fd0\u5546', value: 'carrierName' },
        { label: '\u63d0\u8d27\u65b9\u5f0f', value: 'pickUpTypeStr' },
        { label: '\u8d39\u7528\u627f\u62c5\u65b9', value: 'payerStr' },
        { label: '\u8f66\u53f7', value: 'vehicleNumber' },
        { label: '\u8054\u7cfb\u4eba', value: 'contact' },
        { label: '\u8054\u7cfb\u7535\u8bdd', value: 'contactNumber' },
      ];
      t['default'] = () =>
        c.a.createElement(z, { title: '\u8fd9\u662f\u6807\u9898', list: H, col: 3 });
    },
    jhiw: function(e, t, n) {},
  },
]);
