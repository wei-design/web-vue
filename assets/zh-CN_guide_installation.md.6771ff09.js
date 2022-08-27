import{_ as s,c as n,o as a,a as e}from"./app.5e2e9b62.js";const b=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"zh-CN"},"headers":[{"level":2,"title":"npm","slug":"npm"},{"level":2,"title":"cdn","slug":"cdn"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsdelivr","slug":"jsdelivr"}],"relativePath":"zh-CN/guide/installation.md","lastUpdated":1661576963000}'),l={name:"zh-CN/guide/installation.md"},p=e(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><p>\u6700\u65B0\u7248\u672C\uFF1A</p><p><a href="https://www.npmjs.org/package/@web-design/web-vue" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@web-design/web-vue.svg?style=flat-square" alt="WeDesign version badge"></a></p><p>\u73AF\u5883\u8981\u6C42\uFF1A</p><p>node\uFF1A&gt;=16.0.0</p><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u63A8\u8350<code>pnpm</code>\u8FDB\u884C\u5B89\u88C5</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install @web-design/web-vue --save</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="cdn" tabindex="-1">cdn <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h2><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><p><a href="https://unpkg.com/@web-design/web-vue/" target="_blank" rel="noreferrer">\u8D44\u6E90\u6D4F\u89C8</a></p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//unpkg.com/@web-design/web-vue/lib/style.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//unpkg.com/@web-design/web-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="jsdelivr" tabindex="-1">jsdelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><p><a href="https://cdn.jsdelivr.net/npm/@web-design/web-vue/" target="_blank" rel="noreferrer">\u8D44\u6E90\u6D4F\u89C8</a></p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/@web-design/web-vue/lib/style.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/@web-design/web-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,15),t=[p];function r(o,c,i,d,D,F){return a(),n("div",null,t)}const y=s(l,[["render",r]]);export{b as __pageData,y as default};
