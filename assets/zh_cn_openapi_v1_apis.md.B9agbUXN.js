import{_ as t,D as n,c as e,j as a,a as s,I as l,a4 as p,o as h}from"./chunks/framework.BTxZwHw0.js";const C=JSON.parse('{"title":"Open API V1 (开放的API接口)","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"zh_cn/openapi/v1/apis.md","filePath":"zh_cn/openapi/v1/apis.md","lastUpdated":1722147739000}'),d={name:"zh_cn/openapi/v1/apis.md"},r={id:"open-api-v1-开放的api接口",tabindex:"-1"},k=a("code",null,"V1",-1),o=a("a",{class:"header-anchor",href:"#open-api-v1-开放的api接口","aria-label":'Permalink to "Open API `V1` (开放的API接口) <Badge type="warning" text="beta" />"'},"​",-1),c=p(`<blockquote><p><code>v1.4.0-beta24-04-11+</code> 新增，如果您是一位开发者，您可以通过调用API的方式来实现Sun-Panel相应的功能。</p></blockquote><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>所有接口均采用 POST 请求方式。API请求需要token认证，请使用 <code>管理账号</code> 在 <code>Sun-Panel</code> 中找到 <code>OpenAPI</code> 应用去获取token</p></div><h2 id="header参数" tabindex="-1">Header参数 <a class="header-anchor" href="#header参数" aria-label="Permalink to &quot;Header参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数描述</th></tr></thead><tbody><tr><td>token</td><td>ieyqw0x9nngzukrrmivx84hj7l2xkr1t</td><td>-</td></tr></tbody></table><h2 id="api接口" tabindex="-1">API接口 <a class="header-anchor" href="#api接口" aria-label="Permalink to &quot;API接口&quot;">​</a></h2><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><h4 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h4><blockquote><p>/openapi/v1/item/create</p></blockquote><h4 id="请求内容" tabindex="-1">请求内容 <a class="header-anchor" href="#请求内容" aria-label="Permalink to &quot;请求内容&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">参数说明</p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>iconUrl</td><td><a href="https://baidu.com/favicon.ico" target="_blank" rel="noreferrer">https://baidu.com/favicon.ico</a></td><td>String</td><td>是</td><td>图像地址</td></tr><tr><td>title</td><td>Baidu</td><td>String</td><td>是</td><td>标题</td></tr><tr><td>onlyName</td><td>test_baidu</td><td>String</td><td>否</td><td>唯一标识</td></tr><tr><td>url</td><td><a href="https://baidu.com" target="_blank" rel="noreferrer">https://baidu.com</a></td><td>String</td><td>是</td><td>地址</td></tr><tr><td>lanUrl</td><td>-</td><td>String</td><td>否</td><td>内网地址</td></tr><tr><td>description</td><td>-</td><td>String</td><td>否</td><td>描述信息</td></tr></tbody></table></div><details class="details custom-block"><summary>内容示例</summary><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;iconUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;onlyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test_baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lanUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h4 id="成功响应" tabindex="-1">成功响应 <a class="header-anchor" href="#成功响应" aria-label="Permalink to &quot;成功响应&quot;">​</a></h4><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OK&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h4 id="错误响应" tabindex="-1">错误响应 <a class="header-anchor" href="#错误响应" aria-label="Permalink to &quot;错误响应&quot;">​</a></h4><p>可能出现的错误码：<code>1202</code>，错误码具体含义 <a href="./error_code.html">点此查看</a></p><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1202</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h3 id="根据唯一标识查询项目信息" tabindex="-1">根据唯一标识查询项目信息 <a class="header-anchor" href="#根据唯一标识查询项目信息" aria-label="Permalink to &quot;根据唯一标识查询项目信息&quot;">​</a></h3><h4 id="url-1" tabindex="-1">URL <a class="header-anchor" href="#url-1" aria-label="Permalink to &quot;URL&quot;">​</a></h4><blockquote><p>/openapi/v1/item/getInfoByOnlyName</p></blockquote><h4 id="请求内容-1" tabindex="-1">请求内容 <a class="header-anchor" href="#请求内容-1" aria-label="Permalink to &quot;请求内容&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">参数说明</p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>onlyName</td><td>test_baidu</td><td>String</td><td>是</td><td>唯一标识</td></tr></tbody></table></div><details class="details custom-block"><summary>内容示例</summary><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;onlyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test_baidu&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h4 id="成功响应-1" tabindex="-1">成功响应 <a class="header-anchor" href="#成功响应-1" aria-label="Permalink to &quot;成功响应&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">参数说明</p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>iconUrl</td><td>-</td><td>String</td><td>图像地址</td></tr><tr><td>title</td><td>Baidu</td><td>String</td><td>标题</td></tr><tr><td>onlyName</td><td>test_baidu</td><td>String</td><td>唯一标识</td></tr><tr><td>url</td><td><a href="https://baidu.com" target="_blank" rel="noreferrer">https://baidu.com</a></td><td>String</td><td>地址</td></tr><tr><td>lanUrl</td><td>-</td><td>String</td><td>内网地址</td></tr><tr><td>description</td><td>-</td><td>String</td><td>描述信息</td></tr></tbody></table></div><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;iconUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;onlyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test_baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;lanUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OK&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h4 id="错误响应-1" tabindex="-1">错误响应 <a class="header-anchor" href="#错误响应-1" aria-label="Permalink to &quot;错误响应&quot;">​</a></h4><p>可能出现的错误码：<code>1203</code>，错误码具体含义 <a href="./error_code.html">点此查看</a></p><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1203</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h3 id="修改项目" tabindex="-1">修改项目 <a class="header-anchor" href="#修改项目" aria-label="Permalink to &quot;修改项目&quot;">​</a></h3><h4 id="url-2" tabindex="-1">URL <a class="header-anchor" href="#url-2" aria-label="Permalink to &quot;URL&quot;">​</a></h4><blockquote><p>/openapi/v1/item/update</p></blockquote><h4 id="请求内容-2" tabindex="-1">请求内容 <a class="header-anchor" href="#请求内容-2" aria-label="Permalink to &quot;请求内容&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">参数说明</p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>onlyName</td><td>test_baidu</td><td>String</td><td>是</td><td>唯一标识</td></tr><tr><td>iconUrl</td><td><a href="https://baidu.com/favicon.ico" target="_blank" rel="noreferrer">https://baidu.com/favicon.ico</a></td><td>String</td><td>是</td><td>图像地址</td></tr><tr><td>title</td><td>Baidu</td><td>String</td><td>是</td><td>标题</td></tr><tr><td>url</td><td><a href="https://baidu.com" target="_blank" rel="noreferrer">https://baidu.com</a></td><td>String</td><td>是</td><td>地址</td></tr><tr><td>lanUrl</td><td>-</td><td>String</td><td>否</td><td>内网地址</td></tr><tr><td>description</td><td>-</td><td>String</td><td>否</td><td>描述信息</td></tr></tbody></table></div><details class="details custom-block"><summary>内容示例</summary><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;iconUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;onlyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test_baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lanUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h4 id="成功响应-2" tabindex="-1">成功响应 <a class="header-anchor" href="#成功响应-2" aria-label="Permalink to &quot;成功响应&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">参数说明</p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>iconUrl</td><td>-</td><td>String</td><td>图像地址</td></tr><tr><td>title</td><td>Baidu</td><td>String</td><td>标题</td></tr><tr><td>onlyName</td><td>test_baidu</td><td>String</td><td>唯一标识</td></tr><tr><td>url</td><td><a href="https://baidu.com" target="_blank" rel="noreferrer">https://baidu.com</a></td><td>String</td><td>地址</td></tr><tr><td>lanUrl</td><td>-</td><td>String</td><td>内网地址</td></tr><tr><td>description</td><td>-</td><td>String</td><td>描述信息</td></tr></tbody></table></div><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;iconUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;onlyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test_baidu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;lanUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OK&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h4 id="错误响应-2" tabindex="-1">错误响应 <a class="header-anchor" href="#错误响应-2" aria-label="Permalink to &quot;错误响应&quot;">​</a></h4><p>可能出现的错误码：<code>1202</code>、<code>1203</code>，错误码具体含义 <a href="./error_code.html">点此查看</a></p><details class="details custom-block"><summary>内容示例</summary><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1202</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>`,40);function u(E,b,g,m,y,F){const i=n("Badge");return h(),e("div",null,[a("h1",r,[s("Open API "),k,s(" (开放的API接口) "),l(i,{type:"warning",text:"beta"}),s(),o]),c])}const v=t(d,[["render",u]]);export{C as __pageData,v as default};