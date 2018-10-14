<template>
	<div class="header">
		<div class="logo">小绿人-管理系统</div>
		<div class="header-right">
			<div class="header-user-con">
				<ul class="user-ul">
					<li><a href="">首页</a></li>
					<li><a href="">name</a></li>
					<li><a href="">消息</a></li>
					<li><a href="">退出</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import bus from '../common/bus.js'
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style>
	.header {
		height: 72px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #ebebeb;
	}
	.logo {
		width: 200px;
		height: 72px;
		float: left;
		line-height: 70px;
		font-size: 24px;
		color: #8dbc38;
		font-weight: normal;
		padding-left: 68px;
		margin-left: 72px;
		background: url('../assets/imgs/logo.gif') no-repeat 0 10px;
	}
	.header-right {
		height: 100%;
		width: 300px;
		float: right;
		margin-right: 72px;
	}
	.header-user-con {
        display: flex;
        height: 72px;
        align-items: center;
    }
    .user-ul {
    	overflow: hidden;
    	height: 100%;
    }
    .user-ul li {
    	list-style: none;
		float: left;
    }
    .user-ul li a {
    	display: block;
    	width: auto;
    	height: 69px;
    	line-height: 69px;
    	margin-left: 34px;
    	font-size: 14px;
    }
    .user-ul li a:hover {
		color:#65be01;
		border-bottom: 2px solid #65be01;
    }
</style>