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
			  			<p v-text="partnerName"></p>
			  		</template>
			  	</el-breadcrumb-item>
			</el-breadcrumb>
			<el-tabs v-model="message">
    			<el-tab-pane label="基础资料" name="first">
    				<ul class="tab-ul">
    					<li class="{firstItem:index==0}" v-for="(item,index) in baseDetail" :key="index">
    						<h2 v-text="item.name"></h2>
    						<p v-text="item.value"></p>
    						<a v-if="index>1" href="javascript:void(0)">修改</a>
    					</li>
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
	import {httpRequest} from '../assets/js/httpRequest.js'
	export default {
		data() {
			return {
				message: 'first',
				partnerId: this.$route.query.partnerId,
				partnerName: '',
				partnerDetail: '',
				partnerManager: '',
				baseArray: [
					'基础信息',
					'ID：',
					'名称：',
					'类型：',
					'结算周期：',
					'分成方式：',
					'分成比例：',
					'度数分成：',
					'4S店优惠：',
					'公司主体：',
					'优惠时间：',
					'开户银行：',
					'开户城市：',
					'银行户名：',
					'银行账户：',
					'邮箱地址：',
					'管理员：',
					'管理员电话：',
					'备注：'
				],
				baseDetail: []
			}
		},
		created() {
			this.getPartnerDetailInfo();
		},
		watch: {

		},
		methods: {
			getPartnerDetailInfo() {
				let self = this;
				httpRequest({
					url: 'findPartnerById.json',
					method: 'GET',
					data:{
						partnerId: self.partnerId
					}
				}).then((res) => {
					self.partnerDetail = res;
					self.partnerName = '详情('+res.partnerName+')';
					self.getPartnerManagerInfo(res);
				})
			},
			getPartnerManagerInfo(base) {
				let self = this;
				httpRequest({
					url: 'getPartnerManagerInfo.json',
					method: 'GET',
					data: {
						partnerId: self.partnerId
					}
				}).then((res) => {
					self.partnerManager = res;
					var baseData = [
						'',
						base.partnerID,
						base.partnerName,
						base.partnerType,
						base.timeCycle,//结算周期
						base.settlementType,//分成方式
						base.proration,//分成比例
						base.unit,//度数分成
						base.discountFlag,//4S店优惠
						base.xlvrenType,//公司主体
						base.discountStartDate,//优惠时间
						base.bank,//开户银行
						base.bankCityName,//开户城市
						base.bankUserName,//银行户名
						base.bankAccount,//银行账户
						base.email,//邮箱地址
						res.username,//管理员
						res.userMobile,//管理员电话
						base.comment//备注
					];
					self.dataStringifyToJson(baseData);
				})
			},
			dataStringifyToJson(arr) {
				let self = this;
				for (var i = 0; i < self.baseArray.length; i++) {
					self.baseDetail.push({
						name: self.baseArray[i],
						value: arr[i]
					})
				}
			}
		}
	}
</script>