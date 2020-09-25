---
title: DecimalInput
nav:
  title: Components
  path: /components
group:
  title: 数据录入
  path: /data-record
legacy: /zh-CN/state/decimal-input
---

## InputNumber

DecimalAmount 组件就是不带有单位的 InputNumber 组件，DecimalAmout 可单独使用，使用方法一致

<code src="../demos/DecimalInput.jsx" />

## API

## InputNumber

| 成员    | 解释                                                     | 说明   | 默认值 |
| ------- | -------------------------------------------------------- | ------ | ------ |
| suffix  | 输入框尾部的单位,不对其赋值时,默认为数值框,上下箭头样式. | String | ---    |
| decimal | 当输入值时，设置呈现小数位数.                            | number | ---    |

## DecimalPrice

与 InputNumber 组件不设置单位时一致，唯一区别在于该组件对输入最大值做了限制，为 999999

## DecimalText

金额格式化显示

| 成员    | 解释                              | 说明    | 默认值 |
| ------- | --------------------------------- | ------- | ------ |
| value   | 显示数字的值.                     | number  | ---    |
| decimal | 设置呈现小数位数.                 | number  | ---    |
| special | 设置呈现样式，设置后呈现标红样式. | Boolean | ---    |

## 其他属性

该组件支持 antd 中 TreeSelect 属性，更多属性详情参考: https://ant.design/components/input-number-cn/#API
