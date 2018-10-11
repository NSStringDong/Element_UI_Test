<template>
	<div class="index">
		<el-button @click="showPop()">Button</el-button>
	    <!-- <el-dialog :visible.sync="visible" title="Hello world">
	      	<p>Try Element</p>
	    </el-dialog> -->
	</div>
</template>
<script>
	export default{
		name: 'index',
		data () {
			return {
				visible: false
			}
		},
		mounted() {
            
        },
        watch: {
            
        },
        methods: {
        	showPop() {
        		// this.visible = true;
				this.$router.push({
					name: 'sidebar',
					query: {

					}
				})
        	}
        }
	}
</script>