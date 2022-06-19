import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import dartSass from 'sass';
import { terser } from 'rollup-plugin-terser';

export default {
    // 主入口配置
    input: 'src/package/index.ts',
    output: [
        {
            globals: {
                // 全局依赖
                vue: 'Vue',
            },
            // 项目名称
            name: 'WeiDesign',
            // 输出文件名
            file: 'lib/wei-design.js',
            // 输出文件格式，使用 es module
            format: 'es',
            // 压缩文件大小
            plugins: [terser()],
        },
        {
            globals: {
                vue: 'Vue',
            },
            name: 'WeiDesign',
            // 输出文件格式，使用 umd
            file: 'lib/wei-design.umd.js',
            format: 'umd',
            plugins: [terser()],
        },
    ],
    plugins: [
        vue({
            include: /\.vue$/,
        }),
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            // 降为 es6 语法
            target: 'es2015',
        }),
    ],
};
