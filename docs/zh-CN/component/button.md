---
title: Button
lang: zh-CN
---

# Button 按钮

常用的操作按钮。

## 基础用法

::: demo 使用 type、size、round 和 loading 来定义按钮的样式。
button/basic
:::

## 按钮属性

| Attribute                           | Description                                                     | Type               | Accepted Values                                               | Default |
| ----------------------------------- | --------------------------------------------------------------- | ------------------ | ------------------------------------------------------------- | ------- |
| size                                | button size                                                     | string             | large / default /small                                        | —       |
| type                                | button type                                                     | string             | primary / success / warning / danger / info / <del>text</del> | —       |
| round                               | determine whether it's a round button                           | boolean            | —                                                             | false   |
| circle                              | determine whether it's a circle button                          | boolean            | —                                                             | false   |
| loading                             | determine whether it's loading                                  | boolean            | —                                                             | false   |
| loading-icon                        | customize loading icon component                                | string / Component | —                                                             | Loading |
| disabled                            | disable the button                                              | boolean            | —                                                             | false   |
