import {defineConfig, loadEnv} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
// markdown文件处理
import { VitePluginMdTransform } from './.vitepress/plugins/vite-plugin-md-transform'

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
            VitePluginMdTransform(),
            Inspect(),
        ],
    }
})
