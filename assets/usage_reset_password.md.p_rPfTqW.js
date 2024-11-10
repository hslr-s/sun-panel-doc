import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.BTxZwHw0.js";const k=JSON.parse('{"title":"Reset Password","description":"","frontmatter":{},"headers":[],"relativePath":"usage/reset_password.md","filePath":"usage/reset_password.md","lastUpdated":1731227768000}'),n={name:"usage/reset_password.md"},t=i(`<h1 id="reset-password" tabindex="-1">Reset Password <a class="header-anchor" href="#reset-password" aria-label="Permalink to &quot;Reset Password&quot;">​</a></h1><p>If you have forgotten the administrator password, you can reset the password for the <strong>first administrator</strong> using the following command:</p><ol><li><p>If you are using Docker (skip this step if you are not using Docker):</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Execute the following command:</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -password-reset</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="info custom-block"><p class="custom-block-title">Output:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>The password has been successfully reset. Here is the account information</span></span>
<span class="line"><span>Username  admin@sun.cc</span></span>
<span class="line"><span>Password  12345678</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></li></ol>`,3),p=[t];function r(l,o,d,c,h,u){return a(),e("div",null,p)}const b=s(n,[["render",r]]);export{k as __pageData,b as default};