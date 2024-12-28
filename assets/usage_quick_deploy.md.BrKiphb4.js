import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.BTxZwHw0.js";const m=JSON.parse('{"title":"Deployment Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"usage/quick_deploy.md","filePath":"usage/quick_deploy.md","lastUpdated":1735395968000}'),n={name:"usage/quick_deploy.md"},t=e(`<h1 id="deployment-tutorial" tabindex="-1">Deployment Tutorial <a class="header-anchor" href="#deployment-tutorial" aria-label="Permalink to &quot;Deployment Tutorial&quot;">​</a></h1><h2 id="default-account-and-password" tabindex="-1">Default Account and Password <a class="header-anchor" href="#default-account-and-password" aria-label="Permalink to &quot;Default Account and Password&quot;">​</a></h2><p>Username: <strong><a href="mailto:admin@sun.cc" target="_blank" rel="noreferrer">admin@sun.cc</a></strong></p><p>Password: <strong>12345678</strong></p><h2 id="command-parameters" tabindex="-1">Command Parameters <a class="header-anchor" href="#command-parameters" aria-label="Permalink to &quot;Command Parameters&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>-h</td><td>View command instructions</td></tr><tr><td>-config-reset</td><td>Generate configuration file (conf/conf.ini)</td></tr><tr><td>-config-path</td><td>Create or reset the configuration file (default &quot;./conf&quot;)</td></tr><tr><td>-password-reset</td><td>Reset the password of the first admin account</td></tr></tbody></table></div><details class="details custom-block"><summary>Click here to view versions <code>v1.3.0</code> and earlier</summary><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>-h</td><td>View command instructions</td></tr><tr><td>-config</td><td>Generate configuration file (conf/conf.ini)</td></tr><tr><td>-password-reset</td><td>Reset the password of the first admin account</td></tr></tbody></table></details><h2 id="docker_run" tabindex="-1">Docker Run <a class="header-anchor" href="#docker_run" aria-label="Permalink to &quot;Docker Run {#docker_run}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>DockerHub <a href="https://hub.docker.com/r/hslr/sun-panel" target="_blank" rel="noreferrer">Sun-Panel project homepage</a></p></div><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><p>If you are upgrading from version <code>v1.3.0</code> or earlier to this version, <a href="https://github.com/hslr-s/sun-panel/discussions/98" target="_blank" rel="noreferrer">please refer to this note</a></p><p>Directory mounting <code>-v</code>, all optional, choose according to your needs:</p><table tabindex="0"><thead><tr><th>Local Directory</th><th>Container Directory</th><th>Description</th></tr></thead><tbody><tr><td>~/sun-panel/conf</td><td>/app/conf</td><td>Configuration files (multi-directory)</td></tr><tr><td>/var/run/docker.sock</td><td>/var/run/docker.sock</td><td>If you want to use Docker functionality within a container, mount this directory (Under normal circumstances, <strong>please mount as is</strong>) <code>1.5.0+</code></td></tr><tr><td>~/sun-panel/runtime</td><td>/app/runtime</td><td>Runtime logs (not recommended to mount)</td></tr></tbody></table></div><details class="details custom-block"><summary>Click here to view versions <code>v1.3.0</code> and earlier</summary><p>Directory mounts <code>-v</code>, all optional, choose according to your needs:</p><table tabindex="0"><thead><tr><th>Container Directory</th><th>Description</th></tr></thead><tbody><tr><td>/app/conf</td><td>Configuration file</td></tr><tr><td>/app/uploads</td><td>Uploaded files</td></tr><tr><td>/app/database</td><td>Database files</td></tr><tr><td>/app/runtime</td><td>Runtime logs (not recommended to mount)</td></tr><tr><td>/app/web/custom</td><td>Custom (js, css, etc.) only <code>v1.3.0</code></td></tr></tbody></table></details><ol><li>Pull the latest image</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>Run directly</li></ol><div class="info custom-block"><p class="custom-block-title"><code>v1.4.0+</code></p><p>Replace <code>latest</code> with other version numbers (<a href="https://hub.docker.com/r/hslr/sun-panel/tags" target="_blank" rel="noreferrer">View</a>),An example has been provided for mounting the Docker directory, allowing the use of Docker within the container.</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Container port default: 3002, <code>--restart=always</code> for automatic restart, <code>-d</code> for running in the background.</p></div><details class="details custom-block"><summary>Click here to view versions <code>v1.3.0</code> and earlier</summary><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/uploads:/app/uploads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/database:/app/database</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="docker_compose" tabindex="-1">docker-compose Run <a class="header-anchor" href="#docker_compose" aria-label="Permalink to &quot;docker-compose Run {#docker_compose}&quot;">​</a></h2><p>For reference only, please modify according to your own needs. <code>v1.4.0 and above</code></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3.2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sun-panel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hslr/sun-panel:latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./conf:/app/conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Mount the Docker socket</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - ./runtime:/app/runtime # Mount the log directory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - /mnt/sata1-1:/os # Mount the hard drive (modify according to your needs)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3002:3002</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Run</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="executable-file-to-run-binary" tabindex="-1">Executable file to run (binary) <a class="header-anchor" href="#executable-file-to-run-binary" aria-label="Permalink to &quot;Executable file to run (binary)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Go to GitHub <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">Releases</a> to download binary files.</p></div><p>Example execution (Use the command line to run)</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,25),l=[t];function r(p,d,o,h,c,k){return i(),a("div",null,l)}const b=s(n,[["render",r]]);export{m as __pageData,b as default};