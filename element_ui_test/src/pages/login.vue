<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        /*background-image: url(../../assets/login-bg.jpg);*/
        /*background-size: 100%;*/
        text-align: center;
        vertical-align: middle;
        background: #f3f3f3;
        background-image: url(../assets/imgs/case_bg1.jpg);
    }
    .ms-login {
    	width: 380px;
    	height: 420px;
    	margin: auto;
    	/*background-color: #65be01;*/
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
    .remeberCheck {
    	width: 100%;
    	height: 20px;
    	padding-top: 20px;
    	padding-bottom: 20px;
    }
    .forgetPsd {
    	float: right;
    	height: 19px;
    	line-height: 19px;
    }
    .forgetPsd a {
    	font-size: 14px;
    	color: #409eff;
    }
    .forgetPsd a:hover{
    	text-decoration: underline;
    }
    .el-button {
    	width: 100%;
    }
    .el-form-item {
    	margin-bottom: 0px;
    }
    .box-card>>>.el-form-item div {
    	margin-left: 0px !important; 
    }
</style>
<template>
    <div class="login-wrap">
        <div class="ms-login">
            <el-card class="box-card">
            	<img :src="login_url" class="image">
            	<div>
            		<el-form :model="loginData" :rules="loginRule" ref="loginForm" status-icon label-width="100px" class="demo-ruleForm">
            			<el-form-item prop="username">
            				<el-input placeholder="手机号/账户名" v-model="loginData.username" prefix-icon="el-icon-edit" autocomplete="off">
            				</el-input>
            			</el-form-item>
	  					<el-form-item prop="password">
	  						<el-input type="password" placeholder="密码" v-model="loginData.password" prefix-icon="el-icon-edit" autocomplete="off">	
	  						</el-input>
	  					</el-form-item>
	  					<div class="remeberCheck">
	  						<el-checkbox style="margin-left:0px;">记住我</el-checkbox>
	  						<span class="forgetPsd">
	  							<a href="javascript:void(0)">忘记密码？</a>
	  						</span>
	  					</div>
	  					
	    				<el-button type="primary" :disabled="isDisable" @click="loginIn()">登录</el-button>
	  					
	  					<div class="remeberCheck" style="padding-top: 10px;">
	  						<!-- <el-checkbox style="margin-left:0px;">记住我</el-checkbox> -->
	  						<span class="forgetPsd">
	  							<a href="javascript:void(0)">注册账户</a>
	  						</span>
	  					</div>
					</el-form>
            	</div>
			</el-card>
        </div>
    </div>
</template>

<script>
	import {httpRequest} from '../assets/js/httpRequest.js'
	import loginHeaderImg from '../assets/imgs/login.png'
    export default {
        data: function(){
        	var validateUser = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请输入账户'));
		          	this.isDisable = true;
		        } else {
		          	if (this.loginData.password !== '') {
		            	this.$refs.loginForm.validateField('password');
		          	}
		          	callback();
		        }
		    };
		    var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请输入密码'));
		          	this.isDisable = true;
		        }else if (value.length < 6) {
		        	callback(new Error('密码不得小于六位'));
		        	this.isDisable = true;
		        } else {
		        	this.isDisable = false;
		          	callback();
		        }
		    };
            return {
            	loginData: {
            		username: '',
                	password: ''
            	},
                loginRule: {
          			username: [
            			{ validator: validateUser, trigger: 'blur' }
          			],
          			password: [
            			{ validator: validatePass, trigger: 'blur' }
          			]
        		},
        		isDisable: true,
        		login_url: loginHeaderImg
            }
        },
        created() {

        },
        methods: {
            loginIn() {
            	var self = this;
            	self.loginData.password = this.$md5(self.loginData.password);
            	httpRequest({
            		url: "systemUser/login.json",
	   				method: 'GET',
	   				data: self.loginData
            	}).then((res) => {
            		if (res) {
            			this.$router.replace({
	    					path: '/dashboard'
	    				})
            		}
            	})
            }
        }
    }
</script>