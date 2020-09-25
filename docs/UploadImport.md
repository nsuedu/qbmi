---
title: UploadImport
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
  legacy: /zh-CN/state/uploadImport
---

# uploadImport 上传导入文件数据

对 .xlsx 、xls 表格数据进行上传导入

## 何时使用

上传带模版内容的表格文件

## 代码演示

<code src="../demos/UploadImport" />

## api

| 参数           | 说明     | 类型   | 默认值 |
| -------------- | -------- | ------ | ------ |
| uploadParams   | 上传参数 | object | ---    |
| downloadParams | 下载参数 | object | ---    |

##### uploadParams

| 参数           | 说明                         | 类型               | 默认值 |
| -------------- | ---------------------------- | ------------------ | ------ |
| confirmTitle   | 确认弹窗标题                 | string             | -      |
| uploadUrl      | 上传 server                  | string             | -      |
| uploadOption   | 上传接口传递的参数           | object             | -      |
| exportErrorUrl | 错误导出接口地址             | string             | -      |
| confirmService | 确认导入 server              | function           | -      |
| callback       | 导入回调默认传递后端返回结果 | function(response) | -      |

##### downloadParams

| 参数        | 说明         | 类型   | 默认值 |
| ----------- | ------------ | ------ | ------ |
| downloadUrl | 下载地址     | string | -      |
| name        | 下载模板名称 | string | -      |
