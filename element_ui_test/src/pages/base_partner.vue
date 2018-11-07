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
				<el-button class="new-btn" type="success" @click="isNew=true">新建</el-button>
			</div>
		</div>
		<div class="table-content">
			<el-table :data="tableData" size="medium" border @cell-dblclick="goToDetail" @filter-change="filterHandler">
    			<el-table-column align="center" prop="partnerId" label="ID"></el-table-column>
    			<el-table-column align="center" prop="partnerName" label="名称"></el-table-column>
    			<el-table-column align="center" prop="partnerType" label="类型" column-key="partnerType" :filters="this.partnerTypeDic" :filter-multiple="false">
    				<template slot-scope="scope">
    					<p>{{scope.row.partnerType | getPartnertype}}</p>
    				</template>
    			</el-table-column>
    			<el-table-column align="center" label="结算方式">
    				<template slot-scope="scope">
    					<p>{{scope.row.settlementType | getProrationType}}</p>
    				</template>
    			</el-table-column>
    			<el-table-column align="center" label="分成比例">
    				<template slot-scope="scope">
    					<p>{{scope.row.proration | getProration}}</p>
    				</template>
    			</el-table-column>
    			<el-table-column align="center" prop="unit" label="单位金额"></el-table-column>
    			<el-table-column align="center" prop="email" label="邮箱"></el-table-column>
    			<el-table-column align="center" prop="comment" label="备注"></el-table-column>
    			<el-table-column align="center" label="操作" width="100">
      				<template slot-scope="scope">
        				<el-button type="text" icon="el-icon-view" @click="goToDetail(scope.row)" size="small">详情</el-button>
      				</template>
    			</el-table-column>
  			</el-table>
  			<v-page @pageTurn="getPartnerList"></v-page>
		</div>
		<el-dialog title="新建合作伙伴" :visible.sync="isNew" center width="30%">
  			<el-form>
	    		<el-form-item v-model="partnerName" label="名称" :label-width="formLabelWidth">
	      			<el-input autocomplete="off"></el-input>
	    		</el-form-item>
	    		<el-form-item label="伙伴类型" :label-width="formLabelWidth">
	      			<el-select v-model="coo_type" placeholder="请选择">
	        			<el-option v-for="item in partnerTypeDic" :key="item.value" :label="item.text" :value="item.value"></el-option>
	      			</el-select>
	    		</el-form-item>
	    		<el-form-item label="结算周期" :label-width="formLabelWidth">
	    			<el-select v-model="settlement_cycle" placeholder="请选择">
	    				<el-option v-for="item in settlementCycleDic" :key="item.value" :label="item.text" :value="item.value"></el-option>
	    			</el-select>
	    		</el-form-item>
	    		<el-form-item label="分成方式" :label-width="formLabelWidth">
	    			
	    		</el-form-item>
  			</el-form>
  			<div slot="footer" class="dialog-footer">
    			<el-button @click="isNew=false">取 消</el-button>
    			<el-button type="primary" @click="isNew=false">确 定</el-button>
  			</div>
		</el-dialog>
	</div>
</template>
<script>
	import {httpRequest} from '../assets/js/httpRequest.js'
	import vPagination from '../common/pagination.vue'
	export default {
		name: '',
		data() {
			return{
				partnerName: '',//合作伙伴名称
				coo_type: '',   //伙伴类型
				settlement_cycle: '',//结算周期
				tableData: [],
				key: '',
				partnerType: '',
				isNew: false,
				formLabelWidth: '80px',
				partnerTypeDic: [
					{
						text: '小绿人',
						value: '0'
					},
					{
						text: '电动汽车物业',
						value: '1'
					},
					{
						text: '安装商',
						value: '2'
					},
					{
						text: '4S店',
						value: '3'
					},
					{
						text: '车企',
						value: '4'
					},
					{
						text: '自行车物业',
						value: '5'
					},
					{
						text: '自行车站主',
						value: '6'
					},
					{
						text: '代理商',
						value: '7'
					}
				],
				settlementCycleDic: [
					{
						text: '每日',
						value: '1'
					},
					{
						text: '每周',
						value: '2'
					},
					{
						text: '每月',
						value: '3'
					},
					{
						text: '每季度',
						value: '4'
					},
					{
						text: '每半月',
						value: '5'
					},
					{
						text: '每两月',
						value: '7'
					},
					{
						text: '实时结算',
						value: '8'
					}
				]
			}
		},
		components:{
            'v-page': vPagination
        },
		created() {
			this.getPartnerList(1);
		},
		watch: {

		},
		methods: {
			/**
			 * 获取合作伙伴列表
			 * @param  {int} page 当前页数
			 */
			getPartnerList(currentPage) {
				console.log('当前页：'+currentPage);
				var self = this;
				var requestData = {
					num: 20,
					page: currentPage
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
			},
			/**
			 * 详情页
			 * @param  {int} row partnerID
			 */
			goToDetail(row) {
				console.log('详情页:'+row.partnerId);
			},
			/**
			 * 类型筛选回调
			 * @param  {array} filters 筛选数组
			 */
			filterHandler(filters) {
				console.info(filters);
				let row = null
      			let val = null
      			for (const i in filters) {
			        row = i // 保存 column-key的值，如果事先没有为column-key赋值，系统会自动生成一个唯一且恒定的名称
			        val = filters[i]
			    }
			    console.log('value:'+val);
			}
		}
	}
</script>