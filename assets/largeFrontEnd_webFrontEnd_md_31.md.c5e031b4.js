import{_ as s,o as n,c as a,S as l}from"./chunks/framework.350e47e2.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/31.md","filePath":"largeFrontEnd/webFrontEnd/md/31.md","lastUpdated":null}'),p={name:"largeFrontEnd/webFrontEnd/md/31.md"},o=l(`<h3 id="mongodb" tabindex="-1">Mongodb <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;Mongodb&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1.插入文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.集合名.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(文档对象)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">2.查询文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.集合名.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(查询条件)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">3.更新文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.集合名.</span><span style="color:#B392F0;">uoodate</span><span style="color:#E1E4E8;">(查询条件，新的文档)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">4.删除文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.集合名.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(查询条件)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1.插入文档</span></span>
<span class="line"><span style="color:#24292E;">db.集合名.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(文档对象)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">2.查询文档</span></span>
<span class="line"><span style="color:#24292E;">db.集合名.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(查询条件)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">3.更新文档</span></span>
<span class="line"><span style="color:#24292E;">db.集合名.</span><span style="color:#6F42C1;">uoodate</span><span style="color:#24292E;">(查询条件，新的文档)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">4.删除文档</span></span>
<span class="line"><span style="color:#24292E;">db.集合名.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(查询条件)</span></span></code></pre></div><h4 id="mongose" tabindex="-1">mongose <a class="header-anchor" href="#mongose" aria-label="Permalink to &quot;mongose&quot;">​</a></h4><h6 id="_1-mongose链接数据库" tabindex="-1">1.mongose链接数据库 <a class="header-anchor" href="#_1-mongose链接数据库" aria-label="Permalink to &quot;1.mongose链接数据库&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongoose&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">,()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//app.listen(8080)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接成功的回调 once 一次</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">,()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    mongoose.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongoose&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">,()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//app.listen(8080)</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接成功的回调 once 一次</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">,()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接关闭&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    mongoose.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">},</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">)</span></span></code></pre></div><h6 id="_2-mongoose操作数据库" tabindex="-1">2.mongoose操作数据库 <a class="header-anchor" href="#_2-mongoose操作数据库" aria-label="Permalink to &quot;2.mongoose操作数据库&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongoose&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;books&#39;</span><span style="color:#E1E4E8;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#E1E4E8;">    BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;西游记&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: </span><span style="color:#9ECBFF;">&#39;吴承恩&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: </span><span style="color:#79B8FF;">19.9</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongoose&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: String,</span></span>
<span class="line"><span style="color:#24292E;">        author: String,</span></span>
<span class="line"><span style="color:#24292E;">        price: Number,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;books&#39;</span><span style="color:#24292E;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#24292E;">    BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;西游记&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        author: </span><span style="color:#032F62;">&#39;吴承恩&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        price: </span><span style="color:#005CC5;">19.9</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接关闭&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre></div><h6 id="_3-字段类型" tabindex="-1">3.字段类型 <a class="header-anchor" href="#_3-字段类型" aria-label="Permalink to &quot;3.字段类型&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongoose&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">        is_Hot: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tags: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pub_time: Date,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;books&#39;</span><span style="color:#E1E4E8;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#E1E4E8;">    BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;西游记&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: </span><span style="color:#9ECBFF;">&#39;吴承恩&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        is_Hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tags: [</span><span style="color:#9ECBFF;">&#39;鬼怪&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;励志&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;社会&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        pub_time: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongoose&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: String,</span></span>
<span class="line"><span style="color:#24292E;">        author: String,</span></span>
<span class="line"><span style="color:#24292E;">        price: Number,</span></span>
<span class="line"><span style="color:#24292E;">        is_Hot: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">        tags: Array,</span></span>
<span class="line"><span style="color:#24292E;">        pub_time: Date,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;books&#39;</span><span style="color:#24292E;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#24292E;">    BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;西游记&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        author: </span><span style="color:#032F62;">&#39;吴承恩&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        is_Hot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tags: [</span><span style="color:#032F62;">&#39;鬼怪&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;励志&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;社会&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        pub_time: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接关闭&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre></div><h6 id="_4-字段值验证" tabindex="-1">4.字段值验证 <a class="header-anchor" href="#_4-字段值验证" aria-label="Permalink to &quot;4.字段值验证&quot;">​</a></h6><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongoose&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">            required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//表明该属性必须不为空</span></span>
<span class="line"><span style="color:#E1E4E8;">            unique: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//设置独一无二</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">            default:</span><span style="color:#9ECBFF;">&#39;匿名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">        is_Hot: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tags: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">        pub_time: Date,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;books&#39;</span><span style="color:#E1E4E8;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#E1E4E8;">    BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;西游记&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        author: </span><span style="color:#9ECBFF;">&#39;吴承恩&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        is_Hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tags: [</span><span style="color:#9ECBFF;">&#39;鬼怪&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;励志&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;社会&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        pub_time: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1.安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2.导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongoose&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3.连接 mongodb 服务</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4.设置回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;连接成功&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//5.创建文档的结构对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name:{</span></span>
<span class="line"><span style="color:#24292E;">            type: String,</span></span>
<span class="line"><span style="color:#24292E;">            required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//表明该属性必须不为空</span></span>
<span class="line"><span style="color:#24292E;">            unique: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//设置独一无二</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        author: {</span></span>
<span class="line"><span style="color:#24292E;">            type: String,</span></span>
<span class="line"><span style="color:#24292E;">            default:</span><span style="color:#032F62;">&#39;匿名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        price: Number,</span></span>
<span class="line"><span style="color:#24292E;">        is_Hot: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">        tags: Array,</span></span>
<span class="line"><span style="color:#24292E;">        pub_time: Date,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//6.创建模型对象 对文档操作的封装对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;books&#39;</span><span style="color:#24292E;">, BookSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//7.新增</span></span>
<span class="line"><span style="color:#24292E;">    BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;西游记&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        author: </span><span style="color:#032F62;">&#39;吴承恩&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        is_Hot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tags: [</span><span style="color:#032F62;">&#39;鬼怪&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;励志&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;社会&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        pub_time: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//判断是否有误</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//如果没有错误</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接成功的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接关闭&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//关闭mongodb的连接</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">//     mongoose.disconnect();</span></span>
<span class="line"><span style="color:#6A737D;">// },2000)</span></span></code></pre></div>`,11),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{m as __pageData,A as default};
