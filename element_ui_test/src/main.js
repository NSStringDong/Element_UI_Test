// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
// Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    
})

/* eslint-disable no-new */
new Vue({
  	router,
  	render: h=>h(App),
  	async created() {
  		this.initUser();
  	},
  	methods: {
  		initUser() {

  		}
  	}
}).$mount('#app');
