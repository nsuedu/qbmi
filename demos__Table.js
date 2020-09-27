(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
  {
    xf6M: function(e, t, a) {},
    ylud: function(e, t, a) {
      'use strict';
      a.r(t);
      var s = a('cDcd'),
        l = a.n(s),
        n = (a('g9YV'), a('wCAj')),
        o = (a('fOrg'), a('+KLJ')),
        c = a('LvDl');
      a('xf6M');
      class i extends s['PureComponent'] {
        constructor(e) {
          super(e),
            (this.handleRowSelectChange = (e, t) => {
              const a = this.props.onSelectRow;
              Object(c['isFunction'])(a) && a(e, t), this.setState({ selectedRowKeys: e });
            }),
            (this.handleTableChange = (e, t, a) => {
              const s = this.props.onChange;
              s(e, t, a);
            }),
            (this.cleanSelectedKeys = () => {
              this.handleRowSelectChange([], []);
            }),
            (this.state = { selectedRowKeys: [] });
        }
        componentWillReceiveProps(e) {
          ((e.selectedRows && 0 === e.selectedRows.length) ||
            !Object(c['isEqual'])(e.data.list, this.props.data.list)) &&
            this.setState({ selectedRowKeys: [] });
        }
        render() {
          const e = this.state.selectedRowKeys,
            t = this.props,
            a = t.data,
            c = a.list,
            i = a.pagination,
            d = t.loading,
            r = t.columns,
            h = t.rowKey,
            w = t.hasRowSelection,
            p = t.scroll,
            m = t.title,
            g = t.rowSelection,
            u = t.alertProps,
            y = void 0 === u ? {} : u,
            b = t.size,
            C = t.locale,
            R = t.rowClassName,
            S = t.className,
            f = t.tableLayout,
            k =
              (i && {
                showSizeChanger: !0,
                showQuickJumper: !0,
                ...i,
                showTotal: () => `\u603b\u5171${i && i.total ? i.total : 0}\u6761`,
              }) ||
              !1,
            E = {
              selectedRowKeys: e,
              onChange: this.handleRowSelectChange,
              getCheckboxProps: e => ({ disabled: e.disabled }),
              ...g,
            };
          return l.a.createElement(
            'div',
            { className: 'standardTable' },
            w &&
              !E.type &&
              l.a.createElement(
                'div',
                { className: 'tableAlert' },
                l.a.createElement(o['a'], {
                  message: l.a.createElement(
                    s['Fragment'],
                    null,
                    '\u5df2\u9009\u62e9',
                    ' ',
                    l.a.createElement('a', { style: { fontWeight: 600 } }, e.length),
                    ' ',
                    '\u9879\xa0\xa0',
                    l.a.createElement('span', null, y.hasAlert ? y.alertLayout : ''),
                  ),
                  type: 'info',
                  showIcon: !0,
                }),
              ),
            l.a.createElement(n['a'], {
              size: b,
              tableLayout: f || '',
              loading: d,
              scroll: p,
              rowKey: h || 'id',
              rowSelection: w ? E : null,
              dataSource: c,
              columns: r.map(e => ((e.ellipsis = !0), e)),
              pagination: k,
              onChange: this.handleTableChange,
              title: m,
              rowClassName: R,
              locale: C,
              className: 'table-striped' + (S ? ' ' + S : ''),
            }),
          );
        }
      }
      i.defaultProps = { hasRowSelection: !1 };
      var d = i;
      const r = [
          { title: '\u59d3\u540d', dataIndex: 'name', key: 'name' },
          { title: '\u5e74\u9f84', dataIndex: 'age', key: 'age' },
          { title: '\u4f4f\u5740', dataIndex: 'address', key: 'address' },
        ],
        h = [
          {
            key: '1',
            name: '\u80e1\u5f66\u658c',
            age: 32,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
          {
            key: '2',
            name: '\u80e1\u5f66\u7956',
            age: 42,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
        ],
        w = { columns: r, data: { list: h } },
        p = () => l.a.createElement(d, w);
      t['default'] = p;
    },
  },
]);
