import{_ as e}from"./chunks/docker_hub_beta.DdvbFRR9.js";import{_ as a,c as s,o as n,a4 as i}from"./chunks/framework.BTxZwHw0.js";const g=JSON.parse('{"title":"Update Instructions","description":"","frontmatter":{},"headers":[],"relativePath":"update/update.md","filePath":"update/update.md","lastUpdated":1724421626000}'),t={name:"update/update.md"},o=i('<h1 id="update-instructions" tabindex="-1">Update Instructions <a class="header-anchor" href="#update-instructions" aria-label="Permalink to &quot;Update Instructions&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">Note</p><p><strong>Please make sure to back up your data before upgrading, especially the mount directories for Docker versions!!!</strong> This is especially important when upgrading to beta versions, always back up!</p><p>If there is no effect after the update, remember to <strong>clear the browser cache</strong>.</p></div><h2 id="version-naming-convention" tabindex="-1">Version Naming Convention <a class="header-anchor" href="#version-naming-convention" aria-label="Permalink to &quot;Version Naming Convention&quot;">​</a></h2><h4 id="rules" tabindex="-1">Rules: <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules:&quot;">​</a></h4><p><code>[Major Version]</code>.<code>[Minor Version]</code>.<code>[Stable/Minor Feature Update/Bug Fix]</code>-<code>[Testing/Development][Date]</code></p><h4 id="examples" tabindex="-1">Examples: <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples:&quot;">​</a></h4><ul><li><code>v1.3.1-beta24-02-28</code> Beta version</li><li><code>v1.3.1</code> Stable version / Minor feature update / Bug fix</li></ul><h4 id="version-chronological-order-example" tabindex="-1">Version Chronological Order Example: <a class="header-anchor" href="#version-chronological-order-example" aria-label="Permalink to &quot;Version Chronological Order Example:&quot;">​</a></h4><p><code>v1.3.1</code> &gt; <code>v1.3.1-beta24-02-28</code> &gt; <code>v1.3.0</code> &gt; <code>v1.3.0-beta24-02-20</code></p><h2 id="docker-version" tabindex="-1">Docker Version <a class="header-anchor" href="#docker-version" aria-label="Permalink to &quot;Docker Version&quot;">​</a></h2><h3 id="_1-go-to-dockerhub-and-find-the-corresponding-version" tabindex="-1">1. Go to <a href="https://hub.docker.com/r/hslr/sun-panel/tags" target="_blank" rel="noreferrer">DockerHub</a> and find the corresponding version <a class="header-anchor" href="#_1-go-to-dockerhub-and-find-the-corresponding-version" aria-label="Permalink to &quot;1. Go to [DockerHub](https://hub.docker.com/r/hslr/sun-panel/tags) and find the corresponding version&quot;">​</a></h3><p>Please note that Docker version numbers do not include <code>v</code></p><p><img src="'+e+`" alt=""></p><h3 id="_2-copy-the-command-to-download" tabindex="-1">2. Copy the command to download <a class="header-anchor" href="#_2-copy-the-command-to-download" aria-label="Permalink to &quot;2. Copy the command to download&quot;">​</a></h3><p>Example</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Latest stable version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Latest beta version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:beta</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Other specific versions (version numbers should not have &#39;v&#39; at the beginning)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:1.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel:1.4.0-beta24-02-20</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-synology-or-other-gui-operations" tabindex="-1">3. Synology or other GUI operations <a class="header-anchor" href="#_3-synology-or-other-gui-operations" aria-label="Permalink to &quot;3. Synology or other GUI operations&quot;">​</a></h3><p>Directly select the tag you want to use for pulling, create a new container to run, and ensure the mount path is consistent with the old version. If tag filtering is not supported, run it in the following command line manner</p><h3 id="_4-command-line-operation-mount-directory-consistent-with-the-old-version" tabindex="-1">4. Command line operation (Mount directory consistent with the old version) <a class="header-anchor" href="#_4-command-line-operation-mount-directory-consistent-with-the-old-version" aria-label="Permalink to &quot;4. Command line operation (Mount directory consistent with the old version)&quot;">​</a></h3><p>It is recommended to create a new container to run, which can be restored in time if there are problems,</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Replace <code>latest</code> in the above command with any existing version tag, and modify other parameters according to your own needs.</p><h2 id="binary-version" tabindex="-1">Binary Version <a class="header-anchor" href="#binary-version" aria-label="Permalink to &quot;Binary Version&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Go to Github <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">Releases</a> to download the binary file.</p></div><p>After downloading, cover the <code>web</code> folder and <code>executable binary file</code> in the compressed package, and run it again.</p><hr><p>Related references: <a href="../usage/quick_deploy">Deployment Tutorial</a> | <a href="https://www.bilibili.com/video/BV1ke411y7B5" target="_blank">[Bilibili] Beta Update Video Tutorial</a> | <a href="https://youtu.be/wRo-azoAbsQ?si=ZNSKm89bx0yq5Puw" target="_blank">[YouTube] Beta Update Video Tutorial</a></p>`,27),r=[o];function l(p,h,d,c,u,k){return n(),s("div",null,r)}const y=a(t,[["render",l]]);export{g as __pageData,y as default};
