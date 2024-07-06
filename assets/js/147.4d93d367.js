(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{567:function(s,a,e){"use strict";e.r(a);var n=e(28),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"初始化-nodejs-npm-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-nodejs-npm-环境"}},[s._v("#")]),s._v(" 初始化 nodejs npm 环境")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ cd 目录\n\n$ npm init\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("这样就可以在指定的目录下使用 npm 指令了")]),s._v(" "),e("h3",{attrs:{id:"作为开发环境的依赖包添加到-package-json-文件中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为开发环境的依赖包添加到-package-json-文件中"}},[s._v("#")]),s._v(" 作为开发环境的依赖包添加到 package.json 文件中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ npm i webpack webpack-cli -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"执行打包指令-不使用-webpack-config-js-时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行打包指令-不使用-webpack-config-js-时"}},[s._v("#")]),s._v(" 执行打包指令（不使用 webpack.config.js 时）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("开发环境：\n$ webpack --entry ./src/index.js -o ./build --mode=development\n生产环境：\n$ webpack --entry ./src/index.js -o ./build --mode=production\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"在-nodejs-环境下测试运行打包后生成的-build-main-js-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-nodejs-环境下测试运行打包后生成的-build-main-js-文件"}},[s._v("#")]),s._v(" 在 nodejs 环境下测试运行打包后生成的 ./build/main.js 文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ node .\\build\\main.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"webpack-默认只认识-js-文件-对于-css-img-等其他文件在打包时-要用不同的加载器来处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-默认只认识-js-文件-对于-css-img-等其他文件在打包时-要用不同的加载器来处理"}},[s._v("#")]),s._v(" webpack 默认只认识 js 文件，对于 css/img 等其他文件在打包时，要用不同的加载器来处理")]),s._v(" "),e("p",[s._v("例如：index.css 文件，需要使用 css-loader style-loader 来处理，这时候就需要在开发环境依赖中安装这两个插件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ npm i css-loader style-loader -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用-webpack-config-js-配置打包的设置后-运行打包指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-config-js-配置打包的设置后-运行打包指令"}},[s._v("#")]),s._v(" 使用 webpack.config.js 配置打包的设置后，运行打包指令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ webpack\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);