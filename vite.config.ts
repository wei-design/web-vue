/**
 * @Author: forguo
 * @Date: 2022/7/2 12:16
 * @Description: lib.config
 */
import { resolve } from 'path'
import { Alias, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md' // vue中使用md
// 提取ts文件
import dts from 'vite-plugin-dts'
import chalk from 'chalk'
import dayjs from 'dayjs'
import pkg from './package.json'

const { version: APP_VERSION, name: APP_NAME } = pkg

const banner = `/*! ${APP_NAME} v${APP_VERSION} */\n`
console.log(chalk.blue(banner))

const alias: Alias[] = [
    {
        find: '@',
        replacement: `${resolve(__dirname, './src')}`
    },
    {
        find: /^wei_design(\/(es|lib))?$/,
        replacement: `${resolve(__dirname, './packages/index.ts')}/`
    }
]

// 文档: https://vitejs.dev/config/
export default (configEnv: any) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    // 增加环境变量
    env.APP_NAME = APP_NAME
    env.APP_VERSION = APP_VERSION
    env.APP_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')
    return defineConfig({
        server: {
            open: true,
            port: 3003,
            host: true
        },
        resolve: {
            alias
        },
        define: {
            'process.env': JSON.stringify(env)
        },
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
        plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx(), Markdown(), dts()]
    })
}
