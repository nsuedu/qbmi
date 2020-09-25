---
title: Tree
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
legacy: /zh-CN/state/tree
---

## 代码演示

<code src="../demos/Tree.jsx" />

## API

| 成员            | 说明                   | 类型                      | 默认值 |
| --------------- | ---------------------- | ------------------------- | ------ |
| treeData        | 树的数据源             | object[]                  |
| onAdd           | 添加节点调用的函数     | Function                  |
| onDelete        | 删除节点调用的函数     | Function                  |
| deleteText      | 删除按钮的文案         | string                    |
| addText         | 添加按钮的文案         | string\|(file) => Promise |
| editText        | 编辑按钮的文案         | string                    |
| expandedKeys    | 默认展开的 key 值      | object[]                  |
| selectedKeys    | 默认选中的 key 值      | object[]                  |
| noEditAndDelete | 不可以编辑和删除的类型 | string                    |

其他属性请参考 https://ant.design/components/tree-select-cn/
