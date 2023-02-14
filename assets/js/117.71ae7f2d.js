(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{377:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重绘repaint和重排reflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘repaint和重排reflow"}},[t._v("#")]),t._v(" 重绘repaint和重排reflow")]),t._v(" "),a("h3",{attrs:{id:"触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发"}},[t._v("#")]),t._v(" 触发")]),t._v(" "),a("p",[t._v("动态网页随时都会触发重绘和重排")]),t._v(" "),a("ul",[a("li",[t._v("网页动画")]),t._v(" "),a("li",[t._v("Modal Dialog 弹框")]),t._v(" "),a("li",[t._v("增加/删除元素，显示/隐藏元素")])]),t._v(" "),a("h3",{attrs:{id:"重绘-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘 repaint")]),t._v(" "),a("ul",[a("li",[t._v("重新绘制")]),t._v(" "),a("li",[t._v("eg: 颜色、背景色")]),t._v(" "),a("li",[t._v("绘制的是元素外观的改变")]),t._v(" "),a("li",[t._v("元素的尺寸、定位不变，并不会影响其他元素的位置")])]),t._v(" "),a("h3",{attrs:{id:"重排-reflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排-reflow"}},[t._v("#")]),t._v(" 重排 reflow")]),t._v(" "),a("ul",[a("li",[t._v("重新排列")]),t._v(" "),a("li",[t._v("eg: 高度变小，可能会使相邻元素位置上移")]),t._v(" "),a("li",[t._v("需要重新计算尺寸和布局，可能会影响其他元素的位置")])]),t._v(" "),a("h3",{attrs:{id:"如何减少重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何减少重排"}},[t._v("#")]),t._v(" 如何减少重排")]),t._v(" "),a("p",[a("code",[t._v("注意：")]),t._v(" 重排比重绘影响更大，消耗也更大，所以，要尽量避免无意义的重排")]),t._v(" "),a("ul",[a("li",[t._v("集中修改样式，或者直接切换"),a("code",[t._v("css类名")]),t._v(" => 集中修改、一次重排，多次修改、多次重排")]),t._v(" "),a("li",[t._v("复杂的多次变化，修改之前先设置"),a("code",[t._v("diaplay:none")]),t._v("，脱离文档流，修改完后再显示")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("BFC")]),t._v(" 特性，不影响其他元素位置。 => BFC 内部元素改变不影响外部元素布局")]),t._v(" "),a("li",[t._v("优化动画，使用"),a("code",[t._v("CSS3和reauestAnimationFrame")]),t._v("。 => 能够触发浏览器自身的动画优化机制")]),t._v(" "),a("li",[t._v("批量操作DOM，使用"),a("code",[t._v("文档碎片")]),t._v("（createDocumentFragment）或虚拟节点对象")]),t._v(" "),a("li",[t._v("频繁触发（resize、scroll等）使用"),a("code",[t._v("防抖节流")])])]),t._v(" "),a("h3",{attrs:{id:"触发bfc的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发bfc的条件"}},[t._v("#")]),t._v(" 触发BFC的条件")]),t._v(" "),a("ul",[a("li",[t._v("根节点"),a("code",[t._v("<html>")])]),t._v(" "),a("li",[t._v("float: left/right")]),t._v(" "),a("li",[t._v("display: inline-block/table/table-row/table-cell")]),t._v(" "),a("li",[t._v("diaplay: flex/grid")]),t._v(" "),a("li",[t._v("overflow: auto/hidden/scroll")]),t._v(" "),a("li",[t._v("position: absolute/fixed")])]),t._v(" "),a("h3",{attrs:{id:"创建文档碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文档碎片"}},[t._v("#")]),t._v(" 创建文档碎片")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("document.createDocumentFragment()")]),t._v("创建文档碎片")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fragment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" li "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hellow'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i\n        fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);