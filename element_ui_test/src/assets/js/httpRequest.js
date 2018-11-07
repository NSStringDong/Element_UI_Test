import httpSet from '../js/httpSet.js'
import {Message} from 'element-ui'

export function httpRequest(opt) {
	let config = Object.assign({}, {}, opt);
	if (opt.method == 'GET') {
		return httpSet({
			url: config.url,
			method: config.method,
			params: config.data
		}).then((res)=>{
			console.info("get-then", res)
      		return Promise.resolve(res.data)
		}).catch(function (error) {
	      	// console.info("error:"+JSON.stringify(error));
	      	let errMsg = ''
	      	if (error && error.response) {
	            switch (error.response.status) {
	                case 400:
	                    errMsg = '请求参数错误'
	                    break

	                case 401:
	                    errMsg = '未授权，请登录'
	                    break

	                case 403:
	                    errMsg = '跨域拒绝访问'
	                    break

	                case 404:
	                    errMsg = `请求地址出错: ${error.response.config.url}`
	                    break

	                case 408:
	                    errMsg = '请求超时'
	                    break

	                case 500:
	                    errMsg = '服务器内部错误'
	                    break

	                case 501:
	                    errMsg = '服务未实现'
	                    break

	                case 502:
	                    errMsg = '网关错误'
	                    break

	                case 503:
	                    errMsg = '服务不可用'
	                    break

	                case 504:
	                    errMsg = '网关超时'
	                    break

	                case 505:
	                    errMsg = 'HTTP版本不受支持'
	                    break

	                default:
	            }
	            Message.error(errMsg);
	        }
	      	return Promise.resolve(errMsg)
	    });
	} else {
		return httpSet({
			url: config.url,
			method: config.method,
			data: config.data
		}).then((res)=>{
			console.info("post-then", res)
      		return Promise.resolve(res.data)
		}).catch(function (error) {
	      	console.info("error", error)
	      	return Promise.resolve(error.data)
	    });
	} 
}
/*
export const getPersonInfo = data => {
    return service({
        url: '/person_pay/getpersoninfo',
        method: 'post',
        data
    })
};
let res = await getPersonInfo(params);
*/
/**
 * get请求
 * @param urlLink
 * @param param
 * @returns {Promise<AxiosResponse>}
 */
/*
export function getData(urlLink, param) {
  const url = urlLink
  const data = Object.assign({}, commonParams, param)

  return instance.get(url, {
    params: data,
    timeout: 5000
  })
    .then((res) => {
      console.info("then", res)
      return Promise.resolve(res.data)
    })
    .catch(function (error) {
      console.info("error", error)
      return Promise.resolve(error.data)
    });
}
*/