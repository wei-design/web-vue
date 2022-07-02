import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { Alias } from 'vite'

const alias: Alias[] = [
    {
        find: '~/',
        replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
    },
]

export default defineConfig(async ({ mode }) => {
    return {
        server: {
            open: true,
            port: 5001,
            host: '0.0.0.0'
        },
        // resolve: {
        //     alias,
        // },
        plugins: [
            vueJsx(),
        ],
    }
})
