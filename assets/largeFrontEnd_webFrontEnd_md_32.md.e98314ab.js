import{_ as s,o as n,c as a,S as l}from"./chunks/framework.350e47e2.js";const h=JSON.parse('{"title":"Ajax","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/32.md","filePath":"largeFrontEnd/webFrontEnd/md/32.md","lastUpdated":null}'),p={name:"largeFrontEnd/webFrontEnd/md/32.md"},o=l(`<h1 id="ajax" tabindex="-1">Ajax <a class="header-anchor" href="#ajax" aria-label="Permalink to &quot;Ajax&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">xhr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//2.初始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:8000/server?a=1&amp;b=2&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onreadystatechange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.readystate </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.status </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> xhr.status </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.</span><span style="color:#B392F0;">getAllResponseHeaders</span><span style="color:#E1E4E8;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xhr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//2.初始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;http://127.0.0.1:8000/server?a=1&amp;b=2&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onreadystatechange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.readystate </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.</span><span style="color:#6F42C1;">getAllResponseHeaders</span><span style="color:#24292E;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="post请求设置请求体" tabindex="-1">post请求设置请求体 <a class="header-anchor" href="#post请求设置请求体" aria-label="Permalink to &quot;post请求设置请求体&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">xhr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//2.初始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:8000/server&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#6A737D;">//xhr.send(&#39;a=1&amp;b=2&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a:1&amp;b:2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onreadystatechange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.readystate </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.status </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> xhr.status </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.</span><span style="color:#B392F0;">getAllResponseHeaders</span><span style="color:#E1E4E8;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xhr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//2.初始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;http://127.0.0.1:8000/server&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#6A737D;">//xhr.send(&#39;a=1&amp;b=2&#39;);</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a:1&amp;b:2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onreadystatechange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.readystate </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.</span><span style="color:#6F42C1;">getAllResponseHeaders</span><span style="color:#24292E;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="设置请求头" tabindex="-1">设置请求头 <a class="header-anchor" href="#设置请求头" aria-label="Permalink to &quot;设置请求头&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">xhr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//设置响应体数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.responseType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;jso</span><span style="color:#FDAEB7;font-style:italic;">n</span></span>
<span class="line"><span style="color:#6A737D;">//超时设置2s</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.timeout </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//超时回调</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">ontimeout</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;超时了&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">//网络异常回调</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onerror</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;网络异常&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">///2.始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:8000/server&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//设置请求头</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">setRequestHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;application/x-www-form-urlencoded&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#6A737D;">//xhr.send(&#39;a=1&amp;b=2&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a:1&amp;b:2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#E1E4E8;">xhr.</span><span style="color:#B392F0;">onreadystatechange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.readystate </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(xhr.status </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> xhr.status </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.</span><span style="color:#B392F0;">getAllResponseHeaders</span><span style="color:#E1E4E8;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.创建对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xhr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//设置响应体数据类型</span></span>
<span class="line"><span style="color:#24292E;">xhr.responseType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;jso</span><span style="color:#B31D28;font-style:italic;">n</span></span>
<span class="line"><span style="color:#6A737D;">//超时设置2s</span></span>
<span class="line"><span style="color:#24292E;">xhr.timeout </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//超时回调</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">ontimeout</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;超时了&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//网络异常回调</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onerror</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;网络异常&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">///2.始化 设置请求方法和 url</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;http://127.0.0.1:8000/server&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//设置请求头</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">setRequestHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;application/x-www-form-urlencoded&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//3.发送</span></span>
<span class="line"><span style="color:#6A737D;">//xhr.send(&#39;a=1&amp;b=2&#39;);</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a:1&amp;b:2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//4.事件绑定 处理服务器端返回的结果</span></span>
<span class="line"><span style="color:#6A737D;">//on when </span></span>
<span class="line"><span style="color:#6A737D;">// readystate 是xhr对象中的属性,表示状态 0 1 2 3 4</span></span>
<span class="line"><span style="color:#6A737D;">//change 改变</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onreadystatechange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断(服务端返回了所有结果)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.readystate </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断响应状态码 200 404 403 401 500</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 2xx 成功</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(xhr.status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//处理结果 行 头 空行 体</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//1.响应行</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.status);</span><span style="color:#6A737D;">//状态码</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.statusText);</span><span style="color:#6A737D;">//状态字符串</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.</span><span style="color:#6F42C1;">getAllResponseHeaders</span><span style="color:#24292E;">());</span><span style="color:#6A737D;">//所有响应头</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.response);</span><span style="color:#6A737D;">//响应体</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="jquery中使用ajax" tabindex="-1">Jquery中使用ajax <a class="header-anchor" href="#jquery中使用ajax" aria-label="Permalink to &quot;Jquery中使用ajax&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//四个参数 url 参数 回调函数 数据格式</span></span>
<span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#E1E4E8;">$.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:9000/server&#39;</span><span style="color:#E1E4E8;">,{a:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,b:</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">},</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//post请求</span></span>
<span class="line"><span style="color:#E1E4E8;">$.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:9000/server&#39;</span><span style="color:#E1E4E8;">,{a:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,b:</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">},</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">//jquery通用方法</span></span>
<span class="line"><span style="color:#E1E4E8;">$.</span><span style="color:#B392F0;">ajax</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url</span></span>
<span class="line"><span style="color:#E1E4E8;">    url:</span><span style="color:#9ECBFF;">&#39;http:127.0.0.1:9000/server&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    data:{a:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,b:</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//响应体结果设置</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataType:</span><span style="color:#9ECBFF;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//成功的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">    success:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//超时事件</span></span>
<span class="line"><span style="color:#E1E4E8;">	timeout:</span><span style="color:#79B8FF;">2000</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//失败回调</span></span>
<span class="line"><span style="color:#E1E4E8;">	error:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;出错了&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//	头信息</span></span>
<span class="line"><span style="color:#E1E4E8;">	headers:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        c:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        d:</span><span style="color:#79B8FF;">200</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//四个参数 url 参数 回调函数 数据格式</span></span>
<span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#24292E;">$.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http://127.0.0.1:9000/server&#39;</span><span style="color:#24292E;">,{a:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,b:</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">},</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;">},</span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//post请求</span></span>
<span class="line"><span style="color:#24292E;">$.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http://127.0.0.1:9000/server&#39;</span><span style="color:#24292E;">,{a:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,b:</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">},</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">//jquery通用方法</span></span>
<span class="line"><span style="color:#24292E;">$.</span><span style="color:#6F42C1;">ajax</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url</span></span>
<span class="line"><span style="color:#24292E;">    url:</span><span style="color:#032F62;">&#39;http:127.0.0.1:9000/server&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//参数</span></span>
<span class="line"><span style="color:#24292E;">    data:{a:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,b:</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求类型</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//响应体结果设置</span></span>
<span class="line"><span style="color:#24292E;">    dataType:</span><span style="color:#032F62;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//成功的回调</span></span>
<span class="line"><span style="color:#24292E;">    success:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//超时事件</span></span>
<span class="line"><span style="color:#24292E;">	timeout:</span><span style="color:#005CC5;">2000</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//失败回调</span></span>
<span class="line"><span style="color:#24292E;">	error:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;出错了&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//	头信息</span></span>
<span class="line"><span style="color:#24292E;">	headers:{</span></span>
<span class="line"><span style="color:#24292E;">        c:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        d:</span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="axios发送ajax请求" tabindex="-1">Axios发送Ajax请求 <a class="header-anchor" href="#axios发送ajax请求" aria-label="Permalink to &quot;Axios发送Ajax请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//配置baseURL</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.baseURL </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://127.0.0.1:9000&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/server&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    params:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        id:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        vip:</span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age:</span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//post请求</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/server&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">    username:</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password:</span><span style="color:#9ECBFF;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    params:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        id:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        vip:</span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age:</span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//配置baseURL</span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.baseURL </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://127.0.0.1:9000&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//get请求</span></span>
<span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/server&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#24292E;">    params:{</span></span>
<span class="line"><span style="color:#24292E;">        id:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        vip:</span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#24292E;">    headers:{</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age:</span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//post请求</span></span>
<span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/server&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">    username:</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    password:</span><span style="color:#032F62;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#24292E;">    params:{</span></span>
<span class="line"><span style="color:#24292E;">        id:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        vip:</span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#24292E;">    headers:{</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age:</span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="axios函数发送ajax请求" tabindex="-1">Axios函数发送ajax请求 <a class="header-anchor" href="#axios函数发送ajax请求" aria-label="Permalink to &quot;Axios函数发送ajax请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    method:</span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url</span></span>
<span class="line"><span style="color:#E1E4E8;">    url:</span><span style="color:#9ECBFF;">&#39;/axios-server&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    params:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        id:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        vip:</span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age:</span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求头参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        username:</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        password:</span><span style="color:#9ECBFF;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求方法</span></span>
<span class="line"><span style="color:#24292E;">    method:</span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url</span></span>
<span class="line"><span style="color:#24292E;">    url:</span><span style="color:#032F62;">&#39;/axios-server&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url参数</span></span>
<span class="line"><span style="color:#24292E;">    params:{</span></span>
<span class="line"><span style="color:#24292E;">        id:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        vip:</span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求头信息</span></span>
<span class="line"><span style="color:#24292E;">    headers:{</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age:</span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求头参数</span></span>
<span class="line"><span style="color:#24292E;">    data:{</span></span>
<span class="line"><span style="color:#24292E;">        username:</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        password:</span><span style="color:#032F62;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="使用fetch函数发送ajax请求" tabindex="-1">使用fetch函数发送ajax请求 <a class="header-anchor" href="#使用fetch函数发送ajax请求" aria-label="Permalink to &quot;使用fetch函数发送ajax请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http:127.0.0.1:9000/server&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    method:</span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求头</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:</span><span style="color:#9ECBFF;">&#39;lg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//请求体</span></span>
<span class="line"><span style="color:#E1E4E8;">    body:</span><span style="color:#9ECBFF;">&#39;username=admin&amp;password=admin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//return res.text();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http:127.0.0.1:9000/server&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求方法</span></span>
<span class="line"><span style="color:#24292E;">    method:</span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求头</span></span>
<span class="line"><span style="color:#24292E;">    headers:{</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&#39;lg&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//请求体</span></span>
<span class="line"><span style="color:#24292E;">    body:</span><span style="color:#032F62;">&#39;username=admin&amp;password=admin&#39;</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//return res.text();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,14),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{h as __pageData,d as default};
