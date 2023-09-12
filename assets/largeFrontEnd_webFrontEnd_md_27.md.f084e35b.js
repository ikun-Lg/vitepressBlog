import{_ as s,o as n,c as a,S as l}from"./chunks/framework.350e47e2.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/27.md","filePath":"largeFrontEnd/webFrontEnd/md/27.md","lastUpdated":null}'),p={name:"largeFrontEnd/webFrontEnd/md/27.md"},o=l(`<h3 id="fs模块" tabindex="-1">fs模块 <a class="header-anchor" href="#fs模块" aria-label="Permalink to &quot;fs模块&quot;">​</a></h3><h6 id="_1-写入文件" tabindex="-1">1.写入文件 <a class="header-anchor" href="#_1-写入文件" aria-label="Permalink to &quot;1.写入文件&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 需求：</span></span>
<span class="line"><span style="color:#6A737D;">// 新建一个文件，座右铭.txt，写入内容：三人行，则必有我师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.写入文件</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./座右铭.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;三人行，则必有我师焉&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//err 写入失败：错误对象 写入成功：null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 需求：</span></span>
<span class="line"><span style="color:#6A737D;">// 新建一个文件，座右铭.txt，写入内容：三人行，则必有我师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.写入文件</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./座右铭.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;三人行，则必有我师焉&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//err 写入失败：错误对象 写入成功：null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;写入失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;写入成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_2-异步与同步" tabindex="-1">2.异步与同步 <a class="header-anchor" href="#_2-异步与同步" aria-label="Permalink to &quot;2.异步与同步&quot;">​</a></h6><p>异步：先打印1111，后打印写入成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 需求：</span></span>
<span class="line"><span style="color:#e1e4e8;">// 新建一个文件，座右铭.txt，写入内容：三人行，则必有我师</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#e1e4e8;">const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//2.写入文件</span></span>
<span class="line"><span style="color:#e1e4e8;">fs.writeFile(&#39;./座右铭.txt&#39;,&#39;三人行，则必有我师焉&#39;,err =&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">    //err 写入失败：错误对象 写入成功：null</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (err) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;写入失败&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;写入成功&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(1111);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 需求：</span></span>
<span class="line"><span style="color:#24292e;">// 新建一个文件，座右铭.txt，写入内容：三人行，则必有我师</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#24292e;">const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//2.写入文件</span></span>
<span class="line"><span style="color:#24292e;">fs.writeFile(&#39;./座右铭.txt&#39;,&#39;三人行，则必有我师焉&#39;,err =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    //err 写入失败：错误对象 写入成功：null</span></span>
<span class="line"><span style="color:#24292e;">    if (err) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;写入失败&#39;);</span></span>
<span class="line"><span style="color:#24292e;">        return;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;写入成功&#39;);</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(1111);</span></span></code></pre></div><p>同步：按代码顺序执行</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//同步写入</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./data.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//同步写入</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./data.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h6 id="_3-文件追加写入" tabindex="-1">3.文件追加写入 <a class="header-anchor" href="#_3-文件追加写入" aria-label="Permalink to &quot;3.文件追加写入&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.引入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用appendFile</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">appendFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./座右铭.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;，择其善者而从之，其不善者而改之&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入失败~~&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;追加写入成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">//同步</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">appendFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./座右铭.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\r\\n</span><span style="color:#9ECBFF;">温故而知新，可以为师矣&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加flag:a进行追加写入</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./座右铭.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;love love&#39;</span><span style="color:#E1E4E8;">,{flag:</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">},</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(err){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;写入成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.引入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用appendFile</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">appendFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./座右铭.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;，择其善者而从之，其不善者而改之&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;写入失败~~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;追加写入成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">//同步</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">appendFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./座右铭.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">温故而知新，可以为师矣&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加flag:a进行追加写入</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./座右铭.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;love love&#39;</span><span style="color:#24292E;">,{flag:</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">},</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(err){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;写入失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;写入成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_4-fs流式写入" tabindex="-1">4.fs流式写入 <a class="header-anchor" href="#_4-fs流式写入" aria-label="Permalink to &quot;4.fs流式写入&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 观书有感</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建写入流对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createWriteStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./观书有感.txt&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.write</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你干嘛</span><span style="color:#79B8FF;">\\r\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;哎哟&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;是不是有病</span><span style="color:#79B8FF;">\\r\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.关闭通道</span></span>
<span class="line"><span style="color:#E1E4E8;">ws.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 观书有感</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建写入流对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createWriteStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./观书有感.txt&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.write</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;你干嘛</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;哎哟&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;是不是有病</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.关闭通道</span></span>
<span class="line"><span style="color:#24292E;">ws.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span></code></pre></div><h6 id="_5-文件读取" tabindex="-1">5.文件读取 <a class="header-anchor" href="#_5-文件读取" aria-label="Permalink to &quot;5.文件读取&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1.引入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.异步读取</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./观书有感.txt&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.同步读取</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./观书有感.txt&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1.引入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.异步读取</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./观书有感.txt&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;读取失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.同步读取</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./观书有感.txt&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">());</span></span></code></pre></div><h6 id="_6-流式读取" tabindex="-1">6.流式读取 <a class="header-anchor" href="#_6-流式读取" aria-label="Permalink to &quot;6.流式读取&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//引入 fs 模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建读取流对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img.png&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.绑定data事件 chunk 块儿</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">chunk</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(chunk.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//65536字节 =&gt;64kb</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.绑定end事件</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">,()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取完成&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//引入 fs 模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建读取流对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img.png&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.绑定data事件 chunk 块儿</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">chunk</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(chunk.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//65536字节 =&gt;64kb</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.绑定end事件</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;end&#39;</span><span style="color:#24292E;">,()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;读取完成&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_7-练习文件复制" tabindex="-1">7.练习文件复制 <a class="header-anchor" href="#_7-练习文件复制" aria-label="Permalink to &quot;7.练习文件复制&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 需求: 复制图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//方式一  readFile</span></span>
<span class="line"><span style="color:#6A737D;">//读取文件内容</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img.png&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//写入文件</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img2.png&#39;</span><span style="color:#E1E4E8;">, data)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//方式二 流式操作</span></span>
<span class="line"><span style="color:#6A737D;">//创建读取流对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img.png&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//创建写入流对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">createWriteStream</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img3.png&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//绑定data事件</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">chunk</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    ws.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(chunk)</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 需求: 复制图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//方式一  readFile</span></span>
<span class="line"><span style="color:#6A737D;">//读取文件内容</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img.png&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//写入文件</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img2.png&#39;</span><span style="color:#24292E;">, data)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//方式二 流式操作</span></span>
<span class="line"><span style="color:#6A737D;">//创建读取流对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createReadStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img.png&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//创建写入流对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">createWriteStream</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img3.png&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//绑定data事件</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">chunk</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    ws.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(chunk)</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h6 id="_8-文件移动与重命名" tabindex="-1">8.文件移动与重命名 <a class="header-anchor" href="#_8-文件移动与重命名" aria-label="Permalink to &quot;8.文件移动与重命名&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs 模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用rename 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rename</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./座右铭.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./论语.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作失败\`&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3文件的移动</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rename</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./data.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./static/data.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作失败\`&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs 模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用rename 方法</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rename</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./座右铭.txt&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./论语.txt&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;操作失败\`&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;操作成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3文件的移动</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rename</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./data.txt&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./static/data.txt&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;操作失败\`&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;操作成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_9-fs文件删除" tabindex="-1">9.fs文件删除 <a class="header-anchor" href="#_9-fs文件删除" aria-label="Permalink to &quot;9.fs文件删除&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;console&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用unlink 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">unlink</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./观书有感.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除失败~~&#39;</span><span style="color:#E1E4E8;">);        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">     console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.调用rm方法</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./论语.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">log</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;console&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.调用unlink 方法</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">unlink</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./观书有感.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除失败~~&#39;</span><span style="color:#24292E;">);        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.调用rm方法</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./论语.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_10-文件夹操作" tabindex="-1">10.文件夹操作 <a class="header-anchor" href="#_10-文件夹操作" aria-label="Permalink to &quot;10.文件夹操作&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建文件夹 mk make制作 dir directory文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./html&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;创建失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;创建成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.2递归创建</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./a/b/c&#39;</span><span style="color:#E1E4E8;">,{recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">},</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;创建失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;创建成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.3读取文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./&#39;</span><span style="color:#E1E4E8;">,(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;读取失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.4删除文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rmdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./html&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//递归删除 不建议使用</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rmdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./a&#39;</span><span style="color:#E1E4E8;">,{recursive:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">},</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//建议使用</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rmdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./a&#39;</span><span style="color:#E1E4E8;">, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.创建文件夹 mk make制作 dir directory文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./html&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;创建失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;创建成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.2递归创建</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./a/b/c&#39;</span><span style="color:#24292E;">,{recursive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">},</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;创建失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;创建成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.3读取文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./&#39;</span><span style="color:#24292E;">,(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">,</span><span style="color:#E36209;">data</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;读取失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.4删除文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rmdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./html&#39;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//递归删除 不建议使用</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rmdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./a&#39;</span><span style="color:#24292E;">,{recursive:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">},</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//建议使用</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rmdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./a&#39;</span><span style="color:#24292E;">, { recursive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_11-查看文件资源信息" tabindex="-1">11.查看文件资源信息 <a class="header-anchor" href="#_11-查看文件资源信息" aria-label="Permalink to &quot;11.查看文件资源信息&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//2.stat方法 status缩写 状态</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">stat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./static/img.png&#39;</span><span style="color:#E1E4E8;">,(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;操作失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//isFile</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">isFile</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//2.stat方法 status缩写 状态</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">stat</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./static/img.png&#39;</span><span style="color:#24292E;">,(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">,</span><span style="color:#E36209;">data</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;操作失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(data);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//isFile</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">isFile</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h6 id="_12-两种路径" tabindex="-1">12.两种路径 <a class="header-anchor" href="#_12-两种路径" aria-label="Permalink to &quot;12.两种路径&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//相对路径</span></span>
<span class="line"><span style="color:#6A737D;">// fs.writeFileSync(&#39;./index.html&#39;,&#39;love&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">// fs.writeFileSync(&#39;index.html&#39;,&#39;love&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">writeFileSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;D:/index.html&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;love&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//相对路径</span></span>
<span class="line"><span style="color:#6A737D;">// fs.writeFileSync(&#39;./index.html&#39;,&#39;love&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">// fs.writeFileSync(&#39;index.html&#39;,&#39;love&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//绝对路径</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">writeFileSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D:/index.html&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;love&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h6 id="_13-fs练习-批量重命名" tabindex="-1">13.fs练习--批量重命名 <a class="header-anchor" href="#_13-fs练习-批量重命名" aria-label="Permalink to &quot;13.fs练习--批量重命名&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.导入 fs 模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//读取code文件夹</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">files</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fs.</span><span style="color:#B392F0;">readdirSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./code&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//遍历数组</span></span>
<span class="line"><span style="color:#E1E4E8;">files.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//拆分文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [num, name] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(num) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> num;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//创建新的文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//重命名</span></span>
<span class="line"><span style="color:#E1E4E8;">    fs.</span><span style="color:#B392F0;">renameSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`./code/\${</span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`./code/\${</span><span style="color:#E1E4E8;">newName</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.导入 fs 模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//读取code文件夹</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">files</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fs.</span><span style="color:#6F42C1;">readdirSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./code&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//遍历数组</span></span>
<span class="line"><span style="color:#24292E;">files.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//拆分文件名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [num, name] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(num) </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//创建新的文件夹</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//重命名</span></span>
<span class="line"><span style="color:#24292E;">    fs.</span><span style="color:#6F42C1;">renameSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`./code/\${</span><span style="color:#24292E;">item</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`./code/\${</span><span style="color:#24292E;">newName</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,30),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{C as __pageData,g as default};
