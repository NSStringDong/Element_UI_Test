// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import {axiosConifg} from './assets/js/httpConfig.js'
import axios from 'axios'

Vue.use(ElementUI)



//Vue.prototype.$http = axios;
let axiosIns = axios.create({});


axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';

axiosIns.defaults.responseType = 'json';

axiosIns.defaults.transformRequest = [
	function (data) {
    	//数据序列化
    	return qs.stringify(data);
	}
];

axiosIns.defaults.validateStatus = function (status) {
    return true;
};
axiosIns.interceptors.request.use(function (config) {
    //配置config
    config.headers.Accept = 'application/json';
    // config.headers.System = 'vue';
    // let token = Vue.localStorage.get('token');
    // if(token){
    //     config.headers.Token = token;
    // }
    return config;
});
axiosIns.interceptors.response.use(function (response) {
    let data = response.data;
    let status = response.status;
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
});
let ajaxMethod = ['get', 'post'];
let api = {};

ajaxMethod.forEach((method)=> {
    //数组取值的两种方式
    api[method] = function (uri, data, config) {
        return new Promise(function (resolve, reject) {
            axiosIns[method](axiosConifg.baseUrl+uri, data, config).then((response)=> {
            	/*
                if (response.data.StatusCode) {
                    //toast封装：  参考ele-mint-ui
                    Toast({
                        message: response.data.Message,
                        position: 'top',
                        duration: 2000
                    });
                    if (response.data.Message === '未登录') {
                        Toast({
                            message: response.data.Message,
                            position: '',
                            duration: 2000
                        });
                        //使用vue实例做出对应行为  change state or router
                        //instance.$store.commit('isLoginShow',true);
                    }
                } else {
                    resolve(response);
                }
                */
            }).catch((response)=> {
                //reject response
                //alert('xiuxiu，限你10分钟到我面前来,不然...');
            })
        })
    }
});
//this.$axios.post(url,config).then((res) => {console.log(res)})
Vue.prototype.$axios = api;
// Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    api.get('systemUser/getUserInfo.json',"","").then((res) => {
    	console.log(res);
    });
    next();
})

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
