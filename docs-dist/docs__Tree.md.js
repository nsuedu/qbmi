(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [33],
  {
    xYpl: function(e, n, a) {
      'use strict';
      a.r(n);
      var l = a('0Owb'),
        t = a('cDcd'),
        d = a.n(t),
        c = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        s = a.n(c);
      const r = d.a.memo(function() {
        var e = a('K+nK'),
          n = e(a('cDcd')),
          l = e(a('tksw')),
          t = function() {
            return n.default.createElement(l.default, null);
          };
        return n['default'].createElement(t);
      });
      n['default'] = function() {
        return d.a.createElement(
          d.a.Fragment,
          null,
          d.a.createElement(
            'div',
            { className: 'markdown' },
            d.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              d.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4ee3\u7801\u6f14\u793a' },
                d.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
          ),
          d.a.createElement(
            s.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import React, { useState } from 'react';\n\nimport { Tree, utils } from 'qbmi';\n\nconst { TreeUtil } = utils;\nconst { dataTransformToTree } = TreeUtil;\n\nconst Demo = props => {\n  const [maskVisible, setVisible] = useState(false);\n  const [params, setParams] = useState({\n    parentId: '',\n    typeName: '',\n    labels: '',\n    id: '',\n  });\n\n  const depTreeData = [\n    {\n      id: '38f63253-60fc-4c12-8070-c4d10b1caa6b',\n      parentId: null,\n      typeName: '\u8089\u7c7b',\n      labels: '',\n      isSystem: false,\n      category: 1,\n      disabled: false,\n      children: [\n        {\n          id: '6abbe51e-6523-434f-b46e-506ce38b1089',\n          parentId: '38f63253-60fc-4c12-8070-c4d10b1caa6b',\n          typeName: '\u8089\u7c7b\u51b7\u51bb\u7c7b',\n          labels: '',\n          isSystem: false,\n          category: 1,\n          disabled: false,\n          children: null,\n        },\n      ],\n    },\n    {\n      id: '50cbb1df-96c7-4dcb-9280-caf300a45c39',\n      parentId: null,\n      typeName: '111',\n      labels: '',\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: null,\n    },\n    {\n      id: '13ddc593-6ab3-400b-9818-29993381060d',\n      parentId: null,\n      typeName: '1',\n      labels: '1',\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: null,\n    },\n    {\n      id: '50558d82-cf27-45d3-98ae-86c89037a560',\n      parentId: null,\n      typeName: '112',\n      labels: '11',\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: null,\n    },\n    {\n      id: '8aecdb8c-c47b-47d2-a490-bbaaef427861',\n      parentId: null,\n      typeName: '\u81ea\u4ea7\u7c7b1',\n      labels: '\u81ea\u4ea7\u7c7b1',\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: null,\n    },\n    {\n      id: '42b70ac3-f991-4f74-99d5-a0647e1c1df4',\n      parentId: null,\n      typeName: '\u81ea\u7814\u53d1',\n      labels: '\u81ea\u7814\u53d1',\n      isSystem: false,\n      category: 1,\n      disabled: false,\n      children: [\n        {\n          id: 'c81813ed-a531-4ec4-a23d-b385b80d21fe',\n          parentId: '42b70ac3-f991-4f74-99d5-a0647e1c1df4',\n          typeName: '\u706b\u661f\u6210\u54c13',\n          labels: '',\n          isSystem: false,\n          category: 1,\n          disabled: false,\n          children: [\n            {\n              id: '451a9bdf-6434-4bae-8154-3153bf603ffc',\n              parentId: 'c81813ed-a531-4ec4-a23d-b385b80d21fe',\n              typeName: '123123',\n              labels: '',\n              isSystem: false,\n              category: 1,\n              disabled: false,\n              children: null,\n            },\n          ],\n        },\n      ],\n    },\n    {\n      id: '7195c0c6-d734-433e-821a-3dfd62fcda19',\n      parentId: null,\n      typeName: '\u81ea\u4ea7\u7c7b',\n      labels: '1111',\n      isSystem: false,\n      category: 1,\n      disabled: false,\n      children: [\n        {\n          id: '8c50d465-9143-4690-9d4f-1010239e6d9d',\n          parentId: '7195c0c6-d734-433e-821a-3dfd62fcda19',\n          typeName: '\u81ea\u4ea7\u7c7b1',\n          labels: '\u81ea\u4ea7\u7c7b1',\n          isSystem: false,\n          category: 1,\n          disabled: false,\n          children: null,\n        },\n      ],\n    },\n    {\n      id: '84db5bd4-9a90-42cb-bdf6-3693faafa81e',\n      parentId: null,\n      typeName: '\u534a\u6210\u54c1',\n      labels: '1',\n      isSystem: false,\n      category: 1,\n      disabled: false,\n      children: null,\n    },\n    {\n      id: '0729c0e9-3c9a-4bc1-8cfe-b4490d92cd46',\n      parentId: null,\n      typeName: '\u534a\u6210\u54c1',\n      labels: '\u534a\u6210\u54c1',\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: [\n        {\n          id: 'b5bbbe9b-740a-44cb-891a-6be843d0ab7d',\n          parentId: '0729c0e9-3c9a-4bc1-8cfe-b4490d92cd46',\n          typeName: '\u534a\u6210\u54c11\u53f7',\n          labels: null,\n          isSystem: false,\n          category: 1,\n          disabled: false,\n          children: null,\n        },\n      ],\n    },\n    {\n      id: '305332ee-47d5-41f4-b44f-ec02c507c78d',\n      parentId: null,\n      typeName: '\u534a\u6210\u54c1',\n      labels: null,\n      isSystem: false,\n      category: 1,\n      disabled: true,\n      children: null,\n    },\n    {\n      id: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',\n      parentId: null,\n      typeName: '\u539f\u6599',\n      labels: null,\n      isSystem: true,\n      category: 2,\n      disabled: false,\n      children: [\n        {\n          id: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n          parentId: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',\n          typeName: '\u8f85\u6599',\n          labels: null,\n          isSystem: true,\n          category: 4,\n          disabled: false,\n          children: [\n            {\n              id: '741ccbe9-51fe-4f65-acd6-d1817a311607',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u6d4b\u8bd5\u8f85\u6599',\n              labels: '1123',\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: 'c80f3fe3-2486-4479-884a-a2d7dc1c9abf',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u8f85\u65995\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '36f6ebd6-dda8-45fc-9264-eeafb3f05451',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u706b\u661f\u8f85\u65993',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: 'f550dac1-b0d6-43eb-a223-f297532087db',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u706b\u661f\u8f85\u65992',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: 'c26ee37f-842b-43f2-81e1-a87d41e2969c',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u706b\u661f\u8f85\u65991',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '3423bb25-6ebf-4622-8441-009cf59c9c14',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u8f85\u65994\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: 'e27ef065-bdcf-4920-abcc-ee706b3bdbcd',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u8f85\u65993\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '75994a2e-86f1-45f6-b155-9ac4984fac9a',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u8f85\u65992\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '125d6ab6-4cd3-4c0e-acb4-4a74b0f827ef',\n              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',\n              typeName: '\u8f85\u65991\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 4,\n              disabled: false,\n              children: null,\n            },\n          ],\n        },\n        {\n          id: '556aab22-0340-4973-960d-2e50ef3f4b89',\n          parentId: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',\n          typeName: '\u4e3b\u6599',\n          labels: null,\n          isSystem: true,\n          category: 3,\n          disabled: false,\n          children: [\n            {\n              id: '51aa533f-8e52-46a5-b8f2-7ffce4620d4c',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u706b\u661f\u4e3b\u65994',\n              labels: '',\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '631a7d41-8e9d-4586-832f-2fe694237147',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u706b\u661f\u4e3b\u65993',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '974486ed-083c-4d5d-b02e-4d1d46312af9',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u706b\u661f\u4e3b\u65992',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '41e70b04-11d3-4a50-970b-0b84378e3515',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u706b\u661f\u4e3b\u65991',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '0cb721d8-f187-4f67-bf60-46027d72cee5',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u4e3b\u65994\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '0e83a8a7-9e89-427d-8930-d064423b3b47',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u4e3b\u65993\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '3f8914e6-69df-4737-8255-ccb44f21df87',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u4e3b\u65992\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n            {\n              id: '383e4495-b141-4395-81ea-86e81b6e4a18',\n              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',\n              typeName: '\u4e3b\u65991\u53f7',\n              labels: null,\n              isSystem: false,\n              category: 3,\n              disabled: false,\n              children: null,\n            },\n          ],\n        },\n      ],\n    },\n  ];\n\n  const paramsData = {\n    originData: depTreeData,\n    hasAll: false,\n    title: 'typeName',\n    value: 'id',\n  };\n\n  const datas = dataTransformToTree(paramsData);\n\n  // \u91cd\u5199\u7c7b\u578b\u6811\uff08\u6dfb\u52a0\u5168\u90e8\uff09\n  const treeReWrite = [\n    {\n      id: '',\n      title: '\u5168\u90e8',\n      level: 0,\n      mark: false,\n      key: '0',\n      value: '0',\n      children: datas,\n    },\n  ];\n\n  // \u6811\u7f16\u8f91\u4e8b\u4ef6\n  const onEdit = obj => {\n    const voidparams = {\n      parentId: obj.origin.parentId,\n      typeName: obj.origin.typeName,\n      labels: obj.origin.labels,\n      id: obj.origin.id,\n    };\n    setParams(voidparams);\n    setVisible(true);\n  };\n\n  // \u6811\u9009\u4e2d\u4e8b\u4ef6\n  const onSelect = obj => {\n    const value = obj[0] && obj[0] === 0 ? '' : obj[0];\n    // typeChange(value);\n  };\n\n  // \u70b9\u51fb \u6811\u7684 \u6dfb\u52a0\u6309\u94ae\n  const onTreeAdd = obj => {\n    const voidparams = {\n      parentId: obj.value,\n      typeName: '',\n      labels: '',\n      id: '',\n    };\n    setParams(voidparams);\n    setVisible(true);\n  };\n\n  // \u70b9\u51fb \u6811\u7684 \u5220\u9664\u6309\u94ae\n  const onDelete = obj => {\n    const postData = {\n      id: obj.origin.id,\n    };\n  };\n\n  const treeProps = {\n    treeData: datas,\n    onSelect,\n    onAdd: onTreeAdd,\n    onDelete,\n    onEdit,\n    addText: '\u65b0\u5efa',\n    editText: '\u7f16\u8f91',\n    deleteText: '\u5220\u9664',\n    expandedKeys: ['0'],\n    selectedKeys: ['0'],\n    noEditAndDelete: 'isSystem',\n  };\n\n  return (\n    <div style={{ width: 400 }}>\n      <Tree\n        treeData={[\n          {\n            id: '',\n            title: '\u5168\u90e8',\n            level: 0,\n            mark: false,\n            key: '0',\n            value: '0',\n            children: datas,\n          },\n        ]}\n        editText\n        addText\n      />\n    </div>\n  );\n};\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/tree', dependencies: { qbmi: '0.0.20' }, files: {} },
            ),
            d.a.createElement(r, null),
          ),
          d.a.createElement(
            'div',
            { className: 'markdown' },
            d.a.createElement(
              'h2',
              { id: 'api' },
              d.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                d.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            d.a.createElement(
              'table',
              null,
              d.a.createElement(
                'thead',
                null,
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('th', null, '\u6210\u5458'),
                  d.a.createElement('th', null, '\u8bf4\u660e'),
                  d.a.createElement('th', null, '\u7c7b\u578b'),
                  d.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              d.a.createElement(
                'tbody',
                null,
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'treeData'),
                  d.a.createElement('td', null, '\u6811\u7684\u6570\u636e\u6e90'),
                  d.a.createElement('td', null, 'object[]'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'onAdd'),
                  d.a.createElement(
                    'td',
                    null,
                    '\u6dfb\u52a0\u8282\u70b9\u8c03\u7528\u7684\u51fd\u6570',
                  ),
                  d.a.createElement('td', null, 'Function'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'onDelete'),
                  d.a.createElement(
                    'td',
                    null,
                    '\u5220\u9664\u8282\u70b9\u8c03\u7528\u7684\u51fd\u6570',
                  ),
                  d.a.createElement('td', null, 'Function'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'deleteText'),
                  d.a.createElement('td', null, '\u5220\u9664\u6309\u94ae\u7684\u6587\u6848'),
                  d.a.createElement('td', null, 'string'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'addText'),
                  d.a.createElement('td', null, '\u6dfb\u52a0\u6309\u94ae\u7684\u6587\u6848'),
                  d.a.createElement('td', null, 'string|(file) => Promise'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'editText'),
                  d.a.createElement('td', null, '\u7f16\u8f91\u6309\u94ae\u7684\u6587\u6848'),
                  d.a.createElement('td', null, 'string'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'expandedKeys'),
                  d.a.createElement('td', null, '\u9ed8\u8ba4\u5c55\u5f00\u7684 key \u503c'),
                  d.a.createElement('td', null, 'object[]'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'selectedKeys'),
                  d.a.createElement('td', null, '\u9ed8\u8ba4\u9009\u4e2d\u7684 key \u503c'),
                  d.a.createElement('td', null, 'object[]'),
                  d.a.createElement('td', null),
                ),
                d.a.createElement(
                  'tr',
                  null,
                  d.a.createElement('td', null, 'noEditAndDelete'),
                  d.a.createElement(
                    'td',
                    null,
                    '\u4e0d\u53ef\u4ee5\u7f16\u8f91\u548c\u5220\u9664\u7684\u7c7b\u578b',
                  ),
                  d.a.createElement('td', null, 'string'),
                  d.a.createElement('td', null),
                ),
              ),
            ),
            d.a.createElement(
              'p',
              null,
              '\u5176\u4ed6\u5c5e\u6027\u8bf7\u53c2\u8003 ',
              d.a.createElement(
                'a',
                {
                  href: 'https://ant.design/components/tree-select-cn/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'https://ant.design/components/tree-select-cn/',
                d.a.createElement(
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
                  d.a.createElement('path', {
                    fill: 'currentColor',
                    d:
                      'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                  }),
                  d.a.createElement('polygon', {
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
