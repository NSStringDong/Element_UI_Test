<template>
	<div class="header">
		<div class="logo">小绿人-管理系统</div>
		<div class="header-right">
			<div class="header-user-con">
				<ul class="user-ul">
					<li><a href="">首页</a></li>
					<li><a href="">name</a></li>
					<li><a href="">消息</a></li>
					<li><a href="javascript:void(0)" @click="logoutAccount()">退出</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import bus from '../common/bus.js'
	import {httpRequest} from '../assets/js/httpRequest.js'
	export default {
		data() {
			return {

			}
		},
		created() {

		},
		methods: {
			logoutAccount() {
				httpRequest({
					url: "systemUser/logout.json",
   					method: 'GET',
   					data: ''
				}).then((res) => {
					this.$router.replace({name: 'login'});
				})
				
			}
		}
	}
</script>