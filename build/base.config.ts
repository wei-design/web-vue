/**
 * @Author: forguo
 * @Date: 2022/7/2 12:16
 * @Description: base.config
 */
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';

// 文档: https://vitejs.dev/config/
export default (configEnv: any) => {
    const { mode } = configEnv;
    const env = loadEnv(mode, process.cwd());
    // 增加环境变量
    env.APP_VERSION = require('../package.json').version;
    env.APP_BUILD_TIME = require('dayjs')().format('YYYY-MM-DD HH:mm:ss');
    return defineConfig({
        server: {
            open: true,
            port: 3007,
            host: '0.0.0.0',
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                packages: resolve(__dirname, './packages'),
            },
        },
        define: {
            'process.env': JSON.stringify(env),
        },
        plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx(), Markdown()],
    });
};
