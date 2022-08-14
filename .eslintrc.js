// 需要安装依赖:  npm i eslint-define-config
const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    /* 指定如何解析语法。*/
    parser: 'vue-eslint-parser',
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module', // Allowsfortheuseofimports
        ecmaFeatures: {
            jsx: true
        }
    },
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
    globals: {
        Nullable: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
        'plugin:prettier/recommended',
    ],
    rules: {
    },
})
