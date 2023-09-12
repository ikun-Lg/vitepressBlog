import{_ as s,o as n,c as a,S as l}from"./chunks/framework.350e47e2.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/28.md","filePath":"largeFrontEnd/webFrontEnd/md/28.md","lastUpdated":null}'),p={name:"largeFrontEnd/webFrontEnd/md/28.md"},o=l(`<h3 id="path模块" tabindex="-1">path模块 <a class="header-anchor" href="#path模块" aria-label="Permalink to &quot;path模块&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//resolve 解决</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname,</span><span style="color:#9ECBFF;">&#39;./index.html&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//sep 分隔符</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.sep); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//parse 方法 __dirname &#39;全局变量&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(__filename); </span><span style="color:#6A737D;">//文件的绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">nodejs</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(str));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//basename</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">basename</span><span style="color:#E1E4E8;">(str));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//extname</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(str));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//resolve 解决</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname,</span><span style="color:#032F62;">&#39;./index.html&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//sep 分隔符</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.sep); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//parse 方法 __dirname &#39;全局变量&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(__filename); </span><span style="color:#6A737D;">//文件的绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">nodejs</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(str));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//basename</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">basename</span><span style="color:#24292E;">(str));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//extname</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(str));</span></span></code></pre></div>`,2),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{h as __pageData,_ as default};
