(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{432:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"对象和属性的连续赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象和属性的连续赋值"}},[t._v("#")]),t._v(" 对象和属性的连续赋值")]),t._v(" "),s("h3",{attrs:{id:"值类型-vs-引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#值类型-vs-引用类型"}},[t._v("#")]),t._v(" 值类型 vs 引用类型")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/notes-images/thought/type-compare.png"),alt:"parseInt",width:"800"}}),t._v(" "),s("h3",{attrs:{id:"连续赋值-倒叙执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连续赋值-倒叙执行"}},[t._v("#")]),t._v(" 连续赋值，倒叙执行")]),t._v(" "),s("p",[t._v("日常工作中不推荐连续赋值，可读性低")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nn1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n2 = 100")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n1 = n2 ")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"a-x-比-赋值-的优先级高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-x-比-赋值-的优先级高"}},[t._v("#")]),t._v(" a.x 比 赋值 的优先级高")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可拆解为")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. a.x = undefined // 初始化 a.x 属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. a.x = 100 // 给 x 属性赋值")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可拆解为")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. a.x = undefined // 初始化 a.x 属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. let b = a.x // b 变量是假想的，实际执行时不会有这一步")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. b = a = {n: 2} // 连续赋值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. a = {n: 2} ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5. b = a")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/assets/notes-images/thought/连续赋值.png"),alt:"parseInt",width:"600"}})])}),[],!1,null,null,null);s.default=e.exports}}]);