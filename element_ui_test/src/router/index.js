import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const index = r => require.ensure([], () => r(require('~pages/index')), 'index')
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
	    path: '/index',
	    name: 'index',
	    component: resolve => require(['../pages/index.vue'], resolve),
	    meta: {
	        title: '首页'
	    }
	},
	{
		path: '/home',
		name: 'home',
		component: resolve => require(['../common/home.vue'], resolve),
		meta: {
			title: '小绿人管理系统'
		}
	}
  ]
})