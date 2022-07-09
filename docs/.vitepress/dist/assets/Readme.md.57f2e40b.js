import{c as n,o as s,a}from"./app.a3d1538c.js";var p="/assets/docs.cdafaacf.png";const e=a(`<h1 id="wei-design" tabindex="-1">Wei-Design <a class="header-anchor" href="#wei-design" aria-hidden="true">#</a></h1><p>A Vue.js 3 UI library</p><hr><p><a href="http://commitizen.github.io/cz-cli"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a><br></p><p>\u57FA\u4E8E<a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">vitepress</a></p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u251C\u2500\u2500 .vitepress                          # vitepress\u914D\u7F6E
\u2502   \u251C\u2500\u2500 config                          # \u57FA\u672C\u914D\u7F6E\u62BD\u79BB\uFF0C\u5305\u542Bslide\uFF0Cnav\u53CA\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E
\u2502   \u251C\u2500\u2500 i18n                            # \u8BED\u8A00\u5305\u914D\u7F6E
\u2502   \u251C\u2500\u2500 components                      # \u516C\u5171\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 plugins                         # vite\u63D2\u4EF6
|   \u251C\u2500\u2500 theme                           # vitepress\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u5F15\u5165wei-design\u7684\u7EC4\u4EF6\u53CA\u4E00\u4E9B\u81EA\u5B9A\u4E49\u4E3B\u9898\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 util                            # \u5DE5\u5177\u65B9\u6CD5(util.js)
\u2502   \u251C\u2500\u2500 vitepress                       # \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53CA\u4E3B\u9898
\u2502   \u251C\u2500\u2500 config.ts                       # vitepress\u914D\u7F6E
\u2502   \u251C\u2500\u2500 lang.js                         # \u9ED8\u8BA4\u8BED\u8A00\u5904\u7406\uFF0C\u4EE3\u7801\u63D2\u5165\u5230head\u53BB\u6267\u884C
\u251C\u2500\u2500 example                             # \u7EC4\u4EF6\u793A\u5217\u4EE3\u7801
\u251C\u2500\u2500 node_modules                        # \u4F9D\u8D56\u7684\u6A21\u5757\u5305
\u251C\u2500\u2500 public                              # \u9759\u6001\u8D44\u6E90
\u251C\u2500\u2500 zh-CN                               # \u4E2D\u6587\u6587\u6863md\uFF0Czh-CN\u4E3A\u540E\u671F\u591A\u8BED\u8A00\u7559\u4E2A\u53E3\u5B50
\u251C\u2500\u2500 static                              # \u9759\u6001\u8D44\u6E90(CDN)
\u251C\u2500\u2500 vite.config.js                      # vite\u6253\u5305\u914D\u7F6E
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u6587\u6863\u642D\u5EFA" tabindex="-1">\u6587\u6863\u642D\u5EFA <a class="header-anchor" href="#\u6587\u6863\u642D\u5EFA" aria-hidden="true">#</a></h2><h3 id="\u5FEB\u901F\u642D\u5EFA" tabindex="-1">\u5FEB\u901F\u642D\u5EFA <a class="header-anchor" href="#\u5FEB\u901F\u642D\u5EFA" aria-hidden="true">#</a></h3><ul><li>1\u3001\u6839\u76EE\u5F55\u521B\u5EFAdocs\u6587\u4EF6\u5939</li></ul><div class="language-shell line-numbers-mode"><pre><code><span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> docs
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>2\u3001\u521D\u59CB\u5316</li></ul><div class="language-shell line-numbers-mode"><pre><code><span class="token function">yarn</span> init
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>3\u3001\u5B89\u88C5 <code>VitePress</code></li></ul><div class="language-shell line-numbers-mode"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> --dev vitepress
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>4\u3001\u521B\u5EFA\u7B2C\u4E00\u7BC7\u6587\u6863</li></ul><div class="language-shell line-numbers-mode"><pre><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello Vue3&#39;</span> <span class="token operator">&gt;</span> index.md
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>5\u3001\u5728<code>package.json</code>\u4E2D\u6DFB\u52A0\u811A\u672C</li></ul><p>\u76F4\u63A5\u4F7F\u7528.</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev .&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build .&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve .&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5B8C\u6574\u7248<code>package.json</code>\u5982\u4E0B\uFF1A</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@wei-design/docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev .&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build .&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve .&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vitepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.22.4&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>6\u3001\u542F\u52A8\u6587\u6863\u7AD9\u70B9</li></ul><div class="language-shell line-numbers-mode"><pre><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="_1\u3001\u65B0\u589E\u914D\u7F6E\u6587\u4EF6" tabindex="-1">1\u3001\u65B0\u589E\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#_1\u3001\u65B0\u589E\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-shell line-numbers-mode"><pre><code><span class="token function">mkdir</span> .vuepress
<span class="token function">touch</span> config.js  
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_2\u3001\u6DFB\u52A0sidebar\u548Cnav" tabindex="-1">2\u3001\u6DFB\u52A0sidebar\u548Cnav <a class="header-anchor" href="#_2\u3001\u6DFB\u52A0sidebar\u548Cnav" aria-hidden="true">#</a></h4><p>toDo: \u8FD9\u90E8\u5206\u53EF\u6DFB\u52A0\u811A\u672C\uFF0C\u6839\u636E\u7EC4\u4EF6\u81EA\u52A8\u751F\u6210sidebar</p><p>\u6DFB\u52A0<code>/zh-CN</code>\u662F\u4E3A\u4E86\u540E\u671F\u505A\u591A\u8BED\u8A00\u63D0\u4F9B\u53E3\u5B50</p><ul><li>sidebar\uFF1A\u5DE6\u4FA7\u83DC\u5355</li></ul><div class="language-javascript line-numbers-mode"><pre><code><span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/zh-CN/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5B89\u88C5&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh-CN/guide/installation&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5FEB\u901F\u5F00\u59CB&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh-CN/guide/quickstart&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u8FDB\u9636&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u4E3B\u9898&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh-CN/guide/theming&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u66F4\u65B0\u65E5\u5FD7&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh-CN/guide/changelog&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/zh-CN/component/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh-CN/component/button&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Button&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>nav\uFF1A\u9876\u90E8\u5BFC\u822A</li></ul><div class="language-javascript line-numbers-mode"><pre><code><span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6307\u5357&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/zh-CN/guide/design&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;activeMatch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/guide/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7EC4\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/zh-CN/component/button&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;activeMatch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/component/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D44\u6E90&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/zh-CN/resource/index&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;activeMatch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/resource/&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u57FA\u672C\u6548\u679C</p><p><img src="`+p+'" alt=""></p><h3 id="\u589E\u52A0\u6E90\u7801\u9884\u89C8" tabindex="-1">\u589E\u52A0\u6E90\u7801\u9884\u89C8 <a class="header-anchor" href="#\u589E\u52A0\u6E90\u7801\u9884\u89C8" aria-hidden="true">#</a></h3><h3 id="\u81EA\u5B9A\u4E49\u4E3B\u9898" tabindex="-1">\u81EA\u5B9A\u4E49\u4E3B\u9898 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898" aria-hidden="true">#</a></h3>',38),t=[e],u='{"title":"Wei-Design","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"\u6587\u6863\u642D\u5EFA","slug":"\u6587\u6863\u642D\u5EFA"},{"level":3,"title":"\u5FEB\u901F\u642D\u5EFA","slug":"\u5FEB\u901F\u642D\u5EFA"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u589E\u52A0\u6E90\u7801\u9884\u89C8","slug":"\u589E\u52A0\u6E90\u7801\u9884\u89C8"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u4E3B\u9898","slug":"\u81EA\u5B9A\u4E49\u4E3B\u9898"}],"relativePath":"Readme.md","lastUpdated":1657337558000}',o={},b=Object.assign(o,{setup(r){return(l,c)=>(s(),n("div",null,t))}});export{u as __pageData,b as default};
