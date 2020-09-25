---
title: TreeSelect
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
legacy: /zh-CN/state/treeSelect
---

## 代码演示

<code src="../demos/TreeSelect.jsx" />

## API

| 成员 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| transformOptions | 转换数据格式{ hasAll : Boolean, title : String, value : String, onlyLastleafNoDisabled : Boolean } hasAll 是否具有全选选项，title 为展示文本（类似 label），onlyLastleafNoDisabled 是否只能选择叶子节点. | Object | - |
| dataServer | 请求下拉数据的函数，函数返回的是 promise 对象，如 POST，GET 请求. | Function | - |
| 其他属性 | 该组件支持 antd 中 TreeSelect 属性，更多属性详情参考: https://ant.design/components/tree-select-cn/#API |

More skills for writing demo: https://d.umijs.org/guide/demo-principle
