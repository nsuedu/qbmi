---
title: Modal
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
legacy: /zh-CN/state/modal
---

## Modal

<code src="../demos/Modal.jsx"  />

## API

### FormModal/InfoModal

| 成员       | 解释                                                | 说明          | 默认值 |
| ---------- | --------------------------------------------------- | ------------- | ------ |
| title      | 弹框标题                                            | string        | -      |
| visible    | 控制弹框显隐                                        | Boolean       | false  |
| size       | 弹框尺寸(sm:500,md:650,lg:750,xl:1200)              | string        | sm     |
| width      | 弹框宽度 若弹框大小都不满足需要，则可自定义弹框宽度 | string/number | -      |
| okText     | 确认按钮文案（FormModal 中的参数）                  | string        | 提交   |
| cancelText | 取消按钮文案（FormModal 中的参数）                  | string        | 取消   |
| params     | 传递的参数                                          | object[]      | -      |

其余传参及其用法，请参考 AntDesign 官方文档 https://ant.design/components/modal-cn/

More skills for writing demo: https://d.umijs.org/guide/demo-principle
