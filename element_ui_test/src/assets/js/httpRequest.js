import httpSet from 'httpSet.js'

function httpRequest(opt) {
	let config = Object.assign({}, {}, opt);
	if (opt.method == 'GET') {
		return httpSet({
			url: config.url,
			method: config.method,
			params: config.data
		})
	} else {
		return httpSet({
			url: config.url,
			method: config.method,
			data: config.data
		})
	} 
}

export default function (opt) {
    return httpRequest(opt);
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