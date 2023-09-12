import{_ as s,o as a,c as p,S as n}from"./chunks/framework.350e47e2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/35.md","filePath":"largeFrontEnd/webFrontEnd/md/35.md","lastUpdated":null}'),l={name:"largeFrontEnd/webFrontEnd/md/35.md"},e=n(`<h2 id="三、html5css3" tabindex="-1">三、HTML5CSS3 <a class="header-anchor" href="#三、html5css3" aria-label="Permalink to &quot;三、HTML5CSS3&quot;">​</a></h2><h3 id="_1-语义化的理解。" tabindex="-1">1.语义化的理解。 <a class="header-anchor" href="#_1-语义化的理解。" aria-label="Permalink to &quot;1.语义化的理解。&quot;">​</a></h3><p>​ 在写HTML页面结构时所用的标签有意义</p><p>​ 头部用head 主体用main 底部用footer...</p><p>​ 怎么判断页面语义化了？</p><p>​ 把css去掉，如果能够清晰看出来页面结构，显示内容较为正常</p><p>​ 为什么要选择语义化？</p><p>​ 1.让HTML结构更加清晰明了</p><p>​ 2.方便团队协作，有利于开发</p><p>​ 3.有利于爬虫和SEO</p><p>​ 4.能够让浏览器更好地去解析代码</p><p>​ 5.给用户带来良好的体验</p><h3 id="_2-h5c3有哪些新特性" tabindex="-1">2.H5C3有哪些新特性？ <a class="header-anchor" href="#_2-h5c3有哪些新特性" aria-label="Permalink to &quot;2.H5C3有哪些新特性？&quot;">​</a></h3><p>​ H5新特性：</p><p>​ 1.语义化标签</p><p>​ 2.新增音视频</p><p>​ 3.画布canvas</p><p>​ 4.数据存储localstorage sessionstorage</p><p>​ 5.增加了一些表单控件 email url search...</p><p>​ 6.拖拽释放api</p><p>​ CSS3新特性：</p><p>​ 1.新增选择器：属性选择器、伪类选择器、伪元素选择器</p><p>​ 2.增加了媒体查询</p><p>​ 3.文字阴影</p><p>​ 4.边框</p><p>​ 5.盒子模型：box-sizing</p><p>​ 6.渐变</p><p>​ 7.过渡</p><p>​ 8.自定义动画</p><p>​ 9.有背景的属性</p><p>​ 10.2D和3D</p><h3 id="_3-rem是如何做适配的" tabindex="-1">3.rem是如何做适配的？ <a class="header-anchor" href="#_3-rem是如何做适配的" aria-label="Permalink to &quot;3.rem是如何做适配的？&quot;">​</a></h3><p>​ rem是相对长度，相对于根元素（html）的font-size属性来计算大小，通常来做移动端的适配</p><p>​ rem是根据根元素font-size计算值的倍数</p><p>​ 比如html上的font-size：16px；给div设置宽为1.5rem=（16x1.5）px</p><h3 id="_4-解决了哪些移动端的兼容问题" tabindex="-1">4.解决了哪些移动端的兼容问题？ <a class="header-anchor" href="#_4-解决了哪些移动端的兼容问题" aria-label="Permalink to &quot;4.解决了哪些移动端的兼容问题？&quot;">​</a></h3><p>​ 1.当设置样式over-flow：scroll/auto时，IOS上的滑动会卡顿</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">-webkit-overflow-scolling:touch;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">-webkit-overflow-scolling:touch;</span></span></code></pre></div><p>​ 2.在安卓环境下placeholder文字设置行高是会偏上</p><p>​ input有placeholder属性时不要设置行高</p><p>​ 3.移动端字体小于12px时显示异常</p><p>​ 应该先把字体放大一倍，然后再用transform进行缩小</p><p>​ 4.ios下input按钮设置了disabled属性为true显示异常</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">button</span><span style="color:#E1E4E8;">]{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">opcity</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">button</span><span style="color:#24292E;">]{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">opcity</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>​ 5.安卓手机下取消语音输入按钮</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">input</span><span style="color:#B392F0;">::-webkit-input-speech-button</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">input</span><span style="color:#6F42C1;">::-webkit-input-speech-button</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>​ 6.IOS下取消input输入框在输入英文首字母默认大写</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">autocapitalize</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">autocorrect</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;off&#39;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autocapitalize</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autocorrect</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;off&#39;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>​ 7.禁用IOS和安卓用户选中文字</p><p>​ 添加全局样式：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">-webkit-user-select:none</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">-webkit-user-select:none</span></span></code></pre></div><p>​ 8.禁止IOS弹出各种窗口</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">-wenkit-touch-callout:none;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">-wenkit-touch-callout:none;</span></span></code></pre></div><p>​ 9.禁止IOS识别长串数字为电话</p><p>​ 添加meta属性：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">conten</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;telephone=none&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;format-detection&#39;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">conten</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;telephone=none&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;format-detection&#39;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,56),o=[e];function t(c,r,i,d,E,y){return a(),p("div",null,o)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};