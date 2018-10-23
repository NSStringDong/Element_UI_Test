<style>
	.first-page {
		margin-bottom: 10px;
		font-size: 20px;
		color: #8dbc38;
		font-weight: normal;
	}
	.now-left {
		width: 40%;
		float: left;
		padding-left: 20px;
	}
	.now-right {
		width: 40%;
		float: right;
		padding-right: 20px;
		text-align: right;
	}
</style>
<template>
	<div>
		<el-row class="first-page">
			<el-col>
				<div class="now-left">今日数据</div>
				<div class="now-right">数据更新时间</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                	<div slot="header" class="clearfix">
                        <span>语言详情</span>
                    </div>
                    <div class="user-info-list">上次登录时间：<span>2018-01-01</span></div>
                    <div class="user-info-list">上次登录地点：<span>东莞</span></div>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>语言详情</span>
                    </div>
                    Vue
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>
                    JavaScript
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
                    CSS
                    <el-progress :percentage="3.7"></el-progress>
                    HTML
                    <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card shadow="hover" style="height:403px;">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
                    <el-table :show-header="false" height="304" style="width: 100%;font-size:14px;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template slot-scope="scope">
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'dashboard',
		data() {
			return {

			}
		}
	}
</script>