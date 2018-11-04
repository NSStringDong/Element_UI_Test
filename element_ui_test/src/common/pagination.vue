<style>
	.page-div {
		width: 100%;
		height: 50px;
		background: #fff;
		color: #606266;
		font-size: 14px;
	}
	.pager {
		float: right;
		padding-top: 10px;
		cursor: pointer;
	}
	.pager, .pager li {
		list-style: none;

	}
	.pager li {
		float: left;
		display: inline-block;
		border: 1px solid #ebeef5;
		padding: 5px;
		margin-left: 5px;
	}
	.pager li input {
		width: 20px;
		text-align: center;
		border: 0px;
		outline: none;
		cursor: pointer;
	}
	.pager li:hover {
		border-color: #65be01;
	}
</style>
<template>
	<div class="page-div">
		<ul class="pager">
			<li v-if="currentPage==1" @click="firstPage()">首页</li>
			<li v-if="currentPage==1" @click="lastPage()">上一页</li>
			<li><input type="text" v-model="inputPage"></li>
			<li @click="nextPage()">下一页</li>
			<li @click="finalPage()">尾页</li>
			<li @click="designatedPage()">转到</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				currentPage: 1,
				totalPage: '',
				isShow: false,
				inputPage: ''
			}
		},
		created() {

		},
		watch: {

		},
		methods: {
			/**
			 * 去首页
			 */
			firstPage() {
				this.currentPage == 1;
			},
			/**
			 * 上一页
			 */
			lastPage() {
				this.currentPage --;
			},
			/**
			 * 下一页
			 */
			nextPage() {
				this.currentPage ++;
				this.$emit('pageTurn', this.currentPage);
			},
			/**
			 * 尾页
			 */
			finalPage() {

			},
			/**
			 * 指定页面
			 */
			designatedPage() {
				this.currentPage == this.inputPage;
			}
		}
	}
</script>