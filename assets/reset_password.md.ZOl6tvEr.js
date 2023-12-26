import{_ as s,o as a,c as e,R as t}from"./chunks/framework.HLJ3dCim.js";const g=JSON.parse('{"title":"重置密码","description":"","frontmatter":{},"headers":[],"relativePath":"reset_password.md","filePath":"reset_password.md","lastUpdated":1703606879000}'),i={name:"reset_password.md"},p=t(`<h1 id="重置密码" tabindex="-1">重置密码 <a class="header-anchor" href="#重置密码" aria-label="Permalink to &quot;重置密码&quot;">​</a></h1><p>如果你忘记了管理员密码，你除了修改数据库，还可以使用命令重置<strong>第一个管理员的密码</strong></p><ol><li><p>如果您使用的是docker（未使用可以跳过）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sun-panel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span></code></pre></div></li><li><p>执行示例</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -password-reset</span></span></code></pre></div><p>输出结果:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>密码已经重置成功，以下是账号信息</span></span>
<span class="line"><span>用户名  admin</span></span>
<span class="line"><span>密码  12345678</span></span></code></pre></div></li></ol>`,3),n=[p];function l(o,h,d,r,c,k){return a(),e("div",null,n)}const u=s(i,[["render",l]]);export{g as __pageData,u as default};
