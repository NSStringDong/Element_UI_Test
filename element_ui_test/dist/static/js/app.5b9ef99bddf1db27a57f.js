webpackJsonp([3],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("tvR6");var r=n("qBF2"),o=n.n(r),a=n("7+uW"),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},s=n("VU/8")({name:"App"},u,!1,null,null,null).exports,i=n("/ocq");a.default.use(i.a);var c=new i.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(e){return n.e(0).then(function(){return e(n("8L02"))}.bind(null,n)).catch(n.oe)},meta:{title:"小绿人管理系统"},children:[{path:"/dashboard",component:function(e){return n.e(1).then(function(){return e(n("XRHL"))}.bind(null,n)).catch(n.oe)},meta:{title:"系统首页"}}]}]}),l=n("ayby");a.default.use(o.a),a.default.prototype.$http=l.a,c.beforeEach(function(e,t,n){n()}),new a.default({router:c,render:function(e){return e(s)}}).$mount("#app")},ayby:function(e,t,n){"use strict";var r=n("mtWM"),o=n.n(r).a.create({baseUrl:config.baseUrl,timeout:config.timeout});o.defaults.withCredentials=!0,o.defaults.headers.post["X-Requested-With"]="XMLHttpRequest",o.defaults.headers.get["X-Requested-With"]="XMLHttpRequest",o.defaults.responseType="json",o.defaults.transformRequest=[function(e){return JSON.stringify(e)}],o.defaults.validateStatus=function(e){return!0},o.interceptors.request.use(function(e){return e.headers.Accept="application/json",e},function(e){Promise.reject(e)}),o.interceptors.response.use(function(e){if("TRUE"===e.data.result)return e.data},function(e){console.log("error"),console.log(e),console.log(JSON.stringify(e));JSON.parse(JSON.stringify(e)).response.status;return Promise.reject(e)});var a=o;t.a=function(e){var t=Object.assign({},{},e);return"GET"==e.method?a({url:t.url,method:t.method,params:t.data}).then(function(e){return console.info("then",e),Promise.resolve(e.data)}).catch(function(e){return console.info("error",e),Promise.resolve(e.data)}):a({url:t.url,method:t.method,data:t.data}).then(function(e){return console.info("then",e),Promise.resolve(e.data)}).catch(function(e){return console.info("error",e),Promise.resolve(e.data)})}},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5b9ef99bddf1db27a57f.js.map