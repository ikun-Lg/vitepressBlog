import{_ as p,o as a,c as s,S as e}from"./chunks/framework.350e47e2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"largeFrontEnd/webFrontEnd/md/34.md","filePath":"largeFrontEnd/webFrontEnd/md/34.md","lastUpdated":null}'),n={name:"largeFrontEnd/webFrontEnd/md/34.md"},o=e(`<h2 id="二、javascript" tabindex="-1">二、JavaScript <a class="header-anchor" href="#二、javascript" aria-label="Permalink to &quot;二、JavaScript&quot;">​</a></h2><h3 id="_1-js由那三部分组成" tabindex="-1">1.js由那三部分组成？ <a class="header-anchor" href="#_1-js由那三部分组成" aria-label="Permalink to &quot;1.js由那三部分组成？&quot;">​</a></h3><p>​ ECMAScript：JS的核心内容，描述了语言的基础语法，比如var,for,数据类型（数组、字符串）；</p><p>​ 文档对象模型（DOM）：DOM把整个HTML页面规划为元素构成的文档；</p><p>​ 浏览器对象模型（BOM）：对浏览器窗口进行访问和操作；</p><h3 id="_2-js有哪些内置对象" tabindex="-1">2.JS有哪些内置对象？ <a class="header-anchor" href="#_2-js有哪些内置对象" aria-label="Permalink to &quot;2.JS有哪些内置对象？&quot;">​</a></h3><p>​ String Boolean Number Array Object Function Math Date RegExp...</p><p>​ Math：</p><p>​ abs() sqart() max() min()</p><p>​ Date</p><p>​ new Date() getYear()</p><p>​ Array</p><p>​ String</p><p>​ concat() length slice() split()</p><h3 id="_3-操作数组的方法有哪些" tabindex="-1">3.操作数组的方法有哪些？ <a class="header-anchor" href="#_3-操作数组的方法有哪些" aria-label="Permalink to &quot;3.操作数组的方法有哪些？&quot;">​</a></h3><p>​ push() pop() sort() splice() unshift() shift() reverse() concat() join() map() filter() every() some() reduce() isArray() findIndex()</p><p>​ 哪些方法会改变数组？</p><p>​ push() pop() unshift() shift() sort() sort() reverse() splice()</p><h3 id="_4-js对数据类的检测方式有哪些" tabindex="-1">4.JS对数据类的检测方式有哪些？ <a class="header-anchor" href="#_4-js对数据类的检测方式有哪些" aria-label="Permalink to &quot;4.JS对数据类的检测方式有哪些？&quot;">​</a></h3><p>​ typeof(): 对于基本数据类型没问题，遇到引用数据类型不管用</p><p>​ instanceof()：只能判断引用数据类型，不能判断基本数据类型</p><p>​ constructor：几乎可以判断基本数据类型和引用数据类型，如果声明了一个构造函数，并把它的原型指向Array时判断不出来</p><p>​ Object.prototype.toString.call()：完美解决方案</p><h3 id="_5-说一下闭包-闭包有什么特点" tabindex="-1">5.说一下闭包，闭包有什么特点？ <a class="header-anchor" href="#_5-说一下闭包-闭包有什么特点" aria-label="Permalink to &quot;5.说一下闭包，闭包有什么特点？&quot;">​</a></h3><p>​ 什么是闭包？函数嵌套函数，内部函数被外部函数返回并保存下来，就会产生闭包；</p><p>​ 特点：可以重复利用变量，并且这个变量不会污染全局的一种机制，这个变量是一直保存在内存中，不会被垃圾回收机制回收</p><p>​ 缺点：闭包较多的时候，会消耗内存，导致页面的性能下降，在IE浏览器中才会导致内存泄漏</p><p>​ 使用场景：防抖，节流，函数嵌套函数避免全局污染的时候</p><h3 id="_6-前端的内存泄漏怎么理解" tabindex="-1">6.前端的内存泄漏怎么理解？ <a class="header-anchor" href="#_6-前端的内存泄漏怎么理解" aria-label="Permalink to &quot;6.前端的内存泄漏怎么理解？&quot;">​</a></h3><p>​ JS里已经分配内存地址对象，但是由于长时间没有释放或者没有办法清除，造成长期占用内存的现象，会让内存资源大幅度浪费，最终导致运行速度慢，甚至崩溃的情况。</p><p>​ 垃圾回收机制</p><p>​ 因素：一些未声明直接赋值的变量：一些未清空的定时器；过度的闭包；一些引用的元素没有被清除；</p><h3 id="_7-事件委托是什么" tabindex="-1">7.事件委托是什么？ <a class="header-anchor" href="#_7-事件委托是什么" aria-label="Permalink to &quot;7.事件委托是什么？&quot;">​</a></h3><p>​ 又叫事件代理，原理就是利用了事件冒泡机制来实现，也就是把子元素的事件绑定到了父元素身上；</p><p>​ 如果子元素阻止了事件冒泡，那么委托也就不成立</p><p>​ 阻止事件冒泡：event.stopPropagation()</p><p>​ addEventListerner(&#39;click&#39;,函数名,true/false) 默认是false(事件冒泡), true（事件捕获）</p><p>​ 好处：提高性能，减少事件的绑定，也就减少了内存的占用。</p><h3 id="_8-基本数据类型和引用数据类型的区别" tabindex="-1">8.基本数据类型和引用数据类型的区别？ <a class="header-anchor" href="#_8-基本数据类型和引用数据类型的区别" aria-label="Permalink to &quot;8.基本数据类型和引用数据类型的区别？&quot;">​</a></h3><p>​ 基本数据类型：String Number Boolean undefind null</p><p>​ 基本数据类型保存在栈内存中，保存的是一个具体的值</p><p>​ 引用数据类型（复杂数据类型）： Object Function Array</p><p>​ 保存在堆内存中，声明一个引用类型的变量，它保存的是引用数据类型的地址</p><p>​ 假如声明两个引用类型同时指向了一个地址的时候，修改其中一个那么另外一个也会改变</p><h3 id="_9-说一下原型链" tabindex="-1">9.说一下原型链 <a class="header-anchor" href="#_9-说一下原型链" aria-label="Permalink to &quot;9.说一下原型链&quot;">​</a></h3><p>​ 原型就是一个普通对象，它是为构造函数的实例共享属性和方法；所有实例中引用的原型都是同一个对象</p><p>​ 使用prototype可以把方法挂载到原型上，内存只保存一份</p><p>​</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">__proto__</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">__proto__</span></span></code></pre></div><p>可以理解为指针，实例对象中的属性，指向了构造函数的原型（prototype）</p><p>一个实例对象在调用属性和方法的时候，会依次从实例本身、构造函数原型、原型的原型上去查找</p><h3 id="_10-new操作符具体做了什么" tabindex="-1">10.new操作符具体做了什么？ <a class="header-anchor" href="#_10-new操作符具体做了什么" aria-label="Permalink to &quot;10.new操作符具体做了什么？&quot;">​</a></h3><p>​ 1.先创建一个空对象</p><p>​ 2.把空对象和构造函数通过原型链连接</p><p>​ 3.把构造函数的this绑定到空对象上</p><p>​ 4.根据构建函数返回的类型判断，如果是值类型，则返回对象，如果是引用类型，就要返回这个引用类型</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">newFun</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Fun</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//1.先创建一个空对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//2.把空对象和构造函数通过原型链进行连接</span></span>
<span class="line"><span style="color:#E1E4E8;">    newObj,__proto__ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Fun</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//3.把构造函数的this绑定到新的空对象上</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Fun.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(newObj,args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//4.根据构建函数返回的类型进行判断，如果是值类型，则返回对象，如果是引用类型，就要返回这个引用类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> newObj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">newFun</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Fun</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//1.先创建一个空对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//2.把空对象和构造函数通过原型链进行连接</span></span>
<span class="line"><span style="color:#24292E;">    newObj,__proto__ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Fun</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//3.把构造函数的this绑定到新的空对象上</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Fun.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(newObj,args);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//4.根据构建函数返回的类型进行判断，如果是值类型，则返回对象，如果是引用类型，就要返回这个引用类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> newObj</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_11-js是如何实现继承的" tabindex="-1">11.JS是如何实现继承的？ <a class="header-anchor" href="#_11-js是如何实现继承的" aria-label="Permalink to &quot;11.JS是如何实现继承的？&quot;">​</a></h3><p>​ 1.原型链继承</p><p>​ 让一个构造函数的原型是另一个类型的实例，那么这个构造函数new出来的实例具有该实例的属性；</p><p>​ 优点：写法简洁，容易理解；</p><p>​ 缺点：对象实例共享所有继承的属性和方法，无法向父类构造函数传参；</p><p>​ 2.借用构造函数继承</p><p>​ 在子类型构造函数的内部调用父类型构造函数：使用apply() 或 call() 方法将父对象的构造函数绑定到子对象上；</p><p>​ 优点：解决了原型链实现继承的不能传参的问题和父类的原型共享问题；</p><p>​ 缺点：借用构造函数的缺点是方法都在构造函数中定义，因此无法实现函数复用；在父类的原型中定义的方法，对于子类型也是不可见的，结果所有类型都只能使用构造函数模式；</p><p>​</p><p>​ 3.组合式继承、</p><p>​ 将 原型链 和 借用构造函数 组合到一块，使用原型链实现对原型属性和方法的继承；而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义的方法实现了元素复用，又能保证每个实例都有自己的属性。</p><p>​ 优点：解决了原型链继承和借用构造函数继承造成的影响；</p><p>​ 缺点：无论在什么情况下，都会调用两次父类构造函数；一次是在创建子类原型的时候，另一次是在子类构造函数的内部</p><p>​ 4.ES6的class类实现继承</p><p>​ Class类通过extends关键词实现继承，其实质是先创建出父类的this对象，然后用子类的构造函数修改this，</p><p>子类的构造方法中必须调用super方法，且只有在调用了super（）之后才能够使用this，因为子类的this对象是继承父类的this对象，然后对其进行加工，而super方法表示的是父类的构造函数，用来新建父类的this对象</p><p>​ 优点：语法简单易懂，操作方便；</p><p>​ 缺点：并不是所有浏览器都支持class关键词</p><h3 id="_12-js的设计原理" tabindex="-1">12.JS的设计原理 <a class="header-anchor" href="#_12-js的设计原理" aria-label="Permalink to &quot;12.JS的设计原理&quot;">​</a></h3><p>​ JS引擎 运行上下文 调用栈 事件循环 回调</p><h3 id="_13-js中关于this指向问题" tabindex="-1">13.JS中关于this指向问题 <a class="header-anchor" href="#_13-js中关于this指向问题" aria-label="Permalink to &quot;13.JS中关于this指向问题&quot;">​</a></h3><p>​ 1.全局对象中this指向</p><p>​ 指向的是window</p><p>​ 2.全局作用域或者普通函数中的this</p><p>​ 指向全局window</p><p>​ 3.this永远指向最后调用它的那个对象</p><p>​ 在不是箭头函数的情况下</p><p>​ 4.new 关键词改变了this指向</p><p>​ 5.apply，call，bind</p><p>​ 可以改变this指向，不是箭头函数</p><p>​ 6.箭头函数中的this</p><p>​ 它的指向在定义的时候就已经确定了</p><p>​ 箭头函数它没有this，看外层是否有函数，有就是外层函数的this，没有就是window</p><p>​ 7.匿名函数中的this</p><p>​ 永远指向window，匿名函数的执行环境具有全局性，因此this指向window</p><h3 id="_14-script标签里的async和defer有什么区别" tabindex="-1">14.script标签里的async和defer有什么区别？ <a class="header-anchor" href="#_14-script标签里的async和defer有什么区别" aria-label="Permalink to &quot;14.script标签里的async和defer有什么区别？&quot;">​</a></h3><p>​ 当没有async和defer这两个属性时，浏览器会立刻加载并执行指定的脚本</p><p>​ 有async：</p><p>​ 加载和渲染后面元素的过程将和script的加载和执行并行进行（异步）；</p><p>​ 有defer：</p><p>​ 加载和渲染后面元素的过程将和script的加载和执行并行进行（异步），但是它的执行事件要等所有元素解析完成之后才会执行；</p><h3 id="_15-settimeout最小执行时间是多少" tabindex="-1">15.setTimeout最小执行时间是多少？ <a class="header-anchor" href="#_15-settimeout最小执行时间是多少" aria-label="Permalink to &quot;15.setTimeout最小执行时间是多少？&quot;">​</a></h3><p>​ HTML5规定：</p><p>​ setTimeout最小执行时间是4ms</p><p>​ setInterval最小执行时间是10ms</p><h3 id="_16-es6和es5有什么区别" tabindex="-1">16.ES6和ES5有什么区别？ <a class="header-anchor" href="#_16-es6和es5有什么区别" aria-label="Permalink to &quot;16.ES6和ES5有什么区别？&quot;">​</a></h3><p>​ JS的组成：ECMAScript BOM DOM</p><p>​ ES5：ECMAScript5,2009年第五次修订，ECMAScript2009；</p><p>​ ES6：ECMAScript6,2015年第6次修订，ECMAScript2015；是JS下一个版本标准</p><p>​</p><h3 id="_17-es6的新特性有哪些" tabindex="-1">17.ES6的新特性有哪些？ <a class="header-anchor" href="#_17-es6的新特性有哪些" aria-label="Permalink to &quot;17.ES6的新特性有哪些？&quot;">​</a></h3><p>​ 1.新增块级作用域（let，const）</p><p>​ 不存在变量提升</p><p>​ 存在暂时性死去问题</p><p>​ 块级作用域的内容</p><p>​ 不能在同一个作用域内重复声明</p><p>​ 2.新增了定义类的语法糖（class）</p><p>​ 3.新增了一种基本数据类型（symbol）</p><p>​ 4.新增了结构赋值</p><p>​ 从数组或者对象中取值，然后给变量赋值</p><p>​ 5.新增了函数参数默认值</p><p>​ 6.对象和数组新增了扩展运算符</p><p>​ 7.给数组新增了API</p><p>​ 8.Promise</p><p>​ 解决回调地狱问题，</p><p>​ 自身有all，reject，resolve，race方法；</p><p>​ 原型上有then，catch</p><p>​ 把异步操作队列化</p><p>​ 三种状态：pending初始状态，fulfilled操作成功，rejected操作失败</p><p>​ 状态：pending--&gt;fulfilled;pending--&gt;rejected;一旦发生，状态就会凝固，不会改变</p><p>​ async await</p><p>​ 同步代码做异步操作，两者必须搭配使用</p><p>​ async表明函数内有异步操作，调用时会返回promise</p><p>​ await是组成async的表达式，结果是取决于它等待的内容，如果是promise那就是promise的结果，如果是普通函数就进行链式调用</p><p>​ await后的promise如果是rejected状态，那么整个async函数都会中断，后面代码不执行；</p><p>​ 9.新增了模块化（import，export）</p><p>​ 10.新增了set和map数据结构</p><p>​ set就是不重复</p><p>​ map的key的类型不限制</p><p>​ 11.新增了generator</p><p>​ 12.新增了箭头函数</p><p>​ 不能作为构造函数使用，不能new</p><p>​ 箭头函数没有arguments</p><p>​ 箭头函数不能用call，apply，bind去改变this的执行</p><p>​ this指向外层第一个函数的this</p><p>​</p><h3 id="_18-call-apply-bind三者有什么区别" tabindex="-1">18.call，apply，bind三者有什么区别？ <a class="header-anchor" href="#_18-call-apply-bind三者有什么区别" aria-label="Permalink to &quot;18.call，apply，bind三者有什么区别？&quot;">​</a></h3><p>​ 都是改变this指向和函数的调用，call和apply的功能相似，只是传参的方法不同</p><p>​ call方法传的是一个参数列表</p><p>​ apply传递的是一个数组</p><p>​ bind传参后不会立刻执行，会返回一个改变了this指向的函数，这个函数还是可以传参的，bind()()</p><p>​ call方法的性能要比apply好一些，所以call用的较多</p><h3 id="_19-用递归的时候有没有遇到什么问题" tabindex="-1">19.用递归的时候有没有遇到什么问题？ <a class="header-anchor" href="#_19-用递归的时候有没有遇到什么问题" aria-label="Permalink to &quot;19.用递归的时候有没有遇到什么问题？&quot;">​</a></h3><p>​ 如果一个函数可以调用函数本身，那么这个就是递归函数</p><p>​ 函数内部调用自己</p><p>​ 特别注意：写递归必须要有退出条件return</p><h3 id="_20-说一下如何实现一个深拷贝" tabindex="-1">20.说一下如何实现一个深拷贝？ <a class="header-anchor" href="#_20-说一下如何实现一个深拷贝" aria-label="Permalink to &quot;20.说一下如何实现一个深拷贝？&quot;">​</a></h3><p>​ 深拷贝就是完全拷贝一份新的对象，会在对内存中开辟新的空间，拷贝的对象被修改后，原对象不受影响</p><p>​ 主要针对的是引用数据类型</p><p>​ 1.扩展运算符</p><p>​ 2.JSON.parse(JSON.stringfy())</p><p>​ 3.利用递归函数实现</p><h3 id="_21-说一下事件循环" tabindex="-1">21.说一下事件循环 <a class="header-anchor" href="#_21-说一下事件循环" aria-label="Permalink to &quot;21.说一下事件循环&quot;">​</a></h3><p>​ JS是一个单线程的脚本语言。</p><p>​ 主线程、执行栈、任务队列、宏任务、微任务</p><p>​ 主线程先执行同步任务，然后才去执行任务队列里的任务，如果在执行宏任务之前有微任务，那么要先执行微任务</p><p>​ 全部执行完后等待主线程的调用，调用完之后再去任务队列中查看是否有异步任务，这样一个循环往复的过程就是事件循环。</p><h3 id="_22-ajax是什么-怎么实现的" tabindex="-1">22.AJAX是什么？怎么实现的？ <a class="header-anchor" href="#_22-ajax是什么-怎么实现的" aria-label="Permalink to &quot;22.AJAX是什么？怎么实现的？&quot;">​</a></h3><p>​ 创建交互式网页应用的网页开发技术</p><p>​ 在不重新加载整个页面的前提下，与服务器交换数据并更新部分内容</p><p>​ 通过XmlHttpRequest对象向服务器发送异步请求，然后从服务器拿到数据，最后通过js操作dom更新页面。</p><p>​ 1.创建XmlHttpRequest对象 xmh</p><p>​ 2.通过xmh对象里的open（）方法和服务器简历链接</p><p>​ 3.构建请求所需的数据，并通过xmh对象的send（）发送给服务器</p><p>​ 4.通过xmh对象的onreadystatechange事件监听服务器和你的通信状态</p><p>​ 5.接收并处理服务器响应的数据结果</p><p>​ 6.把处理的数据更新到html页面上</p><h3 id="_23-get和post有什么区别" tabindex="-1">23.get和post有什么区别？ <a class="header-anchor" href="#_23-get和post有什么区别" aria-label="Permalink to &quot;23.get和post有什么区别？&quot;">​</a></h3><p>​ 1.get一般是获取数据，post一般是提交数据</p><p>​ 2.get参数会放在url上，所以安全性比较差，post是放在body中</p><p>​ 3.get请求刷新服务器或返回是没有影响的，post请求退回时会重新提交数据</p><p>​ 4.get请求时会被缓存，post请求不会被缓存</p><p>​ 5.get请求会保存在浏览器历史记录中，post不会</p><p>​ 6.get‘请求只能进行url编码，post请求支持很多种</p><h3 id="_24-promise的内部原理是什么-它的缺点是什么" tabindex="-1">24.promise的内部原理是什么？它的缺点是什么？ <a class="header-anchor" href="#_24-promise的内部原理是什么-它的缺点是什么" aria-label="Permalink to &quot;24.promise的内部原理是什么？它的缺点是什么？&quot;">​</a></h3><p>​ Promise对象，封装了一个异步操作并且可以获取成功或失败的结果</p><p>​ Promise主要解决回调地狱问题，之前如果异步任务比较多，同时他们之间有相互依赖关系，就只能使用回调函数处理，这样容易形成回调地狱，代码的可读性差，可维护性也很差</p><p>​ 三种状态：pending初始状态，fulfilled操作成功，rejected操作失败</p><p>​ 状态：pending--&gt;fulfilled;pending--&gt;rejected;一旦发生，状态就会凝固，不会改变</p><p>​ 缺点：</p><p>​ 首先就是我们无法取消promise，一旦创建它就会立即执行，不能中途取消</p><p>​ 如果不设置回调，promise内部抛出的错误就无法反馈到外面</p><p>​ 若当前处于pending状态时，无法得知目前在哪个阶段。</p><p>​ 原理：</p><p>​ 构造一个promise实例，实例需要传递函数的参数，这个函数有两个形参，分别都是函数类型，一个是resolve一个reject</p><p>​ promise上还有then方法，这个方法就是来指定状态改变时确定操作，resolve是执行第一个函数，reject是执行第二个参数。</p><h3 id="_25-promise和async-await的区别是什么" tabindex="-1">25.promise和async await的区别是什么？ <a class="header-anchor" href="#_25-promise和async-await的区别是什么" aria-label="Permalink to &quot;25.promise和async await的区别是什么？&quot;">​</a></h3><p>​ 1.都是处理异步请求的方式</p><p>​ 2.promise是ES6，async await是ES7语法</p><p>​ 3.async await是基于promise实现的，他和promise是非阻塞性</p><p>​ 优缺点：</p><p>​ 1.promise返回对象我们要用then，catch方法去处理和捕获异常，并且书写方式是链式，容易造成代码重叠，不好维护，async await是通过try catch进行捕获异常</p><p>​ 2.async await最大的优点就是能让代码看起来像同步一样，只要遇到await 就会立即返回结果，然后再执行后面的操作，promise.then()的方式返回，会出现请求寒梅返回，就执行了后面的操作。</p><h3 id="_26-浏览器的存储方式有哪些" tabindex="-1">26.浏览器的存储方式有哪些？ <a class="header-anchor" href="#_26-浏览器的存储方式有哪些" aria-label="Permalink to &quot;26.浏览器的存储方式有哪些？&quot;">​</a></h3><p>​ 1.cookies</p><p>​ H5标准前的本地存储方式</p><p>​ 兼容性好，请求头自带cookie</p><p>​ 存储量小，资源浪费，使用麻烦（封装）</p><p>​ 2.localstorage</p><p>​ H5加入以键值对为标准的方式</p><p>​ 操作方便，永久存储，兼容性较好</p><p>​ 保存值得类型被限定，浏览器在隐私模式下不可读取，不能被爬虫</p><p>​ 3.sessionstorage</p><p>​ 当前页面关闭后会立即清理，会话级别的存储方式</p><p>​ 4.indexedDB</p><p>​ H5标准的存储方式，它是以键值对进行存储，可以快速读取，适合web场景</p><h3 id="_27-token存在sessionstorage还是localstorage" tabindex="-1">27.token存在sessionstorage还是localstorage？ <a class="header-anchor" href="#_27-token存在sessionstorage还是localstorage" aria-label="Permalink to &quot;27.token存在sessionstorage还是localstorage？&quot;">​</a></h3><p>​ token：验证身份的令牌，一般是用户通过账号密码登录后，服务器端把这些凭证通过加密等一系列操作后得到的字符串</p><p>​ 1.存localstorage里，后期每次请求接口都需要把它当做一个字段传给后台</p><p>​ 2.存cookies里，会自动发送，缺点就是不能跨域</p><p>​ 如果存在localstorage里，容易被xss攻击，但是如果做好了对应的措施，那么利大于弊</p><p>​ 如果存在cookies中会有CSRF攻击</p><h3 id="_28-token的登录流程" tabindex="-1">28.token的登录流程 <a class="header-anchor" href="#_28-token的登录流程" aria-label="Permalink to &quot;28.token的登录流程&quot;">​</a></h3><p>​ 1.客户端用账号密码请求登录</p><p>​ 2.服务端接收到请求后，需要去验证账号密码</p><p>​ 3.验证成功之后，服务端会签发一个token，把这个token发送给客户端</p><p>​ 4.客户端收到token后保存起来，可以放在cookie也可以是localstorage</p><p>​ 5.客户端每次向服务端发送请求的时候，都需要携带一个token</p><p>​ 6.服务端收到请求，接着去验证客户端里的token，验证成功才会返回客户端请求的数据。</p><h3 id="_29-页面渲染的过程是什么样的" tabindex="-1">29.页面渲染的过程是什么样的？ <a class="header-anchor" href="#_29-页面渲染的过程是什么样的" aria-label="Permalink to &quot;29.页面渲染的过程是什么样的？&quot;">​</a></h3><p>​ DNS解析</p><p>​ 建立TCP连接</p><p>​ 发送HTTP请求</p><p>​ 服务器处理请求</p><p>​ 渲染页面</p><p>​ 浏览器会获取HTML和CSS的资源，然后把HTML解析成DOM树</p><p>​ 再把CSS解析成CSSOM</p><p>​ 把DOM和CSSOM合并为渲染树</p><p>​ 布局</p><p>​ 把渲染树的每个节点渲染到屏幕上（绘制）</p><p>​ 断开TCP连接</p><h3 id="_30-dom树和渲染树有什么区别" tabindex="-1">30.DOM树和渲染树有什么区别？ <a class="header-anchor" href="#_30-dom树和渲染树有什么区别" aria-label="Permalink to &quot;30.DOM树和渲染树有什么区别？&quot;">​</a></h3><p>​ DOM树是和HTML标签一一对应的，包括head和隐藏元素</p><p>​ 渲染树是不包含head和隐藏元素</p><h3 id="_31-精灵图和base64的区别是什么" tabindex="-1">31.精灵图和base64的区别是什么？ <a class="header-anchor" href="#_31-精灵图和base64的区别是什么" aria-label="Permalink to &quot;31.精灵图和base64的区别是什么？&quot;">​</a></h3><p>​ 精灵图：把多张小图整合到一张大图上，利用定位的一些属性把小图显示在页面上，当访问页面可以减少请求，提高加载速度</p><p>​ base64：传输8bit字节代码的编码方式，把原本的二进制形式转化为64个字符的单位，最后组成字符串</p><p>​ base64是会和html css一起下载到浏览器中，减少请求，减少跨域问题，但是一些低版本不支持，若base64体积比原本大，不利于css加载</p><h3 id="_32-svg格式了解多少" tabindex="-1">32.SVG格式了解多少？ <a class="header-anchor" href="#_32-svg格式了解多少" aria-label="Permalink to &quot;32.SVG格式了解多少？&quot;">​</a></h3><p>​ 基于XML语法格式的图像格式，可以放缩矢量图，其他图像是基于像素的，svg是属于对图像形状的描述，本质的文本文件，体积小，并且不管放大多少倍都不会失真</p><p>​ 1.svg可直接插入页面中，成为Dom一部分，然后用js或css进行操作</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>​ 2.svg可作为文件被引入</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pic.svg&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pic.svg&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><p>​ 3.svg可以转为base64引入页面</p><h3 id="_33-了解过jwt吗" tabindex="-1">33.了解过JWT吗？ <a class="header-anchor" href="#_33-了解过jwt吗" aria-label="Permalink to &quot;33.了解过JWT吗？&quot;">​</a></h3><p>​ JSON Web Token 通过JSON形式作为在web应用中的令牌，可以在各方之间安全的把信息作为JSON对象传输</p><p>​ 信息传输、授权</p><p>​ JWT的认证流程： ​ 1.前端把账号密码发给后端的接口</p><p>​ 2.后端核对账号密码成功后，把用户id等其他信息作为JWT负载，把它和头部分别进行base64编码拼接后签名，形成一个JWT(token)</p><p>​ 3.前端每次请求时都会把JWT放在http请求头的Authorization字段内</p><p>​ 4.后端检查是否存在，如果存在就验证JWT的有效性（签名是否正确，token是否过期）</p><p>​ 5.验证通过后后端使用JWT中包含的用户信息进行其他操作，并返回对应结果</p><p>​ 简洁、包含性、因为token是JSON加密的形式保存在客户端，所以JWT是跨语言的，原则上是任何web形式都支持。</p><h3 id="_34-npm的底层环境是什么" tabindex="-1">34.npm的底层环境是什么？ <a class="header-anchor" href="#_34-npm的底层环境是什么" aria-label="Permalink to &quot;34.npm的底层环境是什么？&quot;">​</a></h3><p>​ node package manager,node 的包管理工具，已经成为分发node模块的标准，是js的运行环境</p><p>​ npm的组成：网站、注册表、命令行工具</p><h3 id="_35-http协议规定的协议头和请求头有什么" tabindex="-1">35.http协议规定的协议头和请求头有什么？ <a class="header-anchor" href="#_35-http协议规定的协议头和请求头有什么" aria-label="Permalink to &quot;35.http协议规定的协议头和请求头有什么？&quot;">​</a></h3><p>​ 1.请求头信息：</p><p>​ Accept：浏览器告诉服务器所支持的数据类型</p><p>​ Host：浏览器告诉服务器我想访问服务器的哪一台主机</p><p>​ Referer：浏览器告诉服务器我是从哪里来的（防盗链）</p><p>​ User-Agent：浏览器类型、版本信息</p><p>​ Date：浏览器告诉服务器我是什么时候访问的</p><p>​ Connection：连接方式</p><p>​ Cookie：</p><p>​ X-Request-with:请求方式</p><p>​ 2.响应头信息：</p><p>​ Location：这个就是告诉浏览器你要去找谁</p><p>​ Server：告诉浏览器服务器的类型</p><p>​ Content-Type：告诉浏览器返回的数据类型</p><p>​ Refresh：控制了的定时刷新</p><h3 id="_36-说一下浏览器的缓存策略" tabindex="-1">36.说一下浏览器的缓存策略 <a class="header-anchor" href="#_36-说一下浏览器的缓存策略" aria-label="Permalink to &quot;36.说一下浏览器的缓存策略&quot;">​</a></h3><p>​ 强缓存（本地缓存）、协商缓存（弱缓存）</p><p>​ 强缓存：不发起请求，直接使用缓存里的内容，浏览器把js、css、image等存到内存中，下次用户访问直接从内存中获取，提高性能</p><p>​ 协商缓存：需要向后台发请求，通过判断来决定是否使用协商缓存，如果请求内容没有变化，则返回304，浏览器就用缓存里的内容</p><p>​ 强缓存的触发：</p><p>​ http1.0：时间戳响应标头</p><p>​ http1.1：Cache-Control响应标头</p><p>​ 协商缓存：</p><p>​ http1.0：请求头：if-modified-since 响应头：last-modified</p><p>​ http1.1：请求头：if-none-match 响应头：Etag</p><h3 id="_37-什么是同源策略" tabindex="-1">37.什么是同源策略？ <a class="header-anchor" href="#_37-什么是同源策略" aria-label="Permalink to &quot;37.什么是同源策略？&quot;">​</a></h3><p>​ http:// www. aaa.com:8080/index/vue.js</p><p>​ 协议 子域名 主域名 端口号 资源</p><p>​ 同源策略是浏览器的核心，如果没有这个策略就会遭受网络攻击</p><p>​ 主要指的就是协议+域名+端口号三者一致，若其中一个不一样则不是同源，会产生跨域</p><p>​ 三个允许跨域加载资源的标签：img link script</p><p>​ 跨域是可以发送请求，后端也会正常返回结果，只不过这个结果被浏览器拦了</p><p>​ JSONP</p><p>​ CORS</p><p>​ websocket</p><p>​ 反向代理</p><h3 id="_38-防抖和节流是什么" tabindex="-1">38.防抖和节流是什么？ <a class="header-anchor" href="#_38-防抖和节流是什么" aria-label="Permalink to &quot;38.防抖和节流是什么？&quot;">​</a></h3><p>​ 都是应对页面中频繁触发事件的优化方案</p><p>​ 防抖：避免事件重复触发</p><p>​ 使用场景：1.频繁和服务端交互 2.输入框的自动保存事件</p><p>​ 节流：把频触发的事件减少，每隔一段时间执行</p><p>​ 使用场景：scroll事件</p><h3 id="_39-解释一下什么是json" tabindex="-1">39.解释一下什么是JSON？ <a class="header-anchor" href="#_39-解释一下什么是json" aria-label="Permalink to &quot;39.解释一下什么是JSON？&quot;">​</a></h3><p>​ JSON是一种纯字符串形式的数据，它本身不提供任何方法，适合在网络中进行传输</p><p>​ JSON数据存储在.json文件中，也可以把JSON数据以字符串形式存在数据库、cookie中</p><p>​ JS提供了JSON.parse() JSON.stringfy()</p><p>​ 什么时候使用json：定义接口；序列化；生成token；配置文件package.json</p><h3 id="_40-当数据没有请求过来时该怎么做" tabindex="-1">40.当数据没有请求过来时该怎么做？ <a class="header-anchor" href="#_40-当数据没有请求过来时该怎么做" aria-label="Permalink to &quot;40.当数据没有请求过来时该怎么做？&quot;">​</a></h3><p>​ 可以在渲染数据的地方给一些默认的值</p><p>​ if判断语句</p><h3 id="_41-有没有做过无感登录" tabindex="-1">41.有没有做过无感登录？ <a class="header-anchor" href="#_41-有没有做过无感登录" aria-label="Permalink to &quot;41.有没有做过无感登录？&quot;">​</a></h3><p>​ 1.在响应拦截器中，判断token返回过期后，调用刷新token的接口</p><p>​ 2.后端返回过期时间，前端判断token的过期时间，去调用刷新token的接口</p><p>​ 3.写定时器，定时刷新token接口</p><p>​ 流程：</p><p>​ 1.在登录成功后保存token和refresh_token</p><p>​ 2.在响应拦截器中对401状态码引入刷新token的api的方法调用</p><p>​ 3.替换保存本地的token</p><p>​ 4.把错误对象里的token替换</p><p>​ 5.再次发送未完成的请求</p><p>​ 6.如果refresh_token过期了，判断是否过期，过期了就清除所有的token重新登录</p><h3 id="_42-大文件上传是怎么做的" tabindex="-1">42.大文件上传是怎么做的？ <a class="header-anchor" href="#_42-大文件上传是怎么做的" aria-label="Permalink to &quot;42.大文件上传是怎么做的？&quot;">​</a></h3><p>​ 分片上传：</p><p>​ 1.把需要上传的文件按照一定的规划，分割或相同大小的数据块</p><p>​ 2.初始化一个分片上传任务，返回本次分片上传的唯一标识</p><p>​ 3.按照一定的规划把各个数据块上传</p><p>​ 4.发送完成后，服务器daunt会判断数据上传的完整性，如果完整，那么就会把数据库合并成原始文件</p><p>​ 断点续传：</p><p>​ 服务端返回，从哪里开始 浏览器自己处理</p>`,334),t=[o];function l(r,i,c,h,d,y){return a(),s("div",null,t)}const b=p(n,[["render",l]]);export{u as __pageData,b as default};
