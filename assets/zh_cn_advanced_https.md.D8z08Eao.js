import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.BTxZwHw0.js";const u=JSON.parse('{"title":"启用HTTPS","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/advanced/https.md","filePath":"zh_cn/advanced/https.md","lastUpdated":1735395968000}'),e={name:"zh_cn/advanced/https.md"},p=i(`<h1 id="启用https" tabindex="-1">启用HTTPS <a class="header-anchor" href="#启用https" aria-label="Permalink to &quot;启用HTTPS&quot;">​</a></h1><p><code>v1.7.*</code> 及以后版本开始支持。开启 HTTPS 需要在项目的<a href="./config.html"><strong>配置文件位置</strong></a>中修改或者添加相关配置。开启前请自行备好SSL证书文件和私钥文件。</p><div class="warning custom-block github-alert"><p class="custom-block-title">旧版本升级重要说明</p><p>从 <code>v1.6.1</code> 之前版本升级后不存在此配置，需要自行添加相关配置。</p><ol><li>[可选，默认为3003] 在配置文件的 <code>[base]</code> 配置块中添加 <code>https_port=3003</code> ，示例：</li></ol><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[base]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... （此处省略其他配置项）</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">https_port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3003 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加此行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... （此处省略其他配置项）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>在配置文件最底部或者（任意一个配置块末尾的空白处）<strong>完整添加</strong>以下代码：</li></ol><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[cert]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Certificate file path</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cert_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Certificate private key file path</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">key_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>(解释：在配置文件中添加一个新的配置块 <code>[cert]</code>，在里面添加了两个配置项，分别是 <code>cert_path</code> 和 <code>key_path</code>，分别代表证书文件路径和私钥文件路径。)</p><p>完整的配置文件可以参考项目中 <strong><code>conf.example.ini</code></strong> 文件</p></div><p>根据自身需求修改下方深色代码块中的配置项，示例：</p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Basic configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[base]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Web run port. Default:3002</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http_port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3002</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Web run https port. Default:3003</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This port is enabled only after you configure the [cert] certificate path</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">https_port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3003</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Web run address Default: 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http_address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... （此处省略其他配置项）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==============================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># SSL certificate configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==============================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[cert]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Certificate file path</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cert_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./cert/localhost.pem </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 路径根据自身需求填写</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Certificate private key file path</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">key_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./cert/localhost-key.pem </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 路径根据自身需求填写</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... （此处省略其他配置项）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>如果证书目录配置项为空将不会启用 <code>HTTPS</code></p>`,6),l=[p];function t(h,r,c,k,d,o){return n(),a("div",null,l)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};