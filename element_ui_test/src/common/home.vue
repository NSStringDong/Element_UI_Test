<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-side></v-side>
		<div class="content-box" :class="{'content-collapse':collapse}">
			<div class="content">
                <router-view></router-view>
            </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vHeader from '../common/header.vue';
	import vSidebar from '../common/sideBar.vue';
	export default {
		name: 'home',
		data() {
			return {
				collapse: true
			}
		},
		components:{
            'v-header': vHeader,
            'v-side': vSidebar
        },
        created() {

        }
	}
</script>
<style>
	.wrapper {
      	width: 100%;
      	height: 100%;
      	overflow: hidden;
    }
    .content-box {
    	position: absolute;
    	left: 250px;
    	right: 0;
    	top: 70px;
    	bottom: 0;
    	padding-bottom: 30px;
    	-webkit-transition: left .3s ease-in-out;
    	transition: left .3s ease-in-out;
    	background: #f0f0f0;
    }
    .content {
	    width: auto;
	    height: 100%;
	    padding: 10px;
	    overflow-y: scroll;
	    box-sizing: border-box;
	}

	.content-collapse {
	    left: 150px;
	}
</style>