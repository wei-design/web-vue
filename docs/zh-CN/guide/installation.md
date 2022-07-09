---
title: 安装
lang: zh-CN
---

# 安装

## 环境支持

### 版本

Element Plus is currently in a rapid development iteration.

[![ElementPlus version badge](https://img.shields.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Element Plus**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# Choose a package manager you like.

# NPM
$ npm install wei-design --save

# Yarn
$ yarn add wei-design

# pnpm
$ pnpm install wei-design
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npmmirror.com/).

## Import in Browser

Import Element Plus through browser HTML tags directly, and use global variable `ElementPlus`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/wei-design/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/wei-design"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/wei-design/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/wei-design"></script>
</head>
```

:::tip

We recommend using CDN to import Element Plus users to lock the version
on the link address, so as not to be affected by incompatible updates when Element Plus
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::
