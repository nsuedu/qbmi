(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    gDX6: function(e, t, a) {
      'use strict';
      a('Awhp');
      var s = a('KrTs'),
        l = (a('+BJd'), a('mr32')),
        u = a('cDcd'),
        n = a.n(u);
      class r extends n.a.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = this.props,
            t = e.type,
            a = e.label,
            u = e.mode;
          return 'tag' === u
            ? n.a.createElement(l['a'], { color: 'muted' === t ? 'default' : t }, a)
            : n.a.createElement(s['a'], { status: 'muted' === t ? 'default' : t, text: a || '' });
        }
      }
      (r.defaultProps = void 0), (r.defaultProps = { mode: 'badge' }), (t['a'] = r);
    },
    xnNV: function(e, t, a) {
      'use strict';
      a.r(t);
      var s = a('cDcd'),
        l = a.n(s),
        u = a('gDX6');
      const n = () => {
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
          e.map(e => l.a.createElement(u['a'], { mode: 'tag', type: e.status, label: e.label }))
        );
      };
      t['default'] = n;
    },
  },
]);
