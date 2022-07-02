---
title: Button
lang: zh-CN
---

# Button

Commonly used button.

## Basic usage

```javascript
<WeiButton></WeiButton>  
```

## Button Attributes

| Attribute                           | Description                                                     | Type               | Accepted Values                               | Default |
| ----------------------------------- | --------------------------------------------------------------- | ------------------ |-----------------------------------------------| ------- |
| size                                | button size                                                     | string             | large / default /small                        | —       |
| type                                | button type                                                     | string             | primary / success / warning / danger / info   | —       |
| plain                               | determine whether it's a plain button                           | boolean            | —                                             | false   |
| round                               | determine whether it's a round button                           | boolean            | —                                             | false   |
| circle                              | determine whether it's a circle button                          | boolean            | —                                             | false   |
| loading                             | determine whether it's loading                                  | boolean            | —                                             | false   |
| loading-icon                        | customize loading icon component                                | string / Component | —                                             | Loading |
| disabled                            | disable the button                                              | boolean            | —                                             | false   |
| icon                                | icon component                                                  | string / Component | —                                             | —       |
| autofocus                           | same as native button's `autofocus`                             | boolean            | —                                             | false   |
| native-type                         | same as native button's `type`                                  | string             | button / submit / reset                       | button  |
| auto-insert-space                   | automatically insert a space between two chinese characters     | boolean            |                                               | —       |
