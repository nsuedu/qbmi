---
title: EditTable
nav:
  title: Components
  path: /components
group:
  title: 数据录入
  path: /data-record
legacy: /zh-CN/data-record/EditTable
---

## EditTable

<code src="../demos/EditTable.jsx"  />

## API

| 成员 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ref | 获取当前节点 | ------ | - |
| rowKey | 每一行的唯一 key. | ------ | - |
| hasDelete | 是否支持删除行的操作. | boolean | true |
| columns | 定义表头以及定义列展示的内容，具体参考https://ant.design/components/table-cn/#Column. | array | [] |
| dataSource | 表格内容数据源. | array | [] |
| dataSourceChange | 表格数据发生变化的回调函数，返回变化之后的 dataSource. | array | [] |
| pagination | 分页器，与 antd 一致，具体参考https://ant.design/components/pagination-cn/#API. | ------- | --- |
