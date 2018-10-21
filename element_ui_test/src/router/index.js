import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const index = r => require.ensure([], () => r(require('~pages/index')), 'index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	redirect: '/main'
    },
    /*{
	    path: '/index',
	    name: 'index',
	    component: resolve => require(['../pages/index.vue'], resolve),
	    meta: {
	        title: '首页'
	    }
	},*/
	{
		path: '/',
		name: 'home',
		component: resolve => require(['../common/home.vue'], resolve),
		meta: {
			title: '小绿人管理系统'
		},
		children: [
			{
				path: '/main',
				component: resolve => require(['../pages/main.vue'], resolve),
				meta: { 
					title: '系统首页' 
				}
            },
		]
	}
  ]
})
