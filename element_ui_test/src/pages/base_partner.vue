<style>
	.list-content {
		background-color: #fff;
	}
	.top-break {
		height: 44px;
		border-bottom: 1px solid #dcdcdc
	}
	.el-breadcrumb {
		height: 44px;
		line-height: 44px;
		margin-left: 16px;
	}
	.serach-content {
		height: 92px
	}
	.search-input {
		width: 35%;
		float: left;
		margin-top: 30px;
		margin-left: 16px;
	}
	.search-btn {
		width: 60%;
		float: right;
		margin-top: 30px;
	}
	.new-btn {
		float: right;
		margin-right: 16px;
	}
	.el-input :focus {
		border: 1px solid #65be01;
	}
	.table-content {
		margin-left: 16px;
		margin-right: 16px;
		margin-top: 10px;
		margin-bottom: 30px;
		/*padding-right: 16px;*/
		text-align: center;
	}
</style>
<template>
	<div class="list-content">
		<div class="top-break">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{ path: '/partnerList' }">合作伙伴</el-breadcrumb-item>
			  	<el-breadcrumb-item>活动管理</el-breadcrumb-item>
			  	<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			  	<el-breadcrumb-item>活动详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="serach-content">
			<div class="search-input">
			  	<el-input placeholder="请输入内容" v-model="key" clearable>
			    	<el-button slot="append" icon="el-icon-search"></el-button>
			  	</el-input>
			</div>
			<div class="search-btn">
				<el-button class="new-btn" type="success">新建</el-button>
			</div>
		</div>
		<div class="table-content">
			<el-table :data="tableData" border size="medium " style="width: 100%">
    			<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
    			<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
    			<el-table-column align="center" prop="partnerType" label="类型">
    				<!-- <template slot-scope="scope">
    					<p>{{scope.row.partnerType | formateStatus}}</p>
    				</template> -->
    			</el-table-column>
    			<el-table-column align="center" prop="settlementType" label="结算方式"></el-table-column>
    			<el-table-column align="center" prop="proration" label="分成比例"></el-table-column>
    			<el-table-column align="center" prop="unit" label="单位金额"></el-table-column>
    			<el-table-column align="center" prop="email" label="邮箱"></el-table-column>
    			<el-table-column align="center" prop="comment" label="备注"></el-table-column>
    			<el-table-column align="center" label="操作" width="100">
      				<template slot-scope="scope">
        				<el-button type="text" icon="el-icon-view" @click="handleClick(scope.row)" size="small">详情</el-button>
      				</template>
    			</el-table-column>
  			</el-table>
		</div>
	</div>
	
</template>
<script>
	import {httpRequest} from '../assets/js/httpRequest.js'
	export default {
		name: '',
		data() {
			return{
				tableData: [],
				key: ''
			}
		},
		created() {
			this.getPartnerList(1);
		},
		watch: {

		},
		methods: {
			getPartnerList(page) {
				var self = this;
				var requestData = {
					num: 20,
					page: page
				}
				if (self.key) {
					requestData.key = self.key;
				}
				httpRequest({
					url: 'listPartner.json',
					method: 'GET',
					data: requestData
				}).then((res) => {
					self.tableData = res;
				})
			}
		}
	}
</script>