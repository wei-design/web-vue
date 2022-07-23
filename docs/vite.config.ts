import {defineConfig, loadEnv} from 'vite'
import Inspect from 'vite-plugin-inspect'
// jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig(async ({ mode }) => {
    return {
        server: {
            open: true,
            port: 5001,
            host: true,
        },
        plugins: [
            vueJsx(),
            DefineOptions(),
            UnoCSS(),
            Inspect(),
        ],
    }
})
