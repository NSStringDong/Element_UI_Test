// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'


Vue.use(ElementUI)



//Vue.prototype.$http = axios;
//Vue.prototype.$axios = api;
// Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    /*
    api.get('systemUser/getUserInfo.json',"","").then((res) => {
    	console.log(res);
    });
    */
    next();
})

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
