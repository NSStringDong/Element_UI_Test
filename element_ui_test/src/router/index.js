import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
//const home = r => require.ensure([], () => r(require('../common/home.vue')), 'home');
//const main = r => require.ensure([], () => r(require('../pages/main.vue')), 'main');
Vue.use(Router);

export default new Router({
  routes: [
    {
      	path: '/',
      	redirect: '/dashboard'
    },
 //    {
	//     path: '/index',
	//     name: 'index',
	//     component: resolve => require(['../pages/index.vue'], resolve),
	//     meta: {
	//         title: '首页'
	//     }
	// },
	{
		path: '/',
		component: resolve => require(['../common/home.vue'], resolve),
		meta: {
			title: '小绿人管理系统'
		},
		children: [
			{
				path: '/dashboard',
                component: resolve => require(['../pages/Dashboard.vue'], resolve),
                meta: { title: '系统首页' }
            }
		]
	}
  ]
})
