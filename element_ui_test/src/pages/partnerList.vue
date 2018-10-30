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
			  	<el-input placeholder="请输入内容" clearable>
			    	<el-button slot="append" icon="el-icon-search"></el-button>
			  	</el-input>
			</div>
			<div class="search-btn">
				<el-button class="new-btn" type="success">成功按钮</el-button>
			</div>
		</div>
		<div class="table-content">
			<el-table :data="tableData" border style="width: 100%">
    			<el-table-column prop="date" label="ID" width="150"></el-table-column>
    			<el-table-column prop="name" label="名称" width="120"></el-table-column>
    			<el-table-column prop="province" label="类型" width="120"></el-table-column>
    			<el-table-column prop="city" label="结算方式" width="120"></el-table-column>
    			<el-table-column prop="address" label="分成比例" width="300"></el-table-column>
    			<el-table-column prop="zip" label="单位金额" width="120"></el-table-column>
    			<el-table-column prop="zip" label="邮箱" width="120"></el-table-column>
    			<el-table-column prop="zip" label="备注" width="120"></el-table-column>
    			<el-table-column fixed="right" label="操作" width="100">
      				<template slot-scope="scope">
        				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        				<el-button type="text" size="small">编辑</el-button>
      				</template>
    			</el-table-column>
  			</el-table>
		</div>
	</div>
	
</template>
<script>
	export default {
		name: '',
		data() {
			return{

			}
		},
		created() {

		},
		watch: {

		},
		methods: {

		}
	}
</script>