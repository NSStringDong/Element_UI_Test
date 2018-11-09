<style scoped>
	.no-border {
		border: none;
	}
	.tab-ul {
		border: 1px solid #dcdcdc;
		border-bottom: none;
	}
	.tab-ul li {
		border-bottom: 1px solid #dcdcdc;
		padding: 13px 50px;
		line-height: 1.2;
		overflow: hidden;
	}
	.tab-ul li h2 {
		word-break: break-all;
    	word-wrap: break-word;
    	font-size: 14px;
    	font-weight: normal;
    	line-height: 20px;
    	float: left;
    	color: #8d8d8d;
    	width: 150px;
	}
	.tab-ul li p {
		width: 500px;
    	word-break: break-all;
    	word-wrap: break-word;
    	font-size: 14px;
    	font-weight: normal;
    	line-height: 20px;
    	float: left;
	}
	.tab-ul li a {
		float: right;
    	color: #0080a5;
    	font-size: 14px;
    	text-decoration: underline;
	}
	.firstItem {
		background: #f4f5f9;
	}
</style>
<template>
	<div class="list-content">
		<div class="top-break no-border">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{ path: '/partnerList' }">合作伙伴</el-breadcrumb-item>
			  	<el-breadcrumb-item>
			  		<template>
			  			<p>详情</p>
			  		</template>
			  	</el-breadcrumb-item>
			</el-breadcrumb>
			<el-tabs v-model="message">
    			<el-tab-pane label="基础资料" name="first">
    				<ul class="tab-ul">
    					<li class="firstItem">基础信息</li>
    					<li>
    						<h2>ID</h2>
    						<p>123456</p>
    						<a href="javascript:void(0)">修改</a>
    					</li>
    					<li>基础资料</li>
    					<li>基础资料</li>
    					<li>基础资料</li>
    					<li>基础资料</li>
    				</ul>
    			</el-tab-pane>
    			<el-tab-pane label="充电站点" name="second">
    				
    			</el-tab-pane>
    			<el-tab-pane label="月结单" name="third">
    				
    			</el-tab-pane>
    			<el-tab-pane label="钱包" name="fourth">
    				
    			</el-tab-pane>
    			<el-tab-pane label="管理员" name="fifth">
    				
    			</el-tab-pane>

  			</el-tabs>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				message: 'first'
			}
		}
	}
</script>