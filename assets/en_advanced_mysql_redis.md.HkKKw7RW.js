import{_ as s,o as a,c as n,R as i}from"./chunks/framework.BQ8N8sdH.js";const u=JSON.parse('{"title":"Using MySQL/Redis","description":"","frontmatter":{},"headers":[],"relativePath":"en/advanced/mysql_redis.md","filePath":"en/advanced/mysql_redis.md","lastUpdated":1704531368000}'),e={name:"en/advanced/mysql_redis.md"},l=i(`<h1 id="using-mysql-redis" tabindex="-1">Using MySQL/Redis <a class="header-anchor" href="#using-mysql-redis" aria-label="Permalink to &quot;Using MySQL/Redis&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The project defaults to using <code>Sqlite3</code> as the database and <code>Memory</code> as the cache. The program supports <code>mysql</code> and <code>redis</code>, but the author has not tested them. Please use them with caution.</p><p>If you choose to proceed, the author encourages you to provide feedback on your experience, and please make sure to backup your data beforehand.</p></div><p>Locate the project&#39;s <a href="./config.html">configuration file</a>.</p><p>Modify the key parts as follows:</p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Basic configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[base]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Web run port. Default:3002</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http_port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3002</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Database driver [mysql/sqlite(Default)]</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">database_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=mysql</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Cache driver [redis/memory(Default)]</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cache_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=redis</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Queue driver [redis/memory(Default)]</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">queue_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=redis</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># File cache path (Please start with the current path &#39;./&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Warning: The files that have been uploaded after the modification cannot be accessed</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">source_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./uploads</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># File cache path.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">source_temp_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./runtime/temp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Mysql database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mysql]</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3306</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=root</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=root</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">db_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sun_panel</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">wait_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sqlite database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[sqlite]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">file_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./database/database.db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># redis database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[redis]</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1:6379</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sun_panel:</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,5),p=[l];function h(t,r,k,c,d,o){return a(),n("div",null,p)}const g=s(e,[["render",h]]);export{u as __pageData,g as default};
