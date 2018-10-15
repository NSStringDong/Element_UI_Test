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
				collapse: false
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
</style>