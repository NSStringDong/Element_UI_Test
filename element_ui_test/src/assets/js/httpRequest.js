import httpSet from '../js/httpSet.js'

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
	      console.info("error", error)
	      return Promise.resolve(error.data)
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