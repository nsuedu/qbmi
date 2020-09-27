(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '9Hk6': function(t, e, a) {
      'use strict';
      a.d(e, 'a', function() {
        return h;
      });
      var s = a('0Owb'),
        n = (a('R9oj'), a('ECub')),
        i = (a('T2oS'), a('W9HT')),
        o = (a('OaEy'), a('2fM7')),
        c = a('cDcd'),
        r = a.n(c),
        l = a('LvDl');
      const u = o['a'].Option;
      class h extends r.a.Component {
        static getDerivedStateFromProps(t, e) {
          const a = t.value,
            s = t.options,
            n = e.value,
            i = e.options,
            o = {};
          return (
            Object(l['isEqual'])(a, n) || Object.assign(o, { value: a }),
            Array.isArray(s) && !Object(l['isEqual'])(s, i) && Object.assign(o, { options: s }),
            o
          );
        }
        constructor(t) {
          super(t),
            (this.fetchData = async t => {
              const e = t.input,
                a = void 0 === e ? this.state.query : e,
                s = t.page,
                n = void 0 === s ? this.state.currentPage : s,
                i = this.props,
                o = i.dataServer,
                c = i.dataHandler;
              if (!Object(l['isFunction'])(o)) return;
              const r = [null, void 0, '', ' '].includes(a) ? '' : a;
              this.setState({ fetching: !0 });
              const u = await o({ input: r, limit: 50, page: n });
              if (Array.isArray(u)) {
                const t = Object(l['isFunction'])(c) ? c(u) : u;
                this.setState({ options: t, fetching: !1 });
              } else if (Array.isArray(u.dataSource)) {
                const t = Object(l['isFunction'])(c) ? c(u.dataSource) : u.dataSource;
                this.setState(e => {
                  const a = [...e.options];
                  a.push(...t);
                  const s = Object(l['uniqBy'])(a, 'value');
                  return {
                    options: s,
                    fetching: !1,
                    currentPage: u.currentPage,
                    totalPage: u.totalPage,
                  };
                });
              }
            }),
            (this.handleSearch = t => {
              this.fetchData({ input: t });
            }),
            (this.handleFocus = () => {
              this.fetchData({ input: '', page: 1 });
            }),
            (this.handleChange = t => {
              const e = this.props,
                a = e.value,
                s = e.onChange,
                n = e.selectProps,
                i = void 0 === n ? {} : n,
                o = this.state.options,
                c =
                  i.labelInValue && t
                    ? o.find(e => e.value === t.value)
                    : o.find(e => e.value === t);
              Object(l['isFunction'])(s) && s(t, o, c), a || this.setState({ value: t });
            }),
            (this.companyScroll = t => {
              const e = t.target,
                a = e.clientHeight,
                s = e.scrollHeight,
                n = e.scrollTop,
                i = this.state,
                o = i.currentPage,
                c = i.totalPage,
                r = i.fetching;
              if (a + n === s && !r && void 0 !== c && void 0 !== o && c > o) {
                const t = o + 1;
                this.setState({ currentPage: t }, () => {
                  this.fetchData({ page: t });
                });
              }
            }),
            (this.handleSearch = Object(l['debounce'])(this.handleSearch, 400)),
            (this.state = {
              options: t.options || [],
              value: t.defaultValue || [],
              query: t.defaultQuery || null,
              fetching: !1,
              cancelDisable: t.cancelDisable || !1,
            });
        }
        componentDidMount() {
          const t = this.props,
            e = t.isLoading,
            a = t.options,
            s = this.state.value;
          (!e && (!s || (Array.isArray(a) && a.length))) || this.fetchData({});
        }
        render() {
          const t = this.props,
            e = t.notFoundTips,
            a = t.selectProps,
            c = this.state,
            l = c.fetching,
            h = c.options,
            d = c.value,
            p = c.cancelDisable;
          return r.a.createElement(
            o['a'],
            Object(s['a'])(
              {
                allowClear: !0,
                value: d,
                notFoundContent: l
                  ? r.a.createElement(i['a'], { size: 'small' })
                  : r.a.createElement(n['a'], { tips: e }),
                filterOption: !1,
                showSearch: !0,
                onSearch: t => {
                  const e = t.replace(/\s+/g, '');
                  this.handleSearch(e);
                },
                onFocus: () => {
                  this.handleFocus();
                },
                onBlur: () => {
                  this.setState({ query: null, currentPage: 1, options: [] });
                },
                onChange: this.handleChange,
                placeholder: '\u8bf7\u9009\u62e9',
                style: { width: '100%' },
              },
              a,
              { onPopupScroll: this.companyScroll },
            ),
            h.map(({ value: t, label: e, ...a }) => {
              const n = { ...a };
              return (
                p && (n.disabled = !1),
                r.a.createElement(u, Object(s['a'])({ key: t, value: t }, n), e)
              );
            }),
          );
        }
      }
      h.defaultProps = { isLoading: !1 };
    },
    es0w: function(t, e, a) {
      'use strict';
      a.r(e);
      var s = a('cDcd'),
        n = a.n(s),
        i = a('9Hk6');
      const o = t =>
          new Promise(t => {
            const e = [
              { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', name: 'string1', disable: !1 },
              { id: '3fa85234-5717-4562-b3fc-2c963f66afa6', name: 'string2', disable: !1 },
              { id: '3fa85f64-34717-4562-b3fc-2c963f66afa6', name: 'string3', disable: !1 },
              { id: '3fa85f64-5717-4662-b3fc-2c963f66afa6', name: 'string4', disable: !1 },
              { id: '3fa85f64-5717-45562-b3fc-2c963f66afa6', name: 'string5', disable: !1 },
            ];
            t({ data: e });
          }),
        c = t =>
          n.a.createElement(i['a'], {
            listServer: o,
            labelValue: { value: 'id', label: 'name' },
            hasNoneText: !0,
          });
      e['default'] = c;
    },
  },
]);
