(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{373:function(_,e,t){"use strict";t.r(e);var v=t(13),r=Object(v.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"从输入url到网页显示的完整过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到网页显示的完整过程"}},[_._v("#")]),_._v(" 从输入url到网页显示的完整过程")]),_._v(" "),e("h3",{attrs:{id:"过程三部曲"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过程三部曲"}},[_._v("#")]),_._v(" 过程三部曲")]),_._v(" "),e("ul",[e("li",[_._v("网络请求：DNS解析、HTTP请求")]),_._v(" "),e("li",[_._v("解析：DOM树、CSSOM树，Render Tree")]),_._v(" "),e("li",[_._v("渲染：计算、绘制，同时执行JS")])]),_._v(" "),e("h3",{attrs:{id:"_1-网络请求-得到html源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-网络请求-得到html源码"}},[_._v("#")]),_._v(" 1. 网络请求：得到HTML源码")]),_._v(" "),e("ul",[e("li",[_._v("DNS 查询到 IP ，简历TCP连接（三次握手）")]),_._v(" "),e("li",[_._v("浏览器发起 HTTP 请求")]),_._v(" "),e("li",[_._v("服务器响应，浏览器收到请求数据，得到 HTML 源码")])]),_._v(" "),e("h3",{attrs:{id:"_2-解析-字符串-结构化数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析-字符串-结构化数据"}},[_._v("#")]),_._v(" 2. 解析：字符串 => 结构化数据")]),_._v(" "),e("ul",[e("li",[_._v("解析HTML过程，遇到静态资源会继续发起网络请求（注意：可能会有强缓存，此时不用请求）")]),_._v(" "),e("li",[_._v("JS、CSS、图片、视频等")]),_._v(" "),e("li",[_._v("解析：字符串 => 结构化数据\n"),e("blockquote",[e("p",[_._v("HTML 解析为 DOM 树"),e("br"),_._v("\nCSS 解析为 CSSOM 树（style tree）"),e("br"),_._v("\n两者结合，形成 Render tree")])])])]),_._v(" "),e("h4",{attrs:{id:"解析过程很复杂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解析过程很复杂"}},[_._v("#")]),_._v(" 解析过程很复杂")]),_._v(" "),e("ul",[e("li",[_._v("CSS 可能来源于"),e("code",[_._v("<style>")]),_._v("、"),e("code",[_._v("<link>")])]),_._v(" "),e("li",[_._v("JS 可能内嵌、外链，还有defer、async逻辑")]),_._v(" "),e("li",[_._v("img 可能内嵌（base64）、外链")])]),_._v(" "),e("h4",{attrs:{id:"优化解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化解析"}},[_._v("#")]),_._v(" 优化解析")]),_._v(" "),e("ul",[e("li",[_._v("CSS 放到"),e("code",[_._v("<head>")]),_._v("中，不要异步加载 CSS")]),_._v(" "),e("li",[_._v("JS 放到"),e("code",[_._v("<body>")]),_._v("最下面，或者合理使用 async、defer")]),_._v(" "),e("li",[e("code",[_._v("<img>")]),_._v("提前定义 width height")])]),_._v(" "),e("h3",{attrs:{id:"_3-渲染-render-tree-绘制到页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-渲染-render-tree-绘制到页面"}},[_._v("#")]),_._v(" 3. 渲染：Render Tree 绘制到页面")]),_._v(" "),e("ul",[e("li",[_._v("计算各个 DOM 的尺寸、定位，最后绘制到页面")]),_._v(" "),e("li",[_._v("遇到 JS 可能会执行")]),_._v(" "),e("li",[_._v("异步 CSS、图片加载，可能会触发重新渲染")])]),_._v(" "),e("h4",{attrs:{id:"过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[_._v("#")]),_._v(" 过程")]),_._v(" "),e("img",{attrs:{src:_.$withBase("/assets/notes-images/breadth/render-tree.png"),alt:"render tree",width:"700"}}),_._v(" "),e("h3",{attrs:{id:"精简白话版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精简白话版"}},[_._v("#")]),_._v(" 精简白话版")]),_._v(" "),e("ol",[e("li",[_._v("输入网址")]),_._v(" "),e("li",[_._v("发送到 DNS 服务器，获取域名对应的 Web 服务器对应的 IP 地址")]),_._v(" "),e("li",[_._v("与 Web 服务器建立 TCP 连接")]),_._v(" "),e("li",[_._v("浏览器向 Web 服务器发送 HTTP 请求")]),_._v(" "),e("li",[_._v("Web 服务器响应请求，返回指定 url 的数据（或错误信息，或重定向的新的url地址）")]),_._v(" "),e("li",[_._v("浏览器下载 Web 服务器返回的数据，解析 HTML 源文件")]),_._v(" "),e("li",[_._v("生成 DOM树，解析 CSS JS，渲染页面，直至显示完成")])])])}),[],!1,null,null,null);e.default=r.exports}}]);