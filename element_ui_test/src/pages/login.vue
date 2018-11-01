<style>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        /*background-image: url(../../assets/login-bg.jpg);*/
        /*background-size: 100%;*/
        text-align: center;
        vertical-align: middle;
        background: #f3f3f3;
    }
    .ms-login {
    	width: 380px;
    	height: 420px;
    	margin: auto;
    	background-color: #65be01;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	position: absolute;
    }
    .clearfix {
    	background: url(../assets/imgs/login.png);
    }
    .el-input{
    	margin-top: 22px;
    }
    .el-checkbox {
    	float: left;
    }
</style>
<template>
    <div class="login-wrap">
        <div class="ms-login">
            <el-card class="box-card">
            	<img src="../assets/imgs/login.png" class="image">
            	<div>
            		<el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  					<el-input placeholder="请输入账户" prefix-icon="el-icon-edit" clearable></el-input>
	  					<el-input placeholder="请输入密码" prefix-icon="el-icon-edit" clearable></el-input>
	  					<el-form-item>
	  						<el-checkbox>记住我</el-checkbox>
	  					</el-form-item>
	  					
	  					
	  					<el-form-item>
	    					<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
	  					</el-form-item>
					</el-form>
            	</div>
			</el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>