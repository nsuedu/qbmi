---
title: TableWrapper
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
  legacy: /zh-CN/state/tableWrapper
---

# TableWrapper 带搜索条件查询的表格

对表格数据进行表单搜索过虑

## 何时使用

- 需要使用带过滤功能的表格
- 过虑出指定条件的数据项

## 代码演示

<code src="../demos/TableWrapper" />

## api

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| formOptions | 搜索表单的字段项 | Array[object] | - |
| tableProps | 表格配置 props 可参考[antd](https://ant.design/components/table-cn/#header) | object | - |
| initialValues | 表单默认值 | object | - |
| searchParams | 表单额外的请求参数 | object | - |
| paramsHandler | 表单额外参数处理 | function(params) | - |
| listService | 数据加载地址 | string | - |
| dataHandler | 响应数据额外处理 | function(res.data) | - |
| onFormReset | 表单重置事件 | function | - |
| handleTableChange | 表格改变事件 | function(pagination, filtersArg, sorter) | - |
| formValuesChange | 表单字段改变事件 | function(changedValues, allValues) | - |
| hasRowSelection | 是否拥有 RowSelection | boolean | false |
| rowSelection | 参数 antd 表格 rowSelection 配置 | object | - |
| handleSelectRows | RowSelection 选中事件 | function(selectedRowKeys, selectedRows) | - |

## tableProps

除 antd Table 以外的参数

| 参数          | 说明               | 类型    | 默认值 |
| ------------- | ------------------ | ------- | ------ |
| mergeRowPage  | 是否需要合并行     | boolean | false  |
| mergePageSize | 合并行后，页面条数 | number  | ------ |
