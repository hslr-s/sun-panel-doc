import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.BTxZwHw0.js";const b=JSON.parse('{"title":"部署教程","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/usage/quick_deploy.md","filePath":"zh_cn/usage/quick_deploy.md","lastUpdated":1724255480000}'),e={name:"zh_cn/usage/quick_deploy.md"},t=n(`<h1 id="部署教程" tabindex="-1">部署教程 <a class="header-anchor" href="#部署教程" aria-label="Permalink to &quot;部署教程&quot;">​</a></h1><h2 id="默认账号密码" tabindex="-1">默认账号密码 <a class="header-anchor" href="#默认账号密码" aria-label="Permalink to &quot;默认账号密码&quot;">​</a></h2><p>账号：<strong><a href="mailto:admin@sun.cc" target="_blank" rel="noreferrer">admin@sun.cc</a></strong></p><p>密码：<strong>12345678</strong></p><h2 id="命令参数" tabindex="-1">命令参数 <a class="header-anchor" href="#命令参数" aria-label="Permalink to &quot;命令参数&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-h</td><td>查看命令说明</td></tr><tr><td>-config-reset</td><td>生成或重置配置文件（conf/conf.ini）</td></tr><tr><td>-config-path</td><td>指定程序配置文件的目录 (默认 &quot;./conf&quot;)</td></tr><tr><td>-password-reset</td><td>重置第一个管理账号的密码</td></tr></tbody></table></div><details class="details custom-block"><summary><code>v1.3.0</code> 及之前版本，请点此查看</summary><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-h</td><td>查看命令说明</td></tr><tr><td>-config</td><td>生成配置文件（conf/conf.ini）</td></tr><tr><td>-password-reset</td><td>重置第一个管理账号的密码</td></tr></tbody></table></details><h2 id="docker_run" tabindex="-1">docker 运行 <a class="header-anchor" href="#docker_run" aria-label="Permalink to &quot;docker 运行 {#docker_run}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>DockerHub <a href="https://hub.docker.com/r/hslr/sun-panel" target="_blank" rel="noreferrer">Sun-Panel项目首页</a></p></div><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><p>如果您是从<code>v1.3.0</code>及之前的版本升级到此版本，<a href="https://github.com/hslr-s/sun-panel/discussions/98" target="_blank" rel="noreferrer">请查看这个说明</a></p><p>目录挂载 <code>-v</code>，全部可选，根据自己的需求选择：</p><table tabindex="0"><thead><tr><th>本地目录</th><th>容器目录</th><th>说明</th></tr></thead><tbody><tr><td>~/sun-panel/conf</td><td>/app/conf</td><td>配置文件（多合一目录）</td></tr><tr><td>/var/run/docker.sock</td><td>/var/run/docker.sock</td><td>若想在容器中使用docker功能，请挂载此目录（非特殊情况下，<strong>请原样挂载</strong>）<code>1.5.0+</code></td></tr><tr><td>~/sun-panel/runtime</td><td>/app/runtime</td><td>运行日志（不推荐挂载）</td></tr></tbody></table></div><details class="details custom-block"><summary><code>v1.3.0</code> 及之前版本，请点此查看</summary><p>目录挂载 <code>-v</code>，全部可选，根据自己的需求选择：</p><table tabindex="0"><thead><tr><th>容器目录</th><th>说明</th></tr></thead><tbody><tr><td>/app/conf</td><td>配置文件</td></tr><tr><td>/app/uploads</td><td>上传的文件</td></tr><tr><td>/app/database</td><td>数据库文件</td></tr><tr><td>/app/runtime</td><td>运行日志(不推荐挂载)</td></tr><tr><td>/app/web/custom</td><td>自定义（js,css等）仅限 <code>v1.3.0</code></td></tr></tbody></table></details><ol><li>拉取最新镜像</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>直接下载运行</li></ol><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><p><code>latest</code> 可以替换成其他版本号（<a href="https://hub.docker.com/r/hslr/sun-panel/tags" target="_blank" rel="noreferrer">查看</a>），示例已经挂载了docker目录，可在容器中使用docker</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>容器端口默认：3002，<code>--restart=always</code> 自动重启，<code>-d</code> 后台运行</p></div><details class="details custom-block"><summary><code>v1.3.0</code> 及之前版本，请点此查看</summary><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/uploads:/app/uploads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/database:/app/database</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="docker_compose" tabindex="-1">docker-compose 运行 <a class="header-anchor" href="#docker_compose" aria-label="Permalink to &quot;docker-compose 运行 {#docker_compose}&quot;">​</a></h2><p>仅供参考，请根据自己的需求修改 <code>v1.4.0及以上版本</code></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sun-panel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hslr/sun-panel:latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./conf:/app/conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 挂载docker.sock</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - ./runtime:/app/runtime # 挂载日志目录</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - /mnt/sata1-1:/os # 硬盘挂载点（根据自己需求修改）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3002:3002</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>运行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="可执行-二进制-文件运行" tabindex="-1">可执行（二进制）文件运行 <a class="header-anchor" href="#可执行-二进制-文件运行" aria-label="Permalink to &quot;可执行（二进制）文件运行&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>前往Github <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">Releases</a> 下载二进制文件</p></div><p>执行示例（使用命令行运行）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,25),l=[t];function p(r,d,h,k,c,o){return i(),a("div",null,l)}const g=s(e,[["render",p]]);export{b as __pageData,g as default};