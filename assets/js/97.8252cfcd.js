(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{361:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"请求为什么要发送options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求为什么要发送options"}},[t._v("#")]),t._v(" 请求为什么要发送options")]),t._v(" "),s("h3",{attrs:{id:"发送options的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送options的原因"}},[t._v("#")]),t._v(" 发送options的原因")]),t._v(" "),s("p",[t._v("经常会遇到跨域的情况，所以先发送method为options的请求，看服务器返回什么跨域信息。")]),t._v(" "),s("ul",[s("li",[t._v("options 请求是跨域请求之前的预检查")]),t._v(" "),s("li",[t._v("浏览器自行发起的，无需我们干预")]),t._v(" "),s("li",[t._v("不会影响实际功能")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/notes-images/basic/options.png"),alt:"tcp",width:"700"}}),t._v(" "),s("h3",{attrs:{id:"跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求"}},[t._v("#")]),t._v(" 跨域请求")]),t._v(" "),s("p",[t._v("浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都是跨域")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/notes-images/basic/跨域.png"),alt:"tcp",width:"700"}}),t._v(" "),s("ul",[s("li",[t._v("浏览器同源策略")]),t._v(" "),s("li",[t._v("同源策略一般限制 Ajax 网络请求，不能跨域请求 server")]),t._v(" "),s("li",[t._v("不会限制 "),s("code",[t._v("<link>")]),t._v(" "),s("code",[t._v("<img>")]),t._v(" "),s("code",[t._v("<script>")]),t._v(" "),s("code",[t._v("<iframe>")]),t._v(" 加载第三方资源")])]),t._v(" "),s("h3",{attrs:{id:"同源策略限制内容有"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略限制内容有"}},[t._v("#")]),t._v(" 同源策略限制内容有")]),t._v(" "),s("ul",[s("li",[t._v("Cookie、LocalStorage、IndexedDB 等存储性内容")]),t._v(" "),s("li",[t._v("DOM 节点")]),t._v(" "),s("li",[t._v("AJAX 请求发送后，结果被浏览器拦截了")])]),t._v(" "),s("h3",{attrs:{id:"如何跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何跨域"}},[t._v("#")]),t._v(" 如何跨域")]),t._v(" "),s("ul",[s("li",[t._v("JSONP")]),t._v(" "),s("li",[t._v("CORS")])]),t._v(" "),s("ol",[s("li",[t._v("JSONP: 原理就是通过添加一个"),s("code",[t._v("<script>")]),t._v("标签，向服务器请求JSON数据，这样不受同源政策限制。")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// www.a.com 网页")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSuccess")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.b.com/api/getData"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.b.com/api/getData 返回一段字符串")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onSuccess({code: 200, data: {}})'")]),t._v("\n")])])])]),t._v(" "),s("p",[s("code",[t._v("优点：")])]),t._v(" "),s("ul",[s("li",[t._v("兼容性比较好，可用于解决主流浏览器的跨域数据访问的问题")]),t._v(" "),s("li",[t._v("不受到同源策略的限制，在请求完毕后可以通过调用 callback 的方式回传结果")])]),t._v(" "),s("p",[s("code",[t._v("缺点：")])]),t._v(" "),s("ul",[s("li",[t._v("仅支持get请求；")]),t._v(" "),s("li",[t._v("具有局限性，不安全，可能会受到XSS攻击；")]),t._v(" "),s("li",[t._v("只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 Javascript 调用的问题")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v('CORS\nCORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。\n它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。')])]),t._v(" "),s("p",[t._v("CORS需要浏览器和服务器同时支持。浏览器端IE10+及现代浏览器均支持，整个CORS通信过程，都是浏览器自动完成，不需要用户参与。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CORS 配置允许跨域（服务端）")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin: http://localhost:1011"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者 '*', 允许的跨域源")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Custom-Header'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许携带的头")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET,POST,PUT,DELETE,OPTIONS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许访问的方式")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Credentials"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否允许携带cookie，默认情况下，cors不会携带cookie，除非这个值是true")]),t._v("\n\n")])])]),s("p",[t._v("CORS是规范化的跨域请求解决方案，安全可靠")]),t._v(" "),s("p",[s("code",[t._v("优势：")])]),t._v(" "),s("ul",[s("li",[t._v("在服务端进行控制是否允许跨域，可自定义规则")]),t._v(" "),s("li",[t._v("支持各种请求方式")])]),t._v(" "),s("p",[s("code",[t._v("缺点：")])]),t._v(" "),s("ul",[s("li",[t._v("会产生额外的请求")])])])}),[],!1,null,null,null);s.default=e.exports}}]);