<style scoped>
	.no-border {
		border: none;
	}
	.tab-ul {
		border: 1px solid #dcdcdc;
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
    					<li>基础资料</li>
    					<li>基础资料</li>
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