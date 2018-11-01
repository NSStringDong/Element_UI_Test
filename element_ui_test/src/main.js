// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import {httpRequest} from './assets/js/httpRequest.js'
import {Message,Loading} from 'element-ui'
import {userInfoData} from './assets/js/initUser.js'

Vue.use(ElementUI)
Vue.prototype.$http = httpRequest;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading;

//Vue.prototype.$http = axios;
//Vue.prototype.$axios = api;
// Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		httpRequest({
	   		url: "systemUser/getUserInfo.json",
	   		method: 'GET',
	   		data: ''
	   	}).then((res) => {
	   		//console.log('数据：'+res.balance);
	   		if (res == ''||res=='undefined'||res==null) {
	   			next('/login');
	   		}else{
	   			next();
	   		}
	   	});
	}
})

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
