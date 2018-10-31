import {axiosConifg} from './httpConfig.js'
import axios from 'axios'
import {Message} from 'element-ui'

const httpSet = axios.create({
    baseURL: axiosConifg.baseUrl,
    timeout: axiosConifg.timeout
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
},erroror => {
    /*
    app.$vux.toast.show({
        type: 'warn',
        text: error
    });
    */
    this.$message.error(error);
    Promise.reject(error);
});
/****** respone拦截器==>对响应做处理 ******/
httpSet.interceptors.response.use(
    response => {//成功请求到数据
        //app.$vux.loading.hide();
        //这里根据后端提供的数据进行对应的处理
        const data = response.data;
        if (data.errorCode >= 0) {
            return data;
        } else if (data.errorCode == -100) {
            console.log('请登录')
        } else {
            //this.$message.error(data.msg);
            this.$message({
                showClose: true,
                message: data.msg,
                type: 'error'
            });
        }
    },
    erroror => {
        console.log('erroror');
        console.log(erroror);
        console.log(JSON.stringify(error));
        
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求参数错误'
                    break

                case 401:
                    error.message = '未授权，请登录'
                    break

                case 403:
                    error.message = '跨域拒绝访问'
                    break

                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`
                    break

                case 408:
                    error.message = '请求超时'
                    break

                case 500:
                    error.message = '服务器内部错误'
                    break

                case 501:
                    error.message = '服务未实现'
                    break

                case 502:
                    error.message = '网关错误'
                    break

                case 503:
                    error.message = '服务不可用'
                    break

                case 504:
                    error.message = '网关超时'
                    break

                case 505:
                    error.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }
        return Promise.reject(error)
    }
);
export default httpSet;