import { resolve } from 'path'
import { Alias, defineConfig, loadEnv } from "vite";
import Inspect from 'vite-plugin-inspect'
// jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import dayjs from 'dayjs';
import pkg, { name as title, version as APP_VERSION } from "../package.json";
import chalk from "chalk";
import VitePluginMetaEnv from "vite-plugin-meta-env";
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

export default defineConfig( () => {
    // 增加环境变量
    const metaEnv = {
        DOC_VERSION,
        DOC_NAME,
        DOC_BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }

    return {
        server: {
            open: false,
            port: 5001,
            host: true,
        },
        resolve: {
            alias,
        },
        plugins: [
            vueJsx(),
            DefineOptions(),
            UnoCSS(),
            Inspect(),
            // 环境变量
            VitePluginMetaEnv(metaEnv, 'import.meta.env'),
            VitePluginMetaEnv(metaEnv, 'process.env')
        ],
    }
})
