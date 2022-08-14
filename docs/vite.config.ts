import {defineConfig, loadEnv} from 'vite'
import Inspect from 'vite-plugin-inspect'
// jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import dayjs from 'dayjs';
import pkg from '../package.json';
import { resolve } from "path";
const { version: APP_VERSION } = pkg;

export default defineConfig(async (configEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    // 增加环境变量
    env.APP_VERSION = APP_VERSION
    env.APP_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')
    return {
        server: {
            open: true,
            port: 5001,
            host: true,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, '../src'),
                '@/packages': resolve(__dirname, '../packages')
            }
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
    }
})
