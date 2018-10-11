import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import header from '@/common/header'
import sidebar from '@/common/sidebar'
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
	    component: index,
	    meta: {
	        title: '首页'
	    }
	}, {
		path: '/header',
		name: 'header',
		component: header,
		meta: {
			title: ''
		}
	}, {
		path: '/sidebar',
		name: 'sidebar',
		component: sidebar,
		meta: {
			title: ''
		}
	}
  ]
})
