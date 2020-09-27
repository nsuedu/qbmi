(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [35],
  {
    mFqb: function(e, t, l) {
      'use strict';
      l.r(t);
      var n = l('0Owb'),
        a = l('cDcd'),
        r = l.n(a),
        m = (l('B2uJ'), l('+su7'), l('qOys')),
        c = l.n(m),
        u = l('5Yjd'),
        d = l.n(u);
      const i = r.a.memo(function() {
        var e = l('K+nK'),
          t = e(l('cDcd')),
          n = e(l('GqZC')),
          a = function() {
            return t.default.createElement(n.default, null);
          };
        return t['default'].createElement(a);
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
            d.a,
            Object(n['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\';\n\nimport { Upload } from \'qbmi\';\n\nconst Demo = () => <Upload name="file" listType="picture-card" />;\n\nexport default Demo;\n',
                  jsx:
                    'import React from \'react\';\nimport { Upload } from \'qbmi\';\n\nconst Demo = () => <Upload name="file" listType="picture-card" />;\n\nexport default Demo;\n',
                },
              },
              { path: '/_demos/upload', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            r.a.createElement(i, null),
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
                  r.a.createElement('td', null, 'name'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u53d1\u5230\u540e\u53f0\u7684\u6587\u4ef6\u53c2\u6570\u540d',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, 'file'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'listType'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u4e0a\u4f20\u5217\u8868\u7684\u5185\u5efa\u6837\u5f0f\uff0c\u652f\u6301\u4e09\u79cd\u57fa\u672c\u6837\u5f0f text, picture \u548c picture-card',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, 'text'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'fileNumberLimit'),
                  r.a.createElement('td', null, '\u6587\u4ef6\u4e0a\u4f20\u6570\u91cf\u9650\u5236'),
                  r.a.createElement('td', null, 'number'),
                  r.a.createElement('td', null, '5'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'buttonText'),
                  r.a.createElement('td', null, '\u4e0a\u4f20\u6309\u94ae\u7684\u6587\u5b57'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '\u4e0a\u4f20'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'action'),
                  r.a.createElement('td', null, '\u4e0a\u4f20\u7684\u63a5\u53e3\u8c03\u7528 url'),
                  r.a.createElement('td', null, 'string|(file) => Promise'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'fileType'),
                  r.a.createElement(
                    'td',
                    null,
                    "\u4e0a\u4f20\u6587\u4ef6\u7c7b\u578b \u652f\u6301'jpg', 'png', 'bmp', 'pdf'\u7b49",
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'defaultFileList'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u5df2\u7ecf\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868',
                  ),
                  r.a.createElement('td', null, 'object[]'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u4e0a\u4f20\u6587\u4ef6\u6539\u53d8\u65f6\u7684\u72b6\u6001',
                  ),
                  r.a.createElement('td', null, 'Function'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'previewVisible'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u9884\u89c8\u6587\u4ef6\u7a97\u53e3\u662f\u5426\u53ef\u89c1',
                  ),
                  r.a.createElement('td', null, 'Boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'previewFile'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u6587\u4ef6\u9884\u89c8\u903b\u8f91',
                  ),
                  r.a.createElement('td', null, '(file: File | Blob) => Promise<dataURL: string>'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'previewPDFVisible'),
                  r.a.createElement(
                    'td',
                    null,
                    'PDF \u9884\u89c8\u6587\u4ef6\u7a97\u53e3\u662f\u5426\u53ef\u89c1',
                  ),
                  r.a.createElement('td', null, 'Boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'previewPDFUrl'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49 PDF \u6587\u4ef6\u9884\u89c8\u903b\u8f91',
                  ),
                  r.a.createElement('td', null, '(file: File | Blob) => Promise<dataURL: string>'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'fileList'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5df2\u7ecf\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\uff08\u53d7\u63a7\uff09\uff0c\u4f7f\u7528\u6b64\u53c2\u6570\u65f6\uff0c\u5982\u679c\u9047\u5230 onChange \u53ea\u8c03\u7528\u4e00\u6b21\u7684\u95ee\u9898',
                  ),
                  r.a.createElement('td', null, 'object[]'),
                  r.a.createElement('td', null),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'loading'),
                  r.a.createElement('td', null, '\u6587\u4ef6\u4e0a\u4f20\u662f\u5426\u5b8c\u6210'),
                  r.a.createElement('td', null, 'Boolean'),
                  r.a.createElement('td', null, 'true'),
                ),
              ),
            ),
            r.a.createElement(c.a, {
              code:
                "/*\nfile.type      \u540e\u7f00\n\ntext/plain    .txt\napplication/vnd.android.package-archive   .apk\napplication/vnd.openxmlformats-officedocument.presentationml.presentation    .pptx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet            .xlsx\napplication/pdf                                                               .pdf\n\nimage/jpeg\nimage/png\nimage/bmp\n\n\nbmp\u3001jpg\u3001png gif\n*/\n\n/*\n    fileList: [\n      // {\n      //   uid: '-1',\n      //   name: 'image.png',\n      //   status: 'done',\n      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n      // },\n      // {\n      //   uid: '-5',\n      //   name: 'image.png',\n      //   status: 'error',\n      // },\n    ]\n\n*/\n",
              lang: 'javascript',
            }),
          ),
        );
      };
    },
  },
]);
