/**
 * @Author: wei
 * @Date: 2022/7/9 10:22
 * @Description: 基础配置
 */
import { resolve } from "path"

// 项目目录
export const projRoot = resolve(__dirname, '..', '..', '..')

// 项目名称
export const docsDirName = 'docs'

// 文档库目录
export const docRoot = resolve(projRoot, docsDirName)

// vitepress配置目录
export const vpRoot = resolve(docRoot, '.vitepress')

// 仓库分支
export const REPO_BRANCH = 'master';

// 仓库地址
export const REPO_PATH = 'wei-design/web-vue';
