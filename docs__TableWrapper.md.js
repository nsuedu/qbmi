(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [32, 4, 20],
  {
    '02XB': function(e, t, a) {},
    '9Hk6': function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return u;
      });
      var n = a('0Owb'),
        l = (a('R9oj'), a('ECub')),
        r = (a('T2oS'), a('W9HT')),
        s = (a('OaEy'), a('2fM7')),
        o = a('cDcd'),
        c = a.n(o),
        i = a('LvDl');
      const d = s['a'].Option;
      class u extends c.a.Component {
        static getDerivedStateFromProps(e, t) {
          const a = e.value,
            n = e.options,
            l = t.value,
            r = t.options,
            s = {};
          return (
            Object(i['isEqual'])(a, l) || Object.assign(s, { value: a }),
            Array.isArray(n) && !Object(i['isEqual'])(n, r) && Object.assign(s, { options: n }),
            s
          );
        }
        constructor(e) {
          super(e),
            (this.fetchData = async e => {
              const t = e.input,
                a = void 0 === t ? this.state.query : t,
                n = e.page,
                l = void 0 === n ? this.state.currentPage : n,
                r = this.props,
                s = r.dataServer,
                o = r.dataHandler;
              if (!Object(i['isFunction'])(s)) return;
              const c = [null, void 0, '', ' '].includes(a) ? '' : a;
              this.setState({ fetching: !0 });
              const d = await s({ input: c, limit: 50, page: l });
              if (Array.isArray(d)) {
                const e = Object(i['isFunction'])(o) ? o(d) : d;
                this.setState({ options: e, fetching: !1 });
              } else if (Array.isArray(d.dataSource)) {
                const e = Object(i['isFunction'])(o) ? o(d.dataSource) : d.dataSource;
                this.setState(t => {
                  const a = [...t.options];
                  a.push(...e);
                  const n = Object(i['uniqBy'])(a, 'value');
                  return {
                    options: n,
                    fetching: !1,
                    currentPage: d.currentPage,
                    totalPage: d.totalPage,
                  };
                });
              }
            }),
            (this.handleSearch = e => {
              this.fetchData({ input: e });
            }),
            (this.handleFocus = () => {
              this.fetchData({ input: '', page: 1 });
            }),
            (this.handleChange = e => {
              const t = this.props,
                a = t.value,
                n = t.onChange,
                l = t.selectProps,
                r = void 0 === l ? {} : l,
                s = this.state.options,
                o =
                  r.labelInValue && e
                    ? s.find(t => t.value === e.value)
                    : s.find(t => t.value === e);
              Object(i['isFunction'])(n) && n(e, s, o), a || this.setState({ value: e });
            }),
            (this.companyScroll = e => {
              const t = e.target,
                a = t.clientHeight,
                n = t.scrollHeight,
                l = t.scrollTop,
                r = this.state,
                s = r.currentPage,
                o = r.totalPage,
                c = r.fetching;
              if (a + l === n && !c && void 0 !== o && void 0 !== s && o > s) {
                const e = s + 1;
                this.setState({ currentPage: e }, () => {
                  this.fetchData({ page: e });
                });
              }
            }),
            (this.handleSearch = Object(i['debounce'])(this.handleSearch, 400)),
            (this.state = {
              options: e.options || [],
              value: e.defaultValue || [],
              query: e.defaultQuery || null,
              fetching: !1,
              cancelDisable: e.cancelDisable || !1,
            });
        }
        componentDidMount() {
          const e = this.props,
            t = e.isLoading,
            a = e.options,
            n = this.state.value;
          (!t && (!n || (Array.isArray(a) && a.length))) || this.fetchData({});
        }
        render() {
          const e = this.props,
            t = e.notFoundTips,
            a = e.selectProps,
            o = this.state,
            i = o.fetching,
            u = o.options,
            m = o.value,
            h = o.cancelDisable;
          return c.a.createElement(
            s['a'],
            Object(n['a'])(
              {
                allowClear: !0,
                value: m,
                notFoundContent: i
                  ? c.a.createElement(r['a'], { size: 'small' })
                  : c.a.createElement(l['a'], { tips: t }),
                filterOption: !1,
                showSearch: !0,
                onSearch: e => {
                  const t = e.replace(/\s+/g, '');
                  this.handleSearch(t);
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
            u.map(({ value: e, label: t, ...a }) => {
              const l = { ...a };
              return (
                h && (l.disabled = !1),
                c.a.createElement(d, Object(n['a'])({ key: e, value: e }, l), t)
              );
            }),
          );
        }
      }
      u.defaultProps = { isLoading: !1 };
    },
    LGkM: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return i;
      });
      const n = (e, t) => (
          e.forEach(e => {
            t.push(e), e.children && n(e.children, t);
          }),
          t
        ),
        l = e => {
          const t = e.filter(e => !e.parentId || '' + e.parentId === '0');
          if (t.length) {
            const a = { ...t[0] },
              n = e.filter(e => '' + e.parentId === t[0].value);
            return (
              n.length &&
                (a.children = n.map(t => {
                  const a = { ...t },
                    n = e.filter(e => '' + e.parentId === t.value);
                  return (
                    n.length &&
                      (a.children = n.map(t => {
                        const a = { ...t },
                          n = e.filter(e => '' + e.parentId === t.value);
                        return n.length && (a.children = n), a;
                      })),
                    a
                  );
                })),
              a
            );
          }
          return {};
        },
        r = (e, t) => (
          e.forEach(e => {
            Array.isArray(e.children) && e.children.length > 0
              ? r(e.children, t)
              : t.push({ value: e.key, label: e.title });
          }),
          t
        ),
        s = e => {
          const t = e.key,
            a = e.treeData,
            l = n(a, []);
          function r(e) {
            return e.key === t;
          }
          const s = l.filter(r);
          return s;
        },
        o = (e, t) => {
          let a;
          for (let n = 0; n < t.length; n = 1) {
            const l = t[n];
            l.children &&
              (l.children.some(t => t.key === e)
                ? (a = l)
                : o(e, l.children) && (a = o(e, l.children)));
          }
          return a;
        },
        c = e => {
          const t = e.originData,
            a = e.result,
            n = void 0 === a ? [] : a,
            l = e.lastLeafDisabled,
            r = void 0 !== l && l,
            s = e.onlyLastleafNoDisabled,
            o = void 0 !== s && s,
            i = e.title,
            d = e.value,
            u = e.hideFiled,
            m = e.secondResult,
            h = void 0 === m ? [] : m,
            p = e.number,
            b = void 0 === p ? 0 : p,
            g = e.unitName;
          return Array.isArray(t) && t.length > 0 && i && d
            ? (t.forEach(e => {
                const t = { ...e };
                if (t[d] && t[i]) {
                  const e = t[d];
                  t.childList && (t.children = t.childList);
                  const a = !(Array.isArray(t.children) && t.children.length > 0) && r,
                    l = Array.isArray(t.children) && t.children.length > 0 && o,
                    s = t.disabled,
                    m = {
                      title: '' + t[i],
                      key: '' + e,
                      value: '' + e,
                      origin: t,
                      parentId: (t.pid && '' + t.pid) || null,
                      isChecked: Boolean(void 0 !== t.isChecked ? t.isChecked : 1 === t.selection),
                      disabled: Boolean(l || a || s),
                      number: t[b] ? `${t[b]}${g}` : 0,
                    };
                  Array.isArray(t.children) &&
                    t.children.length > 0 &&
                    ((m.children = []),
                    (m.children = c({
                      originData: t.children,
                      result: [],
                      lastLeafDisabled: r,
                      onlyLastleafNoDisabled: o,
                      title: i,
                      value: d,
                      hideFiled: u,
                      number: b,
                      unitName: g,
                    }))),
                    u && void 0 !== t[u] && '' + t[u] === '0' ? h.push(m) : n.push(m);
                }
              }),
              u ? h : n)
            : [];
        },
        i = e => {
          const t = e.originData,
            a = e.hasAll,
            n = void 0 === a || a,
            l = e.lastLeafDisabled,
            r = e.onlyLastleafNoDisabled,
            s = e.title,
            o = e.value,
            i = e.hideFiled,
            d = e.number,
            u = e.unitName,
            m = {
              originData: t,
              result: [],
              lastLeafDisabled: l,
              onlyLastleafNoDisabled: r,
              title: s,
              value: o,
              hideFiled: i,
              number: d,
              unitName: u,
            },
            h = c(m);
          return n ? [{ value: '', title: '\u5168\u90e8', key: '0', children: h }] : h;
        },
        d = {
          generateList: n,
          arrayToTree: l,
          getLastChildren: r,
          getDataByKeyFromTreeData: s,
          getParentInfoByKey: o,
          dataTransformToTree: i,
          transformTree: c,
        };
      t['b'] = d;
    },
    NDtW: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('tJVT'),
        l = a('cDcd'),
        r = a.n(l),
        s = a('Qyje'),
        o = a('gDX6'),
        c = a('0Owb'),
        i = a('LvDl'),
        d = (a('+L6B'), a('2/Rp')),
        u = (a('14J3'), a('BMrR')),
        m = (a('jCWc'), a('kPKH')),
        h = (a('giR+'), a('fyUT')),
        p = (a('5NDa'), a('5rEg')),
        b = (a('7Kak'), a('9yH6')),
        g = (a('y8nQ'), a('Vl3Y')),
        j = (a('nRaC'), a('5RzL')),
        f = (a('iQDF'), a('+eQT')),
        E = a('wd/R'),
        y = a.n(E),
        v = a('9Hk6'),
        w = a('PvOv');
      a('jazc');
      const S = f['a'].RangePicker,
        k = j['a'].SHOW_PARENT,
        D = e => {
          const t = e.onFinish,
            a = e.options,
            s = e.formLayout,
            o = e.initialValues,
            E = e.onValuesChange,
            D = e.format,
            O = void 0 === D ? 'YYYY-MM-DD' : D,
            x = e.onFormReset,
            C = g['a'].useForm(),
            P = Object(n['a'])(C, 1),
            R = P[0];
          Object(l['useEffect'])(() => {
            const e = {};
            o &&
              (Object.keys(o).forEach(t => {
                Object(i['isObject'])(o[t]) && 'time' === o[t].type
                  ? (e['time-' + t] = y()(o[t].value))
                  : (e[t] = o[t]);
              }),
              R.setFieldsValue(e));
          }, [o]);
          const T = {},
            z = (e, a) => {
              const n = {};
              return (
                Object.keys(e).forEach(t => {
                  if (t.indexOf('times-') >= 0) {
                    const a = t.split('-')[1];
                    (n[T[a][0]] = e[t] && e[t][0] ? e[t][0].format(O) : ''),
                      (n[T[a][1]] = e[t] && e[t][1] ? e[t][1].format(O) : '');
                  } else if (t.indexOf('time-') >= 0) {
                    const a = t.split('-')[1];
                    n[a] = e[t] ? e[t].format(O) : '';
                  } else
                    Object(i['isObject'])(e[t]) && e[t].label
                      ? (n[t] = e[t].value || e[t].key)
                      : (n[t] = e[t]);
                }),
                Object(i['isFunction'])(t) &&
                  t(
                    Object(i['pickBy'])(n, e => void 0 !== e || null !== e),
                    a,
                  )
              );
            },
            F = () => {
              R.resetFields();
              const e = R.getFieldsValue();
              x ? (z(e, 'no'), x()) : z(e);
            },
            N = e => Object(i['isFunction'])(t) && t(e),
            I = (e = []) =>
              e.map(e => r.a.createElement(b['a'], { key: e.value, value: e.value }, e.text)),
            L = e => {
              let t = null,
                a = r.a.createElement(p['a'], {
                  placeholder: e.placeholder,
                  allowClear: !0,
                  className: 'searchForm-field',
                });
              switch (e.type) {
                case 'select':
                  a = r.a.createElement(v['a'], {
                    selectProps: {
                      allowClear: !0,
                      className: 'searchForm-field',
                      ...e.selectProps,
                    },
                    options: e.options,
                    dataServer: e.dataServer,
                  });
                  break;
                case 'rangePicker':
                  a = r.a.createElement(S, {
                    allowClear: !0,
                    format: e.format || 'YYYY-MM-DD',
                    showTime: e.showTime,
                    className: 'searchForm-field',
                  });
                  break;
                case 'inputNumber':
                  a = r.a.createElement(h['a'], { className: 'searchForm-field' });
                  break;
                case 'textArea':
                  a = r.a.createElement(p['a'].TextArea, {
                    allowClear: !0,
                    className: 'searchForm-field',
                  });
                  break;
                case 'datePicker':
                  a = r.a.createElement(f['a'], {
                    allowClear: !0,
                    key: e.picker,
                    picker: e.picker || 'date',
                    format: O,
                    showTime: e.showTime,
                    className: 'searchForm-field',
                  });
                  break;
                case 'radio':
                  a = r.a.createElement(
                    b['a'].Group,
                    { defaultValue: o && o[e.name] ? o[e.name] : null },
                    I(e.options),
                  );
                  break;
                case 'treeSelect':
                  (t = {
                    allowClear: !0,
                    treeData: e.treeData,
                    showCheckedStrategy: k,
                    placeholder: e.placeholder,
                  }),
                    (a = r.a.createElement(
                      j['a'],
                      Object(c['a'])({}, t, { className: 'searchForm-field' }),
                    ));
                  break;
                case 'custTreeSelect':
                  a = r.a.createElement(w['a'], {
                    allowClear: !0,
                    dataServer: e.dataServer,
                    transformOptions: e.transformOptions,
                    callback: e.callback,
                    className: 'searchForm-field',
                    placeholder:
                      (null === e || void 0 === e ? void 0 : e.placeholder) || '\u8bf7\u9009\u62e9',
                  });
                  break;
                default:
                  break;
              }
              let n,
                l,
                s = e.name;
              return (
                'rangePicker' === e.type
                  ? ((T[e.name] = e.timeArr || ['StartTime', 'EndTime']), (s = 'times-' + e.name))
                  : 'datePicker' === e.type && (s = 'time-' + e.name),
                (n =
                  !1 === e.formSpan
                    ? {}
                    : 'object' !== typeof e.formSpan
                    ? { span: e.formSpan || 6 }
                    : e.formSpan),
                (l = 'object' !== typeof e.colSpan ? { span: e.colSpan || 6 } : e.colSpan),
                'inputNumberRange' !== e.type
                  ? r.a.createElement(
                      m['a'],
                      Object(c['a'])({ key: e.name }, l),
                      r.a.createElement(
                        g['a'].Item,
                        {
                          label: e.label,
                          name: s,
                          rules: Array.isArray(e.rules) ? e.rules : [],
                          style: e.style || {},
                          labelCol: { ...n },
                        },
                        a,
                      ),
                    )
                  : r.a.createElement(
                      m['a'],
                      Object(c['a'])({ key: e.name }, l),
                      r.a.createElement(
                        g['a'].Item,
                        { label: e.label, labelCol: { ...n }, style: { marginBottom: 0 } },
                        r.a.createElement(
                          g['a'].Item,
                          {
                            name: e.names[0],
                            rules: [{ required: !1 }],
                            style: { display: 'inline-block' },
                          },
                          r.a.createElement(h['a'], null),
                        ),
                        r.a.createElement(
                          'span',
                          {
                            style: {
                              display: 'inline-block',
                              height: '32px',
                              lineHeight: '32px',
                              margin: '0 8px 0 8px',
                            },
                          },
                          '\u81f3',
                        ),
                        r.a.createElement(
                          g['a'].Item,
                          {
                            name: e.names[1],
                            rules: [{ required: !1 }],
                            style: { display: 'inline-block' },
                          },
                          r.a.createElement(h['a'], null),
                        ),
                      ),
                    )
              );
            },
            A = e => {
              const t = Array.isArray(e) ? Object(i['flatMap'])(e, e => e) : [];
              return t.length
                ? r.a.createElement(
                    u['a'],
                    { gutter: 24 },
                    t.map(e => L(e)),
                  )
                : null;
            };
          return r.a.createElement(
            'div',
            { className: 'search-form' },
            r.a.createElement(
              g['a'],
              { form: R, onFinish: z, onFinishFailed: N, layout: s, onValuesChange: E },
              r.a.createElement(
                'div',
                { className: 'search-btns btns' },
                r.a.createElement(d['a'], { type: 'primary', htmlType: 'submit' }, '\u67e5\u8be2'),
                r.a.createElement(d['a'], { onClick: F }, '\u91cd\u7f6e'),
              ),
              r.a.createElement('div', { className: 'search-content' }, A(a)),
            ),
          );
        };
      var O = D,
        x = a('WIqL');
      class C extends l['Component'] {
        constructor(e) {
          super(e),
            (this.handleStandardTableChange = (e, t, a) => {
              const n = this.props,
                l = n.handleTableChange,
                r = n.sortOrder;
              l && l(e, t, a),
                (a.order && r && a.order !== r) ||
                  this.setState({ currentPage: e.current, pageSize: e.pageSize }, () => {
                    this.getTableData();
                  });
            }),
            (this.handleMenuClick = e => {
              const t = this.props.handleMenuClick,
                a = this.state.selectedRows;
              a && (t && t(e.key, a), this.setState({ selectedRows: [] }));
            }),
            (this.handleSelectRows = (e, t) => {
              this.setState({ selectedRows: t });
              const a = this.props.handleSelectRows;
              a && a(e, t);
            }),
            (this.resetPageAndGetData = () => {
              this.setState({ pageSize: 10, currentPage: 1 }, () => {
                this.getTableData();
              });
            }),
            (this.getTableData = async () => {
              const e = this.state,
                t = e.pageSize,
                a = e.currentPage,
                n = e.searchValues,
                l = e.searchParams,
                r = this.props,
                s = r.listService,
                o = r.dataHandler,
                c = r.paramsHandler,
                d = r.initialValues,
                u = r.tableProps,
                m = u.mergeRowPage,
                h = u.mergePageSize,
                p = { ...d, ...l, ...n, limit: m ? h : t, page: a },
                b = Object(i['isFunction'])(c) ? c(p) : p,
                g = await s(b);
              if (g && g.success) {
                let e = g.data;
                o && (e = o(e)),
                  this.setState({ page: e.page, total: e.total, tableData: e.items });
              }
            }),
            (this.onSearch = e => {
              this.setState({ searchValues: e, currentPage: 1 }, () => {
                this.getTableData();
              });
            }),
            (this.handleFormReset = () => {
              const e = this.props.onFormReset;
              this.setState({ pageSize: 10, currentPage: 1 }, () => {
                e && e();
              });
            }),
            (this.renderTable = () => {
              const e = this.props,
                t = e.tableProps,
                a = e.alertProps,
                n = e.formOptions,
                l = e.children,
                s = e.initialValues,
                o = e.formValuesChange,
                i = e.format,
                d = e.formLayout,
                u = e.formItemLayout,
                m = t.mergeRowPage,
                h = t.mergePageSize,
                p = t.loading,
                b = t.scroll,
                g = void 0 === b ? { x: !1 } : b,
                j = this.state,
                f = j.tableData,
                E = j.total,
                y = j.page,
                v = j.pageSize;
              let w = {};
              if (m) {
                const e = f.length > h ? f.length : h;
                w = {
                  list: f,
                  pagination: {
                    current: y,
                    total: y * (e - h) + E,
                    totalRecords: E,
                    pageSize: e,
                    showSizeChanger: !1,
                  },
                };
              } else
                w = { list: f, pagination: { current: y, pageSize: v, total: E, totalRecords: E } };
              const S = { scroll: g, ...t, data: w, loading: Boolean(p), alertProps: a };
              return r.a.createElement(
                'div',
                null,
                n &&
                  r.a.createElement(O, {
                    onFinish: this.onSearch,
                    initialValues: s,
                    options: n,
                    onValuesChange: o,
                    format: i,
                    formLayout: d,
                    formItemLayout: u,
                    onFormReset: this.handleFormReset,
                  }),
                l,
                r.a.createElement(
                  x['a'],
                  Object(c['a'])({ rowKey: 'id' }, S, {
                    onSelectRow: this.handleSelectRows,
                    onChange: this.handleStandardTableChange,
                  }),
                ),
              );
            }),
            (this.state = {
              pageSize: 10,
              currentPage: 1,
              tableData: [],
              total: 0,
              searchValues: {},
              selectedRows: [],
              searchParams: e.searchParams,
            });
        }
        componentDidMount() {
          const e = this.props.tableWrapperRef;
          Object(i['isFunction'])(e) && e(this), this.getTableData();
        }
        static getDerivedStateFromProps(e, t) {
          const a = e.searchParams;
          return e.searchParams && !Object(i['isEqual'])(a, t.searchParams)
            ? { ...t, searchParams: e.searchParams }
            : null;
        }
        componentDidUpdate(e) {
          const t = e.searchParams,
            a = this.state.searchParams;
          a && !Object(i['isEqual'])(a, t) && this.resetPageAndGetData();
        }
        render() {
          return this.renderTable();
        }
      }
      C.defaultProps = {
        handleTableChange: void 0,
        handleMenuClick: void 0,
        formValuesChange: void 0,
        sortOrder: 'descend',
        handleSelectRows: void 0,
        alertProps: { hasAlert: !1 },
        searchParams: {},
      };
      var P = C;
      const R = [
          { value: 0, label: '\u5168\u90e8' },
          {
            value: 1,
            label: '\u8fdb\u884c\u4e2d',
            serviceText: '\u5df2\u521b\u5efa',
            status: 'processing',
          },
          {
            value: 2,
            label: '\u8fdb\u884c\u4e2d',
            serviceText: '\u901a\u77e5\u6536\u8d27',
            status: 'processing',
          },
          {
            value: 3,
            label: '\u8fdb\u884c\u4e2d',
            serviceText: '\u5df2\u6536\u8d27',
            status: 'processing',
          },
          {
            value: 4,
            label: '\u5df2\u5b8c\u6210',
            serviceText: '\u5df2\u5b8c\u6210',
            status: 'success',
          },
          {
            value: 5,
            label: '\u5df2\u7ec8\u6b62',
            serviceText: '\u5df2\u7ec8\u6b62',
            status: 'error',
          },
        ],
        T = [
          {
            type: 'input',
            name: 'OrderNumber',
            label: '\u91c7\u8d2d\u8ba2\u5355\u53f7',
            placeholder: '\u8bf7\u8f93\u5165',
            formSpan: { span: 8 },
          },
          {
            type: 'select',
            name: 'Status',
            label: '\u72b6\u6001',
            placeholder: '\u8bf7\u9009\u62e9',
            options: R.filter(e => ![2, 3].includes(e.value)),
          },
          { type: 'rangePicker', name: 'createTime', label: '\u521b\u5efa\u65e5\u671f' },
          { type: 'input', name: 'description', label: '\u8ba2\u5355\u5907\u6ce8' },
        ],
        z = [
          { title: '\u91c7\u8d2d\u8ba2\u5355\u53f7', dataIndex: 'orderNumber', width: '200px' },
          { title: '\u4f9b\u5e94\u5546', dataIndex: 'supplierName', width: '140px' },
          { title: '\u91c7\u8d2d\u5458', dataIndex: 'buyer', width: 120 },
          {
            title: '\u5f02\u5e38\u60c5\u51b5',
            dataIndex: 'abnormal',
            width: 150,
            render: e => {
              const t = (e || '').replace(/^\,|\,$/, '');
              return t;
            },
          },
          {
            title: '\u8ba2\u5355\u72b6\u6001',
            dataIndex: 'status',
            width: 120,
            render: (e = -1) => {
              const t = R.find(t => t.value === e) || R[0];
              return r.a.createElement(o['a'], { type: t.status, label: t.label });
            },
          },
          { title: '\u521b\u5efa\u65f6\u95f4', dataIndex: 'createTime', width: '140px' },
          { title: '\u8ba2\u5355\u5907\u6ce8', dataIndex: 'description', width: 280 },
        ],
        F = () => {
          const e = Object(l['useState'])(!1),
            t = Object(n['a'])(e, 2),
            a = t[0],
            o = t[1],
            c = e => (
              o(!0),
              fetch(
                'https://mock.yonyoucloud.com/mock/15420/qbmi/components/doc/wrapperTable?' +
                  Object(s['stringify'])(e),
                { method: 'get' },
              ).then(e => (setTimeout(o, 500, !1), e.json()))
            );
          return r.a.createElement(P, {
            formOptions: T,
            tableProps: { columns: z, loading: a, tableLayout: 'fixed', rowKey: 'orderId' },
            listService: c,
          });
        };
      t['default'] = F;
    },
    PvOv: function(e, t, a) {
      'use strict';
      var n = a('0Owb'),
        l = a('PpiC'),
        r = (a('nRaC'), a('5RzL')),
        s = a('cDcd'),
        o = a.n(s),
        c = a('LGkM');
      a('qSRc');
      const i = r['a'].TreeNode;
      class d extends o.a.Component {
        constructor(e) {
          super(e),
            (this.getServerData = e => {
              const t = this.props,
                a = t.dataServer,
                n = t.transformOptions;
              a &&
                a({ loading: !1 }).then(t => {
                  if (t && t.data)
                    if (n) {
                      const a = Object(c['a'])({ originData: t.data, ...n });
                      this.setState({ treeData: a }, () => {
                        e && e();
                      });
                    } else
                      this.setState({ treeData: t.data }, () => {
                        e && e();
                      });
                });
            }),
            (this.onFocus = () => {
              this.getServerData();
            }),
            (this.renderNode = e =>
              e.map(e => {
                const t = void 0 === e.disabled || !e.disabled;
                return o.a.createElement(
                  i,
                  {
                    key: e.key,
                    selectable: t,
                    className: t ? '' : 'custTreeDisableItem',
                    value: '' + e.value,
                    title: e.title,
                  },
                  e.children && e.children.length > 0 && this.renderNode(e.children),
                );
              })),
            (this.onChangeHandler = (e, t, a) => {
              const n = this.props.onChange,
                l = this.state.treeData;
              n && n(e, t, a, l);
            }),
            (this.state = { treeData: e.treeData || [] });
        }
        componentDidMount() {
          const e = this.props.callback;
          this.getServerData(e);
        }
        render() {
          const e = this.props,
            t = (e.onChange, Object(l['a'])(e, ['onChange'])),
            a = JSON.parse(JSON.stringify(this.state.treeData));
          return (
            delete t.treeData,
            delete t.transformOptions,
            delete t.dataServer,
            a && a.length > 0
              ? o.a.createElement(
                  r['a'],
                  Object(n['a'])(
                    {
                      onFocus: this.onFocus,
                      dropdownClassName: 'custDrop',
                      onChange: this.onChangeHandler,
                    },
                    t,
                  ),
                  this.renderNode(a),
                )
              : o.a.createElement(r['a'], {
                  key: 'null',
                  style: t.style ? t.style : { width: '100%' },
                })
          );
        }
      }
      t['a'] = d;
    },
    RnhZ: function(e, t, a) {
      var n = {
        './af': 'K/tc',
        './af.js': 'K/tc',
        './ar': 'jnO4',
        './ar-dz': 'o1bE',
        './ar-dz.js': 'o1bE',
        './ar-kw': 'Qj4J',
        './ar-kw.js': 'Qj4J',
        './ar-ly': 'HP3h',
        './ar-ly.js': 'HP3h',
        './ar-ma': 'CoRJ',
        './ar-ma.js': 'CoRJ',
        './ar-sa': 'gjCT',
        './ar-sa.js': 'gjCT',
        './ar-tn': 'bYM6',
        './ar-tn.js': 'bYM6',
        './ar.js': 'jnO4',
        './az': 'SFxW',
        './az.js': 'SFxW',
        './be': 'H8ED',
        './be.js': 'H8ED',
        './bg': 'hKrs',
        './bg.js': 'hKrs',
        './bm': 'p/rL',
        './bm.js': 'p/rL',
        './bn': 'kEOa',
        './bn-bd': 'loYQ',
        './bn-bd.js': 'loYQ',
        './bn.js': 'kEOa',
        './bo': '0mo+',
        './bo.js': '0mo+',
        './br': 'aIdf',
        './br.js': 'aIdf',
        './bs': 'JVSJ',
        './bs.js': 'JVSJ',
        './ca': '1xZ4',
        './ca.js': '1xZ4',
        './cs': 'PA2r',
        './cs.js': 'PA2r',
        './cv': 'A+xa',
        './cv.js': 'A+xa',
        './cy': 'l5ep',
        './cy.js': 'l5ep',
        './da': 'DxQv',
        './da.js': 'DxQv',
        './de': 'tGlX',
        './de-at': 's+uk',
        './de-at.js': 's+uk',
        './de-ch': 'u3GI',
        './de-ch.js': 'u3GI',
        './de.js': 'tGlX',
        './dv': 'WYrj',
        './dv.js': 'WYrj',
        './el': 'jUeY',
        './el.js': 'jUeY',
        './en-au': 'Dmvi',
        './en-au.js': 'Dmvi',
        './en-ca': 'OIYi',
        './en-ca.js': 'OIYi',
        './en-gb': 'Oaa7',
        './en-gb.js': 'Oaa7',
        './en-ie': '4dOw',
        './en-ie.js': '4dOw',
        './en-il': 'czMo',
        './en-il.js': 'czMo',
        './en-in': '7C5Q',
        './en-in.js': '7C5Q',
        './en-nz': 'b1Dy',
        './en-nz.js': 'b1Dy',
        './en-sg': 't+mt',
        './en-sg.js': 't+mt',
        './eo': 'Zduo',
        './eo.js': 'Zduo',
        './es': 'iYuL',
        './es-do': 'CjzT',
        './es-do.js': 'CjzT',
        './es-mx': 'tbfe',
        './es-mx.js': 'tbfe',
        './es-us': 'Vclq',
        './es-us.js': 'Vclq',
        './es.js': 'iYuL',
        './et': '7BjC',
        './et.js': '7BjC',
        './eu': 'D/JM',
        './eu.js': 'D/JM',
        './fa': 'jfSC',
        './fa.js': 'jfSC',
        './fi': 'gekB',
        './fi.js': 'gekB',
        './fil': '1ppg',
        './fil.js': '1ppg',
        './fo': 'ByF4',
        './fo.js': 'ByF4',
        './fr': 'nyYc',
        './fr-ca': '2fjn',
        './fr-ca.js': '2fjn',
        './fr-ch': 'Dkky',
        './fr-ch.js': 'Dkky',
        './fr.js': 'nyYc',
        './fy': 'cRix',
        './fy.js': 'cRix',
        './ga': 'USCx',
        './ga.js': 'USCx',
        './gd': '9rRi',
        './gd.js': '9rRi',
        './gl': 'iEDd',
        './gl.js': 'iEDd',
        './gom-deva': 'qvJo',
        './gom-deva.js': 'qvJo',
        './gom-latn': 'DKr+',
        './gom-latn.js': 'DKr+',
        './gu': '4MV3',
        './gu.js': '4MV3',
        './he': 'x6pH',
        './he.js': 'x6pH',
        './hi': '3E1r',
        './hi.js': '3E1r',
        './hr': 'S6ln',
        './hr.js': 'S6ln',
        './hu': 'WxRl',
        './hu.js': 'WxRl',
        './hy-am': '1rYy',
        './hy-am.js': '1rYy',
        './id': 'UDhR',
        './id.js': 'UDhR',
        './is': 'BVg3',
        './is.js': 'BVg3',
        './it': 'bpih',
        './it-ch': 'bxKX',
        './it-ch.js': 'bxKX',
        './it.js': 'bpih',
        './ja': 'B55N',
        './ja.js': 'B55N',
        './jv': 'tUCv',
        './jv.js': 'tUCv',
        './ka': 'IBtZ',
        './ka.js': 'IBtZ',
        './kk': 'bXm7',
        './kk.js': 'bXm7',
        './km': '6B0Y',
        './km.js': '6B0Y',
        './kn': 'PpIw',
        './kn.js': 'PpIw',
        './ko': 'Ivi+',
        './ko.js': 'Ivi+',
        './ku': 'JCF/',
        './ku.js': 'JCF/',
        './ky': 'lgnt',
        './ky.js': 'lgnt',
        './lb': 'RAwQ',
        './lb.js': 'RAwQ',
        './lo': 'sp3z',
        './lo.js': 'sp3z',
        './lt': 'JvlW',
        './lt.js': 'JvlW',
        './lv': 'uXwI',
        './lv.js': 'uXwI',
        './me': 'KTz0',
        './me.js': 'KTz0',
        './mi': 'aIsn',
        './mi.js': 'aIsn',
        './mk': 'aQkU',
        './mk.js': 'aQkU',
        './ml': 'AvvY',
        './ml.js': 'AvvY',
        './mn': 'lYtQ',
        './mn.js': 'lYtQ',
        './mr': 'Ob0Z',
        './mr.js': 'Ob0Z',
        './ms': '6+QB',
        './ms-my': 'ZAMP',
        './ms-my.js': 'ZAMP',
        './ms.js': '6+QB',
        './mt': 'G0Uy',
        './mt.js': 'G0Uy',
        './my': 'honF',
        './my.js': 'honF',
        './nb': 'bOMt',
        './nb.js': 'bOMt',
        './ne': 'OjkT',
        './ne.js': 'OjkT',
        './nl': '+s0g',
        './nl-be': '2ykv',
        './nl-be.js': '2ykv',
        './nl.js': '+s0g',
        './nn': 'uEye',
        './nn.js': 'uEye',
        './oc-lnc': 'Fnuy',
        './oc-lnc.js': 'Fnuy',
        './pa-in': '8/+R',
        './pa-in.js': '8/+R',
        './pl': 'jVdC',
        './pl.js': 'jVdC',
        './pt': '8mBD',
        './pt-br': '0tRk',
        './pt-br.js': '0tRk',
        './pt.js': '8mBD',
        './ro': 'lyxo',
        './ro.js': 'lyxo',
        './ru': 'lXzo',
        './ru.js': 'lXzo',
        './sd': 'Z4QM',
        './sd.js': 'Z4QM',
        './se': '//9w',
        './se.js': '//9w',
        './si': '7aV9',
        './si.js': '7aV9',
        './sk': 'e+ae',
        './sk.js': 'e+ae',
        './sl': 'gVVK',
        './sl.js': 'gVVK',
        './sq': 'yPMs',
        './sq.js': 'yPMs',
        './sr': 'zx6S',
        './sr-cyrl': 'E+lV',
        './sr-cyrl.js': 'E+lV',
        './sr.js': 'zx6S',
        './ss': 'Ur1D',
        './ss.js': 'Ur1D',
        './sv': 'X709',
        './sv.js': 'X709',
        './sw': 'dNwA',
        './sw.js': 'dNwA',
        './ta': 'PeUW',
        './ta.js': 'PeUW',
        './te': 'XLvN',
        './te.js': 'XLvN',
        './tet': 'V2x9',
        './tet.js': 'V2x9',
        './tg': 'Oxv6',
        './tg.js': 'Oxv6',
        './th': 'EOgW',
        './th.js': 'EOgW',
        './tk': 'Wv91',
        './tk.js': 'Wv91',
        './tl-ph': 'Dzi0',
        './tl-ph.js': 'Dzi0',
        './tlh': 'z3Vd',
        './tlh.js': 'z3Vd',
        './tr': 'DoHr',
        './tr.js': 'DoHr',
        './tzl': 'z1FC',
        './tzl.js': 'z1FC',
        './tzm': 'wQk9',
        './tzm-latn': 'tT3J',
        './tzm-latn.js': 'tT3J',
        './tzm.js': 'wQk9',
        './ug-cn': 'YRex',
        './ug-cn.js': 'YRex',
        './uk': 'raLr',
        './uk.js': 'raLr',
        './ur': 'UpQW',
        './ur.js': 'UpQW',
        './uz': 'Loxo',
        './uz-latn': 'AQ68',
        './uz-latn.js': 'AQ68',
        './uz.js': 'Loxo',
        './vi': 'KSF8',
        './vi.js': 'KSF8',
        './x-pseudo': '/X5v',
        './x-pseudo.js': '/X5v',
        './yo': 'fzPg',
        './yo.js': 'fzPg',
        './zh-cn': 'XDpg',
        './zh-cn.js': 'XDpg',
        './zh-hk': 'SatO',
        './zh-hk.js': 'SatO',
        './zh-mo': 'OmwH',
        './zh-mo.js': 'OmwH',
        './zh-tw': 'kOpN',
        './zh-tw.js': 'kOpN',
      };
      function l(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return n[e];
      }
      (l.keys = function() {
        return Object.keys(n);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 'RnhZ');
    },
    WIqL: function(e, t, a) {
      'use strict';
      a('g9YV');
      var n = a('wCAj'),
        l = a('0Owb'),
        r = (a('fOrg'), a('+KLJ')),
        s = a('PpiC'),
        o = a('cDcd'),
        c = a.n(o),
        i = a('LvDl');
      a('02XB');
      class d extends o['PureComponent'] {
        constructor(e) {
          super(e),
            (this.handleRowSelectChange = (e, t) => {
              const a = this.props.onSelectRow;
              Object(i['isFunction'])(a) && a(e, t), this.setState({ selectedRowKeys: e });
            }),
            (this.handleTableChange = (e, t, a) => {
              const n = this.props.onChange;
              n(e, t, a);
            }),
            (this.cleanSelectedKeys = () => {
              this.handleRowSelectChange([], []);
            }),
            (this.state = { selectedRowKeys: [] });
        }
        componentWillReceiveProps(e) {
          ((e.selectedRows && 0 === e.selectedRows.length) ||
            !Object(i['isEqual'])(e.data.list, this.props.data.list)) &&
            this.setState({ selectedRowKeys: [] });
        }
        render() {
          const e = this.state.selectedRowKeys,
            t = this.props,
            a = t.data,
            i = a.list,
            d = a.pagination,
            u = t.loading,
            m = t.columns,
            h = t.rowKey,
            p = t.hasRowSelection,
            b = t.scroll,
            g = t.title,
            j = t.rowSelection,
            f = t.alertProps,
            E = void 0 === f ? {} : f,
            y = t.size,
            v = t.locale,
            w = t.rowClassName,
            S = t.className,
            k = t.tableLayout,
            D = t.footer,
            O = t.bordered,
            x = Object(s['a'])(t, [
              'data',
              'loading',
              'columns',
              'rowKey',
              'hasRowSelection',
              'scroll',
              'title',
              'rowSelection',
              'alertProps',
              'size',
              'locale',
              'rowClassName',
              'className',
              'tableLayout',
              'footer',
              'bordered',
            ]),
            C =
              (d && {
                showSizeChanger: !0,
                showQuickJumper: !0,
                ...d,
                showTotal: () => `\u603b\u5171${d && d.totalRecords ? d.totalRecords : 0}\u6761`,
              }) ||
              !1,
            P = {
              selectedRowKeys: e,
              onChange: this.handleRowSelectChange,
              getCheckboxProps: e => ({ disabled: e.disabled }),
              ...j,
            };
          return c.a.createElement(
            'div',
            { className: 'qbmi-table' },
            p && !P.type
              ? c.a.createElement(
                  'div',
                  { className: 'm-b' },
                  c.a.createElement(r['a'], {
                    message: c.a.createElement(
                      o['Fragment'],
                      null,
                      '\u5df2\u9009\u62e9',
                      ' ',
                      c.a.createElement('a', { style: { fontWeight: 600 } }, e.length),
                      ' ',
                      '\u9879\xa0\xa0',
                      c.a.createElement('span', null, E.hasAlert ? E.alertLayout : ''),
                    ),
                    type: 'info',
                    showIcon: !0,
                  }),
                )
              : null,
            c.a.createElement(
              n['a'],
              Object(l['a'])(
                {
                  bordered: O,
                  size: y,
                  tableLayout: k || '',
                  loading: u,
                  scroll: b,
                  rowKey: h || 'id',
                  rowSelection: p ? P : null,
                  dataSource: i.map(e => ((e.pagination = C), e)),
                  columns: m.map(e => ((e.ellipsis = !0), e)),
                  pagination: C,
                  onChange: this.handleTableChange,
                  title: g,
                  rowClassName: w,
                  locale: v,
                  className: O ? void 0 : 'table-striped' + (S ? ' ' + S : ''),
                  footer: D,
                },
                x,
              ),
            ),
          );
        }
      }
      (d.defaultProps = { hasRowSelection: !1 }), (t['a'] = d);
    },
    XGoj: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('0Owb'),
        l = a('cDcd'),
        r = a.n(l),
        s = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        o = a.n(s);
      const c = r.a.memo(function() {
        var e = a('K+nK'),
          t = e(a('cDcd')),
          n = e(a('NDtW')),
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
              'h1',
              { id: 'tablewrapper-\u5e26\u641c\u7d22\u6761\u4ef6\u67e5\u8be2\u7684\u8868\u683c' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#tablewrapper-\u5e26\u641c\u7d22\u6761\u4ef6\u67e5\u8be2\u7684\u8868\u683c',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'TableWrapper \u5e26\u641c\u7d22\u6761\u4ef6\u67e5\u8be2\u7684\u8868\u683c',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5bf9\u8868\u683c\u6570\u636e\u8fdb\u884c\u8868\u5355\u641c\u7d22\u8fc7\u8651',
            ),
            r.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4f55\u65f6\u4f7f\u7528' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement(
                'li',
                null,
                '\u9700\u8981\u4f7f\u7528\u5e26\u8fc7\u6ee4\u529f\u80fd\u7684\u8868\u683c',
              ),
              r.a.createElement(
                'li',
                null,
                '\u8fc7\u8651\u51fa\u6307\u5b9a\u6761\u4ef6\u7684\u6570\u636e\u9879',
              ),
            ),
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
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React, { useState } from 'react';\nimport { stringify } from 'qs';\nimport { TableWrapper, StatusText } from 'qbmi';\n\nconst orderStatus = [\n  {\n    value: 0,\n    label: '\u5168\u90e8',\n  },\n  {\n    value: 1,\n    label: '\u8fdb\u884c\u4e2d',\n    serviceText: '\u5df2\u521b\u5efa',\n    status: 'processing',\n  },\n\n  {\n    value: 2,\n    label: '\u8fdb\u884c\u4e2d',\n    serviceText: '\u901a\u77e5\u6536\u8d27',\n    status: 'processing',\n  },\n  {\n    value: 3,\n    label: '\u8fdb\u884c\u4e2d',\n    serviceText: '\u5df2\u6536\u8d27',\n    status: 'processing',\n  },\n  {\n    value: 4,\n    label: '\u5df2\u5b8c\u6210',\n    serviceText: '\u5df2\u5b8c\u6210',\n    status: 'success',\n  },\n  {\n    value: 5,\n    label: '\u5df2\u7ec8\u6b62',\n    serviceText: '\u5df2\u7ec8\u6b62',\n    status: 'error',\n  },\n];\n\nconst formOptions = [\n  {\n    type: 'input',\n    name: 'OrderNumber',\n    label: '\u91c7\u8d2d\u8ba2\u5355\u53f7',\n    placeholder: '\u8bf7\u8f93\u5165',\n    formSpan: {\n      span: 8,\n    },\n  },\n  {\n    type: 'select',\n    name: 'Status',\n    label: '\u72b6\u6001',\n    placeholder: '\u8bf7\u9009\u62e9',\n    options: orderStatus.filter(item => ![2, 3].includes(item.value)),\n  },\n  {\n    type: 'rangePicker',\n    name: 'createTime',\n    label: '\u521b\u5efa\u65e5\u671f',\n  },\n  {\n    type: 'input',\n    name: 'description',\n    label: '\u8ba2\u5355\u5907\u6ce8',\n  },\n];\n\nconst columns = [\n  {\n    title: '\u91c7\u8d2d\u8ba2\u5355\u53f7',\n    dataIndex: 'orderNumber',\n    width: '200px',\n  },\n  {\n    title: '\u4f9b\u5e94\u5546',\n    dataIndex: 'supplierName',\n    width: '140px',\n  },\n  {\n    title: '\u91c7\u8d2d\u5458',\n    dataIndex: 'buyer',\n    width: 120,\n  },\n  {\n    title: '\u5f02\u5e38\u60c5\u51b5',\n    dataIndex: 'abnormal',\n    width: 150,\n    render: text => {\n      // eslint-disable-next-line no-useless-escape\n      const txt = (text || '').replace(/^\\,|\\,$/, '');\n      return txt;\n    },\n  },\n  {\n    title: '\u8ba2\u5355\u72b6\u6001',\n    dataIndex: 'status',\n    width: 120,\n    render: (text = -1) => {\n      const item = orderStatus.find(items => items.value === text) || orderStatus[0];\n      return <StatusText type={item.status} label={item.label} />;\n    },\n  },\n  {\n    title: '\u521b\u5efa\u65f6\u95f4',\n    dataIndex: 'createTime',\n    width: '140px',\n  },\n  {\n    title: '\u8ba2\u5355\u5907\u6ce8',\n    dataIndex: 'description',\n    width: 280,\n  },\n];\n\nconst Index = () => {\n  const [loading, setLoading] = useState(false);\n  const getServer = params => {\n    setLoading(true);\n    return fetch(\n      `https://mock.yonyoucloud.com/mock/15420/qbmi/components/doc/wrapperTable?${stringify(\n        params,\n      )}`,\n      {\n        method: 'get',\n      },\n    ).then(response => {\n      setTimeout(setLoading, 500, false);\n      return response.json();\n    });\n  };\n\n  return (\n    <TableWrapper\n      formOptions={formOptions}\n      tableProps={{\n        columns,\n        loading,\n        tableLayout: 'fixed',\n        rowKey: 'orderId',\n      }}\n      listService={getServer}\n    />\n  );\n};\n\nexport default Index;\n",
                },
              },
              {
                path: '/_demos/table-wrapper',
                dependencies: { qs: '6.9.4', qbmi: '0.0.20' },
                files: {},
              },
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
              'api',
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
                  r.a.createElement('th', null, '\u53c2\u6570'),
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
                  r.a.createElement('td', null, 'formOptions'),
                  r.a.createElement('td', null, '\u641c\u7d22\u8868\u5355\u7684\u5b57\u6bb5\u9879'),
                  r.a.createElement('td', null, 'Array[object]'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'tableProps'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8868\u683c\u914d\u7f6e props \u53ef\u53c2\u8003',
                    r.a.createElement(
                      'a',
                      {
                        href: 'https://ant.design/components/table-cn/#header',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'antd',
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
                  r.a.createElement('td', null, 'object'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'initialValues'),
                  r.a.createElement('td', null, '\u8868\u5355\u9ed8\u8ba4\u503c'),
                  r.a.createElement('td', null, 'object'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'searchParams'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8868\u5355\u989d\u5916\u7684\u8bf7\u6c42\u53c2\u6570',
                  ),
                  r.a.createElement('td', null, 'object'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'paramsHandler'),
                  r.a.createElement('td', null, '\u8868\u5355\u989d\u5916\u53c2\u6570\u5904\u7406'),
                  r.a.createElement('td', null, 'function(params)'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'listService'),
                  r.a.createElement('td', null, '\u6570\u636e\u52a0\u8f7d\u5730\u5740'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'dataHandler'),
                  r.a.createElement('td', null, '\u54cd\u5e94\u6570\u636e\u989d\u5916\u5904\u7406'),
                  r.a.createElement('td', null, 'function(res.data)'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onFormReset'),
                  r.a.createElement('td', null, '\u8868\u5355\u91cd\u7f6e\u4e8b\u4ef6'),
                  r.a.createElement('td', null, 'function'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'handleTableChange'),
                  r.a.createElement('td', null, '\u8868\u683c\u6539\u53d8\u4e8b\u4ef6'),
                  r.a.createElement('td', null, 'function(pagination, filtersArg, sorter)'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'formValuesChange'),
                  r.a.createElement('td', null, '\u8868\u5355\u5b57\u6bb5\u6539\u53d8\u4e8b\u4ef6'),
                  r.a.createElement('td', null, 'function(changedValues, allValues)'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'hasRowSelection'),
                  r.a.createElement('td', null, '\u662f\u5426\u62e5\u6709 RowSelection'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'rowSelection'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u53c2\u6570 antd \u8868\u683c rowSelection \u914d\u7f6e',
                  ),
                  r.a.createElement('td', null, 'object'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'handleSelectRows'),
                  r.a.createElement('td', null, 'RowSelection \u9009\u4e2d\u4e8b\u4ef6'),
                  r.a.createElement('td', null, 'function(selectedRowKeys, selectedRows)'),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'h2',
              { id: 'tableprops' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#tableprops' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'tableProps',
            ),
            r.a.createElement('p', null, '\u9664 antd Table \u4ee5\u5916\u7684\u53c2\u6570'),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u53c2\u6570'),
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
                  r.a.createElement('td', null, 'mergeRowPage'),
                  r.a.createElement('td', null, '\u662f\u5426\u9700\u8981\u5408\u5e76\u884c'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'mergePageSize'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5408\u5e76\u884c\u540e\uff0c\u9875\u9762\u6761\u6570',
                  ),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '------'),
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
        s = a.n(r);
      class o extends s.a.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = this.props,
            t = e.type,
            a = e.label,
            r = e.mode;
          return 'tag' === r
            ? s.a.createElement(l['a'], { color: 'muted' === t ? 'default' : t }, a)
            : s.a.createElement(n['a'], { status: 'muted' === t ? 'default' : t, text: a || '' });
        }
      }
      (o.defaultProps = void 0), (o.defaultProps = { mode: 'badge' }), (t['a'] = o);
    },
    jazc: function(e, t, a) {},
    qSRc: function(e, t, a) {},
  },
]);
