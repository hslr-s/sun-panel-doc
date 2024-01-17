import{_ as s,o as n,c as a,R as p}from"./chunks/framework.BQ8N8sdH.js";const _=JSON.parse('{"title":"自定义CSS和JS","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/advanced/custom_js_css.md","filePath":"zh_cn/advanced/custom_js_css.md","lastUpdated":1705496371000}'),e={name:"zh_cn/advanced/custom_js_css.md"},c=p(`<h1 id="自定义css和js" tabindex="-1">自定义CSS和JS <a class="header-anchor" href="#自定义css和js" aria-label="Permalink to &quot;自定义CSS和JS&quot;">​</a></h1><p>（实验性功能，后期可能调整，请持续关注后面的更新信息）</p><p>支持的版本：<code>1.3.0-beta24-01-17</code>及以后的版本，如果你觉得目前的界面不能满足你，或者你想自定义一些全局的东西，又或者你想加入一些好玩的东西，你可以选择自定义css和js。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请不要添加来源不明的js代码，避免被攻击！！！</p></div><p>自定义的文件在<code>web/custom</code>目录下，<strong>如果文件不存在，可以在此目录下手动创建<code>index.js</code>,<code>index.css</code>这两个文件</strong></p><p><strong>docker需要在docker run 的时候增加<code>-v ~/docker_data/sun-panel/custom:/app/web/custom</code>进行挂载（仅仅是示例根据自身环境修改冒号前的路径）</strong></p><p>大概的目录结构如下:</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── conf</span></span>
<span class="line"><span>├── database</span></span>
<span class="line"><span>├── runtime</span></span>
<span class="line"><span>├── sun-panel</span></span>
<span class="line"><span>├── uploads</span></span>
<span class="line"><span>└── web</span></span>
<span class="line"><span>    ├── assets</span></span>
<span class="line"><span>    ├── custom</span></span>
<span class="line highlighted has-focus"><span>    │   ├── index.css</span></span>
<span class="line highlighted has-focus"><span>    │   └── index.js</span></span>
<span class="line"><span>    ├── favicon-black.svg</span></span>
<span class="line"><span>    ├── favicon.ico</span></span>
<span class="line"><span>    ├── favicon.svg</span></span>
<span class="line"><span>    ├── index.html</span></span>
<span class="line"><span>    ├── logo.png</span></span>
<span class="line"><span>    └── static</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>然后可以编辑这两个文件，到浏览器刷新后查看效果，如果没有效果，请清除浏览器缓存</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请不要添加来源不明的js代码，避免被攻击！！！</p></div>`,10),l=[c];function i(t,o,r,d,b,u){return n(),a("div",null,l)}const h=s(e,[["render",i]]);export{_ as __pageData,h as default};
