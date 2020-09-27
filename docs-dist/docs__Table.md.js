(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [30, 19],
  {
    '3ldH': function(e, t, a) {
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
          n = e(a('ylud')),
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
              { id: 'table' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#table' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Table',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\n\nimport { Table } from 'qbmi';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: '\u5e74\u9f84',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: '\u4f4f\u5740',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\nconst dataSource = [\n  {\n    key: '1',\n    name: '\u80e1\u5f66\u658c',\n    age: 32,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n  {\n    key: '2',\n    name: '\u80e1\u5f66\u7956',\n    age: 42,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n];\n\nconst tableProps = {\n  columns,\n  data: { list: dataSource },\n};\n\nconst Demo = () => <Table {...tableProps} />;\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/table', dependencies: { qbmi: '0.0.20' }, files: {} },
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
                  r.a.createElement('td', null, 'father'),
                  r.a.createElement(
                    'td',
                    null,
                    'Library toolkit based on rollup, docz, storybook, jest, prettier and eslint.',
                  ),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'Umi'),
                  r.a.createElement(
                    'td',
                    null,
                    'Pluggable enterprise-level react application framework.',
                  ),
                  r.a.createElement('td', null, 'number'),
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
    xf6M: function(e, t, a) {},
    ylud: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('g9YV'), a('wCAj')),
        s = (a('fOrg'), a('+KLJ')),
        o = a('LvDl');
      a('xf6M');
      class c extends n['PureComponent'] {
        constructor(e) {
          super(e),
            (this.handleRowSelectChange = (e, t) => {
              const a = this.props.onSelectRow;
              Object(o['isFunction'])(a) && a(e, t), this.setState({ selectedRowKeys: e });
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
            !Object(o['isEqual'])(e.data.list, this.props.data.list)) &&
            this.setState({ selectedRowKeys: [] });
        }
        render() {
          const e = this.state.selectedRowKeys,
            t = this.props,
            a = t.data,
            o = a.list,
            c = a.pagination,
            d = t.loading,
            i = t.columns,
            m = t.rowKey,
            u = t.hasRowSelection,
            h = t.scroll,
            p = t.title,
            E = t.rowSelection,
            g = t.alertProps,
            w = void 0 === g ? {} : g,
            b = t.size,
            y = t.locale,
            f = t.rowClassName,
            k = t.className,
            v = t.tableLayout,
            x =
              (c && {
                showSizeChanger: !0,
                showQuickJumper: !0,
                ...c,
                showTotal: () => `\u603b\u5171${c && c.total ? c.total : 0}\u6761`,
              }) ||
              !1,
            C = {
              selectedRowKeys: e,
              onChange: this.handleRowSelectChange,
              getCheckboxProps: e => ({ disabled: e.disabled }),
              ...E,
            };
          return l.a.createElement(
            'div',
            { className: 'standardTable' },
            u &&
              !C.type &&
              l.a.createElement(
                'div',
                { className: 'tableAlert' },
                l.a.createElement(s['a'], {
                  message: l.a.createElement(
                    n['Fragment'],
                    null,
                    '\u5df2\u9009\u62e9',
                    ' ',
                    l.a.createElement('a', { style: { fontWeight: 600 } }, e.length),
                    ' ',
                    '\u9879\xa0\xa0',
                    l.a.createElement('span', null, w.hasAlert ? w.alertLayout : ''),
                  ),
                  type: 'info',
                  showIcon: !0,
                }),
              ),
            l.a.createElement(r['a'], {
              size: b,
              tableLayout: v || '',
              loading: d,
              scroll: h,
              rowKey: m || 'id',
              rowSelection: u ? C : null,
              dataSource: o,
              columns: i.map(e => ((e.ellipsis = !0), e)),
              pagination: x,
              onChange: this.handleTableChange,
              title: p,
              rowClassName: f,
              locale: y,
              className: 'table-striped' + (k ? ' ' + k : ''),
            }),
          );
        }
      }
      c.defaultProps = { hasRowSelection: !1 };
      var d = c;
      const i = [
          { title: '\u59d3\u540d', dataIndex: 'name', key: 'name' },
          { title: '\u5e74\u9f84', dataIndex: 'age', key: 'age' },
          { title: '\u4f4f\u5740', dataIndex: 'address', key: 'address' },
        ],
        m = [
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
        u = { columns: i, data: { list: m } },
        h = () => l.a.createElement(d, u);
      t['default'] = h;
    },
  },
]);
