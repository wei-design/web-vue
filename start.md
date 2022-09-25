话不多说，先看成品👇
# @wei_design/web-vue
[A Vue.js 3 UI library](https://wei-design.github.io/web-vue/)

![](https://img.shields.io/badge/%E6%96%87%E6%A1%A3%E5%BA%93-vitepress-brightgreen.svg#crop=0&crop=0&crop=1&crop=1&id=tXEY6&originHeight=20&originWidth=102&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/npm/v/@wei_design/web-vue.svg#crop=0&crop=0&crop=1&crop=1&id=b1XRO&originHeight=20&originWidth=80&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/github/stars/wei-design/web-vue#crop=0&crop=0&crop=1&crop=1&id=o8sRG&originHeight=20&originWidth=54&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
## 技术栈
**关于技术选型**
2022年了，相信对于`vite`、`vue3`听得不能再多了，对于他们的剖析也多的不能再多了，
如果你还没用上这些，何不造个组件库，一起卷起来...

---

### vue
[https://cn.vuejs.org/](https://cn.vuejs.org/)
这里使用[vue3](https://cn.vuejs.org/)去搭建，其实就是多了一些api，换了写法，选项式api和组合式api的切换了，也可以更丝滑的使用ts
~~要使用vue2的写法也不是不可以，但不推荐~~

```json
"vue": "^3.2.*"
```
### vite
[https://cn.vitejs.dev/](https://cn.vitejs.dev/)
原生`esm`打包工具，没用过的刚好可以练练手
```json
 "vite": "^3.0.*"
```
### typescript
vue3用ts重写了，性能和体积都更优秀了，2202年了，ts卷起来
```json
"typescript": "^4.*.*"
```
### vitepress
```json
"vitepress": "^1.0.0-alpha.*"
```
当然，组件库必须得有一个文档库了，这里使用`vitepress1.0.0-alpha.*`，虽然还是alpha，但看到UI相信你也会用上他的
`vite`官网也更新了`vitepress1.0.0-alpha.*`

![vitejs-dev-1662039236347.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662039268912-a3e54cd7-6b95-4253-9e34-ff4387ebcd8e.png#clientId=u3b269c12-41b4-4&crop=0.1167&crop=0&crop=0.8795&crop=1&from=paste&height=384&id=u1a486b55&name=vitejs-dev-1662039236347.png&originHeight=1284&originWidth=2561&originalType=binary&ratio=1&rotation=0&showTitle=false&size=430993&status=done&style=none&taskId=udc961700-d09a-4f9f-b242-05fbff150ae&title=&width=766)
## 项目搭建
Node Version：**>=16.0.0**
可以选择通过`vite`提供模板创建，也可以使用`vue-cli`来创建
当然，伟大的项目都是从`git init`开始的
### 1、vite模板创建
[https://vitejs.dev/guide/#scaffolding-your-first-vite-project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- npm

```bash
npm init vite@latest
```

- yarn

```bash
yarn create vite
```

![doc-vite-vue-ts-init.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/1088766/1661995215679-3c52c414-87f6-431f-90ee-4329c961d87a.jpeg#clientId=uaef417d0-fb9b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=105&id=ua8e282c0&name=doc-vite-vue-ts-init.jpg&originHeight=209&originWidth=1154&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24756&status=done&style=none&taskId=ua77689d9-3640-4232-802d-2751e706325&title=&width=577)
选择`Vue`并选择使用`TypeScript`

也可以直接指定对应的模板来初始化
```bash
yarn create vite vite-app-vue --template vue-tsc
```

### 2、vue cli创建
[https://cn.vuejs.org/guide/quick-start.html#with-build-tools](https://cn.vuejs.org/guide/quick-start.html#with-build-tools)
```bash
npm init vue@latest
```

使用官方`vue cli`可以提供给你对于`TypeScript`、`ESLint`和`Vitest`之类的可选支持
```shell
Vue.js - The Progressive JavaScript Framework

✔ Project name: … web-vue
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /Users/forguo/work/wei-design/web-vue...

Done. Now run:

cd web-vue
npm install
npm run lint
npm run dev
```
如果为了省事，使用`vue-cli`即可，就不用后面再去配置`ESLint`、`Prettier`
[eslint + prettier](https://juejin.cn/post/7011871773687808031) 配置

---

使用vue-cli搭建之后，此时的文件夹目录是这样的
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662040696960-daa0d4a0-c3f4-4e53-a85d-c5cf6fe18467.png#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=554&id=u1e584cab&name=image.png&originHeight=667&originWidth=824&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30055&status=done&style=none&taskId=u729ec756-6805-4703-9d33-7abafa13223&title=&width=684.7142944335938)
## 组件库搭建
### 关于组件库引用
首先，来说说组件库的引用，众猿周知
使用npm包有两种方式，还有`cdn`引入（后面会说怎么使用免费cdn）
#### 1、全量引用
在`main.js`中
```javascript
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@wei_design/web-vue';

const app = createApp(App);
// 全局安装
app.use(WeDesign).mount('#app');
```

组件当中
```vue
<WeButton :loading="true">按钮组件</WeButton>
```

#### 2、按需引入
`main.js`中
```javascript
import { createApp } from 'vue';
import App from './App.vue';
// 按需引入
import { Button } from '@wei_design/web-vue';

const app = createApp(App);

app.use(Button).mount('#app');
```

组件当中
```vue
<WeButton :loading="true">按钮组件</WeButton>
```
要做一个组件库，就得提供这两种引入方式

### 开始第一个组件
#### 1、组件开发
需要先来添加下sass编译器
```bash
pnpm install sass
```
添加`packages/components`文件夹，或`mkdir packages/components`，这里用来存放组件库的源码
添加`button`文件夹，也就是第一个组件`button`

组件文件夹可以这样来组织
```
├── src                         	 # 组件源码
│   ├── index.scss                 # 样式
│   ├── index.vue                  # 组件
│── index.ts                       # 组件库导出
```

`index.scss`中添加样式
```css
@import "../../../theme/color.variables";

button {
  outline: none;
}
.we-button {
  padding: 8px 12px;
  overflow: hidden;
  border-radius: 6px;
  border: 0;
  text-align: center;
  display: inline-block;
  position: relative;
  outline: none;
  font-weight: 400;
  -webkit-appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.1s linear;
  box-sizing: border-box;
}

.we-button-type-default {
  background: $primaryColor;
  color: $white;
}
.we-button-disabled {
  background-color: #f7f7fa;
  cursor: not-allowed;
  color: $black;
  &:focus,
  &:hover {
    background-color: #f7f7fa;
    outline: none;
  }
}

```

`index.vue`中添加`button`组件代码
`vue3`及`ts`可以提前来浅学一下
```vue
<template>
  <button :class="[classString]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import './index.scss'

  const Props = {
    type: {
      type: String as PropType<string>, // 转为ts类型string
      default: 'default'
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
  }

  export default defineComponent({
    name: 'WeButton',
    props: Props,
    setup(props) {
      const classString = [
        'we-button',
        `we-button-type-${props.type}`,
        props.disabled ? 'we-button-disabled' : ''
      ]
      return {
        classString
      }
    }
  })
</script>
```

添加`index.ts`
[组件注册](https://cn.vuejs.org/guide/components/registration.html)
**单个组件的使用，也有局部注册和全局注册**

局部注册通过`components`来完成
全局注册就得通过`App.component(Button.name, Button)`
当然，这样页比较麻烦，可以直接提供`install`方法，使用的时候通过`use`方法来完成注册
```typescript
import { App } from 'vue'

import Button from './src/index.vue'
Button.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Button.name, Button)
  return app
}

export default Button

```

#### 2、组件库导出
添加`component.ts`，导出所有的组件
```typescript
/**
 * 导出所有组件
 */
import Button from './components/button'

export default [Button]

export { Button }

```
添加`index.ts`，提供组件库全量注册引入及单个组件注册引入
```typescript
import { App } from 'vue'
import components from './component'
// 所有组件
export * from './component'

// 完整引入组件
const install = function (app: App) {
  components.forEach(component => {
    app.use(component as unknown as { install: () => any })
  })
}

export default {
  install
}

```

也可以添加一些公共的工具及插件到`packages`文件夹下
最终的`packages`是这样的
```
├── components/*                   # 组件源码
│── theme                      		 # 样式及主题文件
│── utils                      		 # 工具及插件
│── component.ts                   # 所有的组件都在这里来管理
│── index.ts                       # 导出单个组件或者整个组件库
```
#### 3、调试
在`src/main.js`中引入组件库来测试组件的效果
```typescript
import { createApp } from 'vue'
import App from './App.vue'
// 完整引入组件库
import WeDesign from '../packages/index' // 可以配置alias

const app = createApp(App)

app.use(WeDesign).mount('#app')

```

`app.vue`当中使用
```vue
<template>
  <div class="wei-app">
    <h1>wei-design</h1>
    <hr>
      <div>
        <we-button>按钮组件</we-button>
        <we-button style="margin-left: 12px" disabled>按钮组件</we-button>
      </div>
    </div>
</template>
```

run一下，看下效果，组件库的雏形就好了![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662043033757-e0f72849-5567-4760-881a-ef8c1011f576.png#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=182&id=u1e09fe51&name=image.png&originHeight=219&originWidth=1115&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7852&status=done&style=none&taskId=ub94d75c6-96e9-4b48-816e-efe4042997d&title=&width=926)

---

`packages`最终是这样的
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662132025412-9faae7e1-d9dd-4216-aa7b-c5c80db8eb69.png#clientId=ud94b0340-e4a2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=486&id=uade4b71a&name=image.png&originHeight=972&originWidth=968&originalType=binary&ratio=1&rotation=0&showTitle=false&size=72693&status=done&style=none&taskId=u9e56a8ca-ce9a-486e-b5a3-f239ae18688&title=&width=484)
## 规范化
可以提前配置好，开发体验会更好，就不具体讲了
### Git提交规范

- [commit规范](https://juejin.cn/post/7138790324494827533)
### 代码规范

- [eslint + prettier](https://juejin.cn/post/7011871773687808031)

## 组件库发布
组件库开发好了，就得发布`npm`，别人就可以来安装使用了
[创建并发布一个npm包](https://juejin.cn/post/6987695534504935438)
### 1、打包配置
[vite库模式配置](https://cn.vitejs.dev/guide/build.html#library-mode)
编辑`vite.config.ts`
```typescript
// [vite库模式配置](https://cn.vitejs.dev/guide/build.html#library-mode)
build: {
  outDir: 'lib',
    lib: {
    entry: resolve(__dirname, './packages/index.ts'),
      name: 'WebVue',
      fileName: 'web-vue'
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue'],
      output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue'
      }
    }
  }
},
```
配置好之后，执行`npm run build`完成打包
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662046705379-7923f77b-fd43-4f42-b39e-2eda55224b07.png#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=164&id=tYi2a&name=image.png&originHeight=184&originWidth=483&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7295&status=done&style=none&taskId=ue23bff85-2458-4ff8-81e3-005ad93b743&title=&width=431.24999816396405)

### 2、package配置
主要需要修改以下几点
[package.json中的browser，module，main解析](https://juejin.cn/post/6844903862977953806)
```json
{
    "name": "@wei_design/web-vue", // 包名，可以直接是包名，也可以@wei_design[组织]/web-vue[包名]
    "private": false, // 是否私有包，发布公共的需要设置false
    "version": "1.0.0", // 版本，每次发布都需要修改
    "author": "wforguo@qq.com",
    "description": "Wei Design - A Vue.js 3 UI library, @wei_design/web-vue", // 包的简述
    "keywords": [
        "@wei_design/web-vue" // 关键词
    ],
    "homepage": "https://wei-design.github.io/web-vue/",
    "repository": {
        "type": "git",
        "url": "https://github.com/wei-design/web-vue.git"
    },
    // 主要上传哪些文件或者文件夹到npm
    "files": [
        "lib/*",
        "packages/*",
        "Readme.md",
        "package.json"
    ],
    // 入口文件【注意文件后缀】
    "main": "./lib/web-vue.umd.js",
    "module": "./lib/web-vue.mjs",
    "exports": {
        ".": {
            "import": "./lib/web-vue.mjs",
            "require": "./lib/web-vue.umd.js"
        },
        // 这里css页需要导出，否则导入css会报错
        "./lib/style.css": "./lib/style.css"
    },
    "engines": {
        "node": ">=16.0.0"
    }
}

```

### 3、npm发布
[如何发布自己的 npm 包](https://juejin.cn/post/7039140144250617887)
首先去注册一个npm账号
在电脑terminal中登录npm，可以使用`npm whoami`先来查看`npm`登录状态
```javascript
npm login 
```

- 私有发布

npm publish 命令执行，默认是进行私有发布
scoped的包私有发布时需要收费

- 公共发布
```shell
npm publish --access public
```
发布成功之后，邮箱也会收到提醒

好了，到这里，你的组件库就已经成功上线了
接下来就是去使用看看有没有什么问题
```bash
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@wei_design/web-vue';

const app = createApp(App);
// 全局安装
app.use(WeDesign).mount('#app');
```

## 使用CDN
**Free CDN for Open Source**
两个都是开源免费的CDN，只要你发布了npm，替换下面包名为就可以去使用了
### 1、unpkg
[资源浏览](https://unpkg.com/@wei_design/web-vue/) [https://unpkg.com/@wei_design/web-vue/](https://unpkg.com/@wei_design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//unpkg.com/@wei_design/web-vue/lib/style.css"
/>
<script src="//unpkg.com/@wei_design/web-vue"></script>
```

### 2、jsdelivr
[资源浏览](https://cdn.jsdelivr.net/npm/@wei_design/web-vue/) [https://cdn.jsdelivr.net/npm/@wei_design/web-vue/](https://cdn.jsdelivr.net/npm/@wei_design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@wei_design/web-vue/lib/style.css"
/>
<script src="//cdn.jsdelivr.net/npm/@wei_design/web-vue"></script>
```

## 问题及解决
列举了一些自己遇到的问题，希望不会帮到你
如果有遇到问题，不知道怎么解决，可以到github上[@wei_design/web-vue](https://github.com/wei-design/web-vue)对比代码看下是否哪里有不对的地方

- 【组件库发布】npm publish 时提示需要升级TLS 1.2的解决方案

看看registry是否是https的，否则需要切换到https
```shell
npm config set registry https://registry.npmjs.org
```

- 【组件库npm使用】副作用导致打包后引入npm中的css报错

[sideEffects](https://juejin.cn/post/7096307096836112398)

- 【文档库】运行报错报错：TypeError: Invalid value used as weak map key

**md中有无法解析的标签导致**

- 【组件库npm使用】引入`lib/style.css`导致`ModuleNotFound`错误

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662047072550-bab12d22-4f10-464d-8600-d86e8cf26b70.png#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=115&id=ube944a3c&name=image.png&originHeight=219&originWidth=1456&originalType=binary&ratio=1&rotation=0&showTitle=false&size=93392&status=done&style=none&taskId=u5d447d50-e0ef-4204-91b4-c252ac5c16d&title=&width=766)
修改`exports`导出条件语法，新增`./lib/style.css`
```json
"exports": {
    ".": {
        "import": "./lib/web-vue.es.js",
        "require": "./lib/web-vue.umd.js"
    },
    "./lib/style.css": "./lib/style.css"
}
```

- 【文档库】vitepress打包报错

`To load an ES module, set "type": "module" in the package.json or use the .mjs extension.`
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1088766/1662047185520-b9993fe5-7461-4d57-9657-1124dc085631.png#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=446&id=u96df0e19&name=image.png&originHeight=623&originWidth=1071&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94993&status=done&style=none&taskId=u31e850e7-5ec0-47c9-a474-c4f4697ec0a&title=&width=766)

解决办法，修改`vite.config.ts`中lib配置
```javascript
build {
    lib: {
          entry: resolve(__dirname, './packages/index.ts'),
          name: 'WebVue',
          fileName: 'web-vue'
    },
}
```

修改package.json
```json
"main": "./lib/web-vue.umd.js",
"module": "./lib/web-vue.mjs",
"exports": {
    ".": {
        "import": "./lib/web-vue.mjs",
        "require": "./lib/web-vue.umd.js"
    },
    "./lib/style.css": "./lib/style.css"
},
```

## 文档库搭建
![04F5F5DD.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/1088766/1662047547308-a3e841b5-4052-45be-a6c3-ef000d40e43b.jpeg#clientId=u3b269c12-41b4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=58&id=fp05H&name=04F5F5DD.jpg&originHeight=240&originWidth=240&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12932&status=done&style=none&taskId=uabd0645c-ee8b-4028-8804-9a54e7eb440&title=&width=58.28125)
正在努力加载中....

---

都到这了，点个赞再走吧
[GitHub](https://github.com/wei-design/web-vue)奉上...
