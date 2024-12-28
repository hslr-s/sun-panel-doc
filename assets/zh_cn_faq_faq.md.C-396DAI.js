import{_ as a,c as e,o,a4 as r}from"./chunks/framework.BTxZwHw0.js";const k=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"zh_cn/faq/faq.md","filePath":"zh_cn/faq/faq.md","lastUpdated":1735395968000}'),c={name:"zh_cn/faq/faq.md"},l=r('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果以下问题仍然无法解决你的问题，可以通过 <a href="/zh_cn/introduce/author_groups.html">社群</a> 寻求帮助</p></div><h2 id="登录时效是多久-总是让我频繁登录" tabindex="-1">登录时效是多久，总是让我频繁登录 <a class="header-anchor" href="#登录时效是多久-总是让我频繁登录" aria-label="Permalink to &quot;登录时效是多久，总是让我频繁登录&quot;">​</a></h2><p><code>v1.4.0</code> 及版本之前版本登录一次的时效是72小时，然后72小时内只要访问一次就会再次续期72小时。<code>v1.4.0</code> 以后版本默认改为了168小时（7天），仍保留续期机制，并支持在 <a href="./../advanced/config.html">配置文件</a> 自行配置过期时长。打开配置文件在 <code>base</code> 块下找到 <code>token_expires=168</code> 将 <code>168</code> 改为你想设置的小时数值，保存之后，重启项目后生效。</p><h2 id="导入导出是备份功能吗" tabindex="-1">导入导出是备份功能吗 <a class="header-anchor" href="#导入导出是备份功能吗" aria-label="Permalink to &quot;导入导出是备份功能吗&quot;">​</a></h2><p>导入导出不是备份功能，它只能导出图标卡片基本配置的json格式文件，不能导出图片文件，目前项目没有自带的备份功能，后期会考虑加入。</p><h2 id="docker-版本升级后数据丢失了" tabindex="-1">docker 版本升级后数据丢失了 <a class="header-anchor" href="#docker-版本升级后数据丢失了" aria-label="Permalink to &quot;docker 版本升级后数据丢失了&quot;">​</a></h2><ol><li>在v1.4.0版本做了docker精简了挂载目录，请严格按照教程升级。</li><li>挂载目录不正确，请检查路径并区分大小写</li></ol><h2 id="docker_card_abnormal" tabindex="-1">项目的 docker 卡片显示异常 <a class="header-anchor" href="#docker_card_abnormal" aria-label="Permalink to &quot;项目的 docker 卡片显示异常 {#docker_card_abnormal}&quot;">​</a></h2><p>请使用 <code>docker</code> 管理工具检查是否删除卡片绑定的容器，或者是否升级了该绑定容器。如果升级了该容器，卡片绑定的旧容器ID将不可用。在 <code>v1.5.2</code> 及以上版本（出于安全考虑，需登录后）会尝试自动重新绑定，如未自动绑定，可以手动编辑卡片重新选择容器。</p><h2 id="docker_run_error" tabindex="-1">可能导致 docker 功能不能正常使用的原因 <a class="header-anchor" href="#docker_run_error" aria-label="Permalink to &quot;可能导致 docker 功能不能正常使用的原因 {#docker_run_error}&quot;">​</a></h2><ol><li>在容器运行环境下，请确认是否挂载了<code>docker.sock</code>，具体请参考<a href="./../usage/quick_deploy.html#docker_run">部署教程</a>，如果可视化工具不支持挂载，请使用命令行（ssh）的方式运行。</li><li>请检查系统是否对本项目开放了使用 docker 的权限。</li><li>具体可以根据错误提示寻找相关解决方案。</li></ol><h2 id="linux-二进制版本无法运行" tabindex="-1">Linux 二进制版本无法运行 <a class="header-anchor" href="#linux-二进制版本无法运行" aria-label="Permalink to &quot;Linux 二进制版本无法运行&quot;">​</a></h2><p>在 github 的 <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">releases</a> 下载的二进制Linux版本无法运行，可以尝试下载带有 <code>musl</code> 标记的版本运行。</p><h2 id="内外网环境-模式-是什么-能否只显示对应的图标卡片" tabindex="-1">内外网环境（模式）是什么；能否只显示对应的图标卡片 <a class="header-anchor" href="#内外网环境-模式-是什么-能否只显示对应的图标卡片" aria-label="Permalink to &quot;内外网环境（模式）是什么；能否只显示对应的图标卡片&quot;">​</a></h2><p>作者所谓的内网环境和外网环境可以理解为，我们当前所处于的真实环境。</p><p>比如说项目（Sun-Panel）部署机在家，我们目前也在家访问项目，那么我们可以将家中电脑的 Sun-Panel 环境设置为内网环境。而将在家以外常用电脑的 Sun-Panel 环境设置为外网环境。不需要频繁切换，也不怕混淆。</p><p>基于以上理解考虑到处于内网环境也需要访问外网地址或者相反，所以没有对图标的内外网环境区分显示。</p><h2 id="自定义页脚不能执行js-script标签-代码" tabindex="-1">自定义页脚不能执行js（script标签）代码 <a class="header-anchor" href="#自定义页脚不能执行js-script标签-代码" aria-label="Permalink to &quot;自定义页脚不能执行js（script标签）代码&quot;">​</a></h2><p>由于框架安全限制，暂时不支持，后期将找办法支持。暂时可以通过 <a href="./../advanced/custom_js_css.html">自定义js</a> 来实现此功能。</p><h2 id="docker-版本系统监控挂载宿主机磁盘教程" tabindex="-1">docker 版本系统监控挂载宿主机磁盘教程 <a class="header-anchor" href="#docker-版本系统监控挂载宿主机磁盘教程" aria-label="Permalink to &quot;docker 版本系统监控挂载宿主机磁盘教程&quot;">​</a></h2><p>用挂载的方式将磁盘挂载到容器的目录中，例如:<code>-v /mnt/usb2-2:/sata1</code>。其中 <code>/mnt/usb2-2</code> 为宿主机路径，<code>/sata1</code> 为映射的路径，名字可以自己随便定义。</p><h2 id="设置为浏览器首页" tabindex="-1">设置为浏览器首页 <a class="header-anchor" href="#设置为浏览器首页" aria-label="Permalink to &quot;设置为浏览器首页&quot;">​</a></h2><p>参考<a href="./../browser_extension/">Sun-Panel BE</a></p><h2 id="proAccountInvalid" tabindex="-1">PRO 授权账号登录失效 <a class="header-anchor" href="#proAccountInvalid" aria-label="Permalink to &quot;PRO 授权账号登录失效 {#proAccountInvalid}&quot;">​</a></h2><ul><li><p>正常使用中授权账号失效，可能原因：</p><ol><li>授权账号的密码被修改</li><li>更新了版本，由于授权策略可能随新版版本更新，可能会导致这个问题</li><li>超出了最大同时登录的客户端数量限制，前期登录的客户端会被后期登录的客户端挤下线</li></ol></li><li><p>解决方案：</p><p>重新手动登录一下授权账号即可</p></li></ul>',26),d=[l];function t(i,n,s,h,u,p){return o(),e("div",null,d)}const b=a(c,[["render",t]]);export{k as __pageData,b as default};