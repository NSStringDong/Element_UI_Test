import {axiosConifg} from '../js/httpConfig.js'
import axios from 'axios'

const httpSet = axios.create({
    baseUrl: config.baseUrl,
    timeout: config.timeout
});
//设置使用cookies
httpSet.defaults.withCredentials = true;

httpSet.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

httpSet.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';

httpSet.defaults.responseType = 'json';

httpSet.defaults.transformRequest = [
	function (data) {
    	//数据序列化
    	return JSON.stringify(data);
	}
];

httpSet.defaults.validateStatus = function (status) {
    return true;
};
//配置请求头信息
httpSet.interceptors.request.use(config => {
    //配置config
    config.headers.Accept = 'application/json';
    // config.headers.System = 'vue';
    // let token = Vue.localStorage.get('token');
    // if(token){
    //     config.headers.Token = token;
    // }
    return config;
},error => {
    /*
    app.$vux.toast.show({
        type: 'warn',
        text: error
    });
    */
    Promise.reject(error);
});
/****** respone拦截器==>对响应做处理 ******/
httpSet.interceptors.response.use(
    response => {//成功请求到数据
        //app.$vux.loading.hide();
        //这里根据后端提供的数据进行对应的处理
        if (response.data.result === 'TRUE') {
            return response.data;
        } else {
            // app.$vux.toast.show({  //常规错误处理
            //     type: 'warn',
            //     text: response.data.data.msg
            // });
        }
    },
    error => {
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));
 
        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '404'
            : '网络异常，请重试';
        // app.$vux.toast.show({
        //     type: 'warn',
        //     text: text
        // });
 
        return Promise.reject(error)
    }
);
export default httpSet;