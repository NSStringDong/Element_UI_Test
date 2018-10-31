import {httpRequest} from '../js/httpRequest.js'

export let userInfoData = {
	data() {
		return {
			userInfo: ''
		}
	},
	created() {
		this.getUserInfo();
	},
	methods: {
		getUserInfo() {
			httpRequest({
		   		url: "systemUser/getUserInfo.json",
		   		method: 'GET',
		   		data: ''
		   	}).then((res) => {
		   		//console.log('数据：'+res.balance);
		   		userInfo = res;
		   	});
		}
	}
}