import{_ as s,o as n,c as a,S as l}from"./chunks/framework.350e47e2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/25.md","filePath":"largeFrontEnd/webFrontEnd/md/25.md","lastUpdated":null}'),p={name:"largeFrontEnd/webFrontEnd/md/25.md"},o=l(`<h3 id="buffer-缓冲器" tabindex="-1">buffer(缓冲器) <a class="header-anchor" href="#buffer-缓冲器" aria-label="Permalink to &quot;buffer(缓冲器)&quot;">​</a></h3><p>1.创建buffer</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 有三种创建方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.alloc</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">alloc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.allocUnsafe</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">allocUnsafe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf_2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.from</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf_3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf_3);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 有三种创建方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1.alloc</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">alloc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2.allocUnsafe</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf_2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">allocUnsafe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf_2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.from</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf_3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf_3);</span></span></code></pre></div><p>2.操作buffer</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//buffer 与字符串的转换*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf_4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">105</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">108</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">118</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">121</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">127</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf_4.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">//utf-8*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#6A737D;">//[]*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">buf[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">95</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#6A737D;">//溢出*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">buf[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">361</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//舍弃高位的数字</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#6A737D;">//中文*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你好&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//buffer 与字符串的转换*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf_4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">105</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">108</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">118</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">101</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">121</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">127</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf_4.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">//utf-8*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#6A737D;">//[]*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">95</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#6A737D;">//溢出*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">361</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//舍弃高位的数字</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#6A737D;">//中文*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;你好&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf);</span></span></code></pre></div>`,5),e=[o];function c(t,r,y,E,i,f){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
