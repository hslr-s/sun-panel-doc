import{_ as s,a as i,b as a,c as t,d as l,e as n,f as e}from"./chunks/home.C3EWTT_g.js";import{_ as h,c as p,o as r,a4 as d}from"./chunks/framework.BTxZwHw0.js";const B=JSON.parse('{"title":"在宝塔面板上部署","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/deploy/baota.md","filePath":"zh_cn/deploy/baota.md","lastUpdated":1727162555000}'),k={name:"zh_cn/deploy/baota.md"},o=d('<h1 id="在宝塔面板上部署" tabindex="-1">在宝塔面板上部署 <a class="header-anchor" href="#在宝塔面板上部署" aria-label="Permalink to &quot;在宝塔面板上部署&quot;">​</a></h1><h2 id="安装宝塔面板" tabindex="-1">安装宝塔面板 <a class="header-anchor" href="#安装宝塔面板" aria-label="Permalink to &quot;安装宝塔面板&quot;">​</a></h2><h3 id="方式-1" tabindex="-1">方式 1 <a class="header-anchor" href="#方式-1" aria-label="Permalink to &quot;方式 1&quot;">​</a></h3><p>前往 <a href="https://www.bt.cn/u/Z5ODNb" target="_blank" rel="noreferrer"><strong>宝塔面板</strong></a> 官网，选择对应系统的脚本下载安装。</p><h3 id="方式-2" tabindex="-1">方式 2 <a class="header-anchor" href="#方式-2" aria-label="Permalink to &quot;方式 2&quot;">​</a></h3><p>Centos安装脚本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.bt.cn/install/install_6.0.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bd93a986</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Ubuntu/Deepin安装脚本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.bt.cn/install/install-ubuntu_6.0.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bd93a986</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Debian安装脚本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.bt.cn/install/install-ubuntu_6.0.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bd93a986</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Fedora安装脚本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.bt.cn/install/install_6.0.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bd93a986</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>升级脚本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.bt.cn/install/update6.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bd93a986</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="开始部署" tabindex="-1">开始部署 <a class="header-anchor" href="#开始部署" aria-label="Permalink to &quot;开始部署&quot;">​</a></h2><ol><li>宝塔面板安装成功后，如果首次安装需要进入Docker页面中，安装docker环境 <img src="'+s+'" alt=""></li><li>使用关键字搜索 <strong><code>sun</code></strong> 找到 <code>Sun-Panel</code> ，点击安装（如果没有找到可以点击应用程序更新，或者升级宝塔到最新版本，或者缩减搜索关键字） <img src="'+i+'" alt=""></li><li>根据自身需求可以设置域名等信息进行安装 <img src="'+a+'" alt=""></li><li>如果无法拉取镜像可以到设置中配置加速镜像，然后重新安装 <img src="'+t+'" alt=""></li><li>安装成功后，可以查看详情 <img src="'+l+'" alt=""></li></ol><h2 id="访问使用" tabindex="-1">访问使用 <a class="header-anchor" href="#访问使用" aria-label="Permalink to &quot;访问使用&quot;">​</a></h2><ol><li><p>浏览器访问刚刚设置的<strong>域名</strong>或者 <code>ip:端口</code> 的格式访问</p><p><img src="'+n+'" alt=""></p></li><li><p>输入默认账号密码登录</p><p><img src="'+e+'" alt=""></p></li><li><p>登录后务必<strong>修改默认的账号密码</strong></p></li></ol>',19),c=[o];function F(g,b,u,m,y,C){return r(),p("div",null,c)}const v=h(k,[["render",F]]);export{B as __pageData,v as default};
