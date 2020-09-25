---
title: StatusText
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /state
legacy: /zh-CN/state/status-text
---

## StatusText

<code src="../demos/StatusText.tsx"  />

## API

| 成员  | 说明                                               | 类型   | 默认值 |
| ----- | -------------------------------------------------- | ------ | ------ |
| type  | 状态类型                                           | string | -      |
| label | 状态文本                                           | string | -      |
| mode  | 模式(接受 tag 和 badge，badge 左侧小点,tag 标签框) | stirng | badge  |

## 状态类型及文本对应说明

| 类型       | 文本                               |
| ---------- | ---------------------------------- |
| success    | 已完成（正常结束）                 |
| error      | 已终止（异常结束）                 |
| muted      | 未开始、已创建（未进入流程）       |
| processing | 已开始、正常流程中                 |
| warning    | 被退回，已撤回（进行中的异常情况） |
