webpackJsonp([6],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};r.d(n,"getPartnertype",function(){return k}),r.d(n,"getProrationType",function(){return v}),r.d(n,"getProration",function(){return w});var a=r("nu7/"),s=r.n(a),o=r("2X9z"),u=r.n(o),c=(r("tvR6"),r("qBF2")),i=r.n(c),l=r("7+uW"),f=(r("Xcu2"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var d=r("VU/8")({name:"App"},f,!1,function(e){r("kgPU")},null,null).exports,p=r("/ocq");l.default.use(p.a);var m=new p.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(e){return r.e(4).then(function(){return e(r("8L02"))}.bind(null,r)).catch(r.oe)},meta:{title:"小绿人管理系统"},children:[{path:"/dashboard",component:function(e){return r.e(3).then(function(){return e(r("XRHL"))}.bind(null,r)).catch(r.oe)},meta:{title:"系统首页"}},{path:"/partnerList",component:function(e){return r.e(0).then(function(){return e(r("J2No"))}.bind(null,r)).catch(r.oe)},meta:{title:"合作伙伴"}},{path:"/partnerDetail",name:"partnerDetail",component:function(e){return r.e(2).then(function(){return e(r("kPI+"))}.bind(null,r)).catch(r.oe)},meta:{title:"合作伙伴详情"}}]},{path:"/login",name:"login",component:function(e){return r.e(1).then(function(){return e(r("Luci"))}.bind(null,r)).catch(r.oe)}}]}),h=r("ayby"),b=r("NC6I"),g=r.n(b),k=function(e){switch(e){case 0:return"小绿人";case 1:return"电动汽车物业";case 2:return"安装商";case 3:return"4S店";case 4:return"车企";case 5:return"自行车物业";case 6:return"自行车站主";case 7:return"代理商";default:return""}},v=function(e){switch(e){default:return"";case 1:return"按比例分成";case 2:return"抄表";case 3:return"小绿人收取管理费";case 4:return"小绿人资费提成";case 5:return"系统度数";case 6:return"按梯度分成";case 7:return"扣除电费分成";case 8:return"订单数提成";case 9:return"扣除订单数服务费提成";case-1:return"按业务类型结算";case 99:return"无结算"}},w=function(e){return e<=0||null==e?"":e+"%"};l.default.use(i.a),l.default.prototype.$http=h.a,l.default.prototype.$message=u.a,l.default.prototype.$loading=s.a,l.default.prototype.$md5=g.a,Object.keys(n).forEach(function(e){l.default.filter(e,n[e])}),m.beforeEach(function(e,t,r){"/login"===e.path?r():Object(h.a)({url:"systemUser/getUserInfo.json",method:"GET",data:""}).then(function(e){""==e||"undefined"==e||null==e?r("/login"):r()})}),new l.default({router:m,render:function(e){return e(d)}}).$mount("#app")},Xcu2:function(e,t){},ayby:function(e,t,r){"use strict";var n=r("2X9z"),a=r.n(n),s="/jweb_management/";"www.xlvren.com"===window.domain||(s="http://test.xlvren.com/jweb_management/");var o={timeout:2e4,baseUrl:s},u=r("mtWM"),c=this,i=r.n(u).a.create({baseURL:o.baseUrl,timeout:o.timeout});i.defaults.withCredentials=!0,i.defaults.headers.post["X-Requested-With"]="XMLHttpRequest",i.defaults.headers.get["X-Requested-With"]="XMLHttpRequest",i.defaults.responseType="json",i.defaults.transformRequest=[function(e){return JSON.stringify(e)}],i.defaults.validateStatus=function(e){return!0},i.interceptors.request.use(function(e){return e.headers.Accept="application/json",e},function(e){c.$message.error(e),Promise.reject(e)}),i.interceptors.response.use(function(e){if(200!=e.status){console.info("请求返回:"+JSON.stringify(e));var t=new Error;throw t.data=e.data,t.response=e,t}var r=e.data;if(r.errorCode>=0)return r;r.errorCode,a()({showClose:!0,message:r.msg,type:"error"})},function(e){if(console.log("123error"),console.info(e),console.info(JSON.stringify(e)),e&&e.response){switch(e.response.status){case 400:e.message="请求参数错误";break;case 401:e.message="未授权，请登录";break;case 403:e.message="跨域拒绝访问";break;case 404:e.message="请求地址出错: "+e.response.config.url;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持"}a.a.error(e.message)}return Promise.reject(e)});var l=i;t.a=function(e){var t=Object.assign({},{},e);return"GET"==e.method?l({url:t.url,method:t.method,params:t.data}).then(function(e){return console.info("get-then",e),Promise.resolve(e.data)}).catch(function(e){var t="";if(e&&e.response){switch(e.response.status){case 400:t="请求参数错误";break;case 401:t="未授权，请登录";break;case 403:t="跨域拒绝访问";break;case 404:t="请求地址出错: "+e.response.config.url;break;case 408:t="请求超时";break;case 500:t="服务器内部错误";break;case 501:t="服务未实现";break;case 502:t="网关错误";break;case 503:t="服务不可用";break;case 504:t="网关超时";break;case 505:t="HTTP版本不受支持"}a.a.error(t)}return Promise.resolve(t)}):l({url:t.url,method:t.method,data:t.data}).then(function(e){return console.info("post-then",e),Promise.resolve(e.data)}).catch(function(e){return console.info("error",e),Promise.resolve(e.data)})}},kgPU:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c7caf16562f94721f72b.js.map