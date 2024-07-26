import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BTxZwHw0.js";const g=JSON.parse('{"title":"编译运行","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/usage/compile.md","filePath":"zh_cn/usage/compile.md","lastUpdated":1722006498000}'),e={name:"zh_cn/usage/compile.md"},p=n(`<h1 id="编译运行" tabindex="-1">编译运行 <a class="header-anchor" href="#编译运行" aria-label="Permalink to &quot;编译运行&quot;">​</a></h1><div class="important custom-block github-alert"><p class="custom-block-title">重要的说明</p><p>从 <code>v1.4.0-beta24-02-20</code> 开始，项目将暂时闭源，准备重构后支持模块化开发再次开源。目前Github版本中为 <code>v1.3.0</code> 正式版。</p></div><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-label="Permalink to &quot;前端&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开发运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译打包(打包后生成dist目录，若需要结合后端使用请改成web)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-label="Permalink to &quot;后端&quot;">​</a></h2><p>1.正式编译程序前先进入<code>service</code></p><p>2.按照<a href="./backend_static_compilation.html">静态资源编译教程</a>编译后端静态文件</p><p>3.正式编译</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入后端项目</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开发运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.go</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译打包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.go</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;docker&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>执行命令前，请保证你已经拉取了项目代码，然后使用命令行进入到项目根目录</p></div><p>构建docker镜像</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行 <code>D:\\docker\\data\\sun-panel</code> 为本地开发运行的路径</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3003:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ata</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">un-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">onf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ata</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">un-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">untime:/app/runtime</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ata</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">un-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ploads:/app/uploads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ata</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">un-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">atabase:/app/database</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),l=[p];function h(t,k,r,d,F,c){return a(),i("div",null,l)}const C=s(e,[["render",h]]);export{g as __pageData,C as default};
