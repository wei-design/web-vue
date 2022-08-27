import { resolve } from 'path'
import { Alias, defineConfig, loadEnv } from "vite";
import Inspect from 'vite-plugin-inspect'
// jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import dayjs from 'dayjs';
import pkg from '../package.json';
import chalk from "chalk";
const { name: DOC_NAME, version: DOC_VERSION } = pkg;

const alias: Alias[] = [
    {
        find: '@',
        replacement: `${resolve(__dirname, './.vitepress/vitepress')}/`,
    },
    {
        find: /^wei_design(\/(es|lib))?$/,
        replacement: `${resolve(__dirname, '../packages/index.ts')}/`,
    },
]

const banner = `/*! ${DOC_NAME} v${DOC_VERSION} */\n`
console.log(chalk.blue(banner))

export default defineConfig(async (configEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    // 增加环境变量
    env.DOC_NAME = DOC_NAME
    env.DOC_VERSION = DOC_VERSION
    env.DOC_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')
    return {
        server: {
            open: false,
            port: 5001,
            host: true,
        },
        resolve: {
            alias,
        },
        define: {
            'process.env': JSON.stringify(env)
        },
        plugins: [
            vueJsx(),
            DefineOptions(),
            UnoCSS(),
            Inspect(),
        ],
        // Rollup failed to resolve import "vue" 的解决
        // build: {
        //     rollupOptions: {
        //         external: [
        //             "vue"
        //         ]
        //     }
        // }
    }
})
