(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22],
  {
    OqAp: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        l = t('cDcd'),
        r = t.n(l),
        m = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        c = t.n(m);
      const u = r.a.memo(function() {
        var e = t('K+nK'),
          n = e(t('cDcd')),
          a = e(t('9iJR')),
          l = function() {
            return n.default.createElement(a.default, null);
          };
        return n['default'].createElement(l);
      });
      n['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'inputnumber' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputnumber' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'InputNumber',
            ),
            r.a.createElement(
              'p',
              null,
              'DecimalAmount \u7ec4\u4ef6\u5c31\u662f\u4e0d\u5e26\u6709\u5355\u4f4d\u7684 InputNumber \u7ec4\u4ef6\uff0cDecimalAmout \u53ef\u5355\u72ec\u4f7f\u7528\uff0c\u4f7f\u7528\u65b9\u6cd5\u4e00\u81f4',
            ),
          ),
          r.a.createElement(
            c.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React, { Component } from \'react\';\nimport { Form } from \'antd\';\nimport { DecimalInput } from \'qbmi\';\n\nconst { InputNumber, DecimalPrice, DecimalText } = DecimalInput;\n\nconst formItemLayout = {\n  labelCol: {\n    span: 6,\n  },\n  wrapperCol: {\n    span: 18,\n  },\n};\n\nconst Demo = props => {\n  return (\n    <Form {...formItemLayout}>\n      <Form.Item\n        label="InputNumber"\n        name="planOutputOther"\n        rules={[{ required: true, message: \'\u8bf7\u8f93\u5165\' }]}\n      >\n        <InputNumber style={{ width: 300 }} placeholder="\u9ed8\u8ba4" />\n      </Form.Item>\n      <Form.Item\n        label="InputNumber"\n        name="planOutput"\n        rules={[{ required: true, message: \'\u8bf7\u8f93\u5165\' }]}\n      >\n        <InputNumber\n          suffix="suffix"\n          style={{ width: 300 }}\n          placeholder="\u5e26\u6709\u5355\u4f4d\uff0c\u4e0d\u8bbe\u7f6e\u5c0f\u6570\u4f4d\u6570"\n        />\n      </Form.Item>\n      <Form.Item\n        label="InputNumber"\n        name="planOutputs"\n        rules={[{ required: true, message: \'\u8bf7\u8f93\u5165\' }]}\n      >\n        <InputNumber\n          suffix="suffix"\n          style={{ width: 300 }}\n          decimal={6}\n          placeholder="\u5e26\u6709\u5355\u4f4d\uff0c\u8bbe\u7f6e\u5c0f\u6570\u4f4d\u6570"\n        />\n      </Form.Item>\n      <Form.Item label="DecimalPrice" name="amount" rules={[{ required: true, message: \'\u8bf7\u8f93\u5165\' }]}>\n        <DecimalPrice style={{ width: 300 }} placeholder="\u7528\u4e8e\u91d1\u989d\uff0c\u6700\u5927\u9650\u5236999999" />\n      </Form.Item>\n      <Form.Item label="\u91d1\u989d\u663e\u793a">\n        <DecimalText value={5632.9} />\n        \uff08\u9ed8\u8ba4\uff09\n      </Form.Item>\n      <Form.Item label="\u91d1\u989d\u663e\u793a">\n        <DecimalText value={5632.9} special />\n        \uff08\u7279\u6b8a\u6807\u7ea2\u6837\u5f0f\uff09\n      </Form.Item>\n      <Form.Item label="\u91d1\u989d\u663e\u793a">\n        <DecimalText value={5632.9} decimal={5} />\n        \uff08\u4fdd\u7559\u5c0f\u6570\u4f4d\u6570\uff09\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default Demo;\n',
                },
              },
              {
                path: '/_demos/decimal-input',
                CSSInDependencies: ['antd/dist/antd.css'],
                dependencies: { antd: '4.6.6', qbmi: '0.0.20' },
                files: {},
              },
            ),
            r.a.createElement(u, null),
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
              'h2',
              { id: 'inputnumber-1' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#inputnumber-1' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'InputNumber',
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
                  r.a.createElement('td', null, 'suffix'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8f93\u5165\u6846\u5c3e\u90e8\u7684\u5355\u4f4d,\u4e0d\u5bf9\u5176\u8d4b\u503c\u65f6,\u9ed8\u8ba4\u4e3a\u6570\u503c\u6846,\u4e0a\u4e0b\u7bad\u5934\u6837\u5f0f.',
                  ),
                  r.a.createElement('td', null, 'String'),
                  r.a.createElement('td', null, '---'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'decimal'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5f53\u8f93\u5165\u503c\u65f6\uff0c\u8bbe\u7f6e\u5448\u73b0\u5c0f\u6570\u4f4d\u6570.',
                  ),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '---'),
                ),
              ),
            ),
            r.a.createElement(
              'h2',
              { id: 'decimalprice' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#decimalprice' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'DecimalPrice',
            ),
            r.a.createElement(
              'p',
              null,
              '\u4e0e InputNumber \u7ec4\u4ef6\u4e0d\u8bbe\u7f6e\u5355\u4f4d\u65f6\u4e00\u81f4\uff0c\u552f\u4e00\u533a\u522b\u5728\u4e8e\u8be5\u7ec4\u4ef6\u5bf9\u8f93\u5165\u6700\u5927\u503c\u505a\u4e86\u9650\u5236\uff0c\u4e3a 999999',
            ),
            r.a.createElement(
              'h2',
              { id: 'decimaltext' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#decimaltext' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'DecimalText',
            ),
            r.a.createElement('p', null, '\u91d1\u989d\u683c\u5f0f\u5316\u663e\u793a'),
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
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement('td', null, '\u663e\u793a\u6570\u5b57\u7684\u503c.'),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '---'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'decimal'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5448\u73b0\u5c0f\u6570\u4f4d\u6570.',
                  ),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '---'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'special'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5448\u73b0\u6837\u5f0f\uff0c\u8bbe\u7f6e\u540e\u5448\u73b0\u6807\u7ea2\u6837\u5f0f.',
                  ),
                  r.a.createElement('td', null, 'Boolean'),
                  r.a.createElement('td', null, '---'),
                ),
              ),
            ),
            r.a.createElement(
              'h2',
              { id: '\u5176\u4ed6\u5c5e\u6027' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5176\u4ed6\u5c5e\u6027' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5176\u4ed6\u5c5e\u6027',
            ),
            r.a.createElement(
              'p',
              null,
              '\u8be5\u7ec4\u4ef6\u652f\u6301 antd \u4e2d TreeSelect \u5c5e\u6027\uff0c\u66f4\u591a\u5c5e\u6027\u8be6\u60c5\u53c2\u8003: ',
              r.a.createElement(
                'a',
                {
                  href: 'https://ant.design/components/input-number-cn/#API',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'https://ant.design/components/input-number-cn/#API',
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
