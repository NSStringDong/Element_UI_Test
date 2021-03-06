import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('../common/home.vue')), 'home');

const dashboard = r => require.ensure([], () => r(require('../pages/dashboard.vue')), 'dashboard');

const partnerList = r => require.ensure([], () => r(require('../pages/base_partner.vue')), 'partnerList');

const partnerDetail = r => require.ensure([], () => r(require('../pages/base_partner_detail.vue')), 'partnerDetail');

const login = r => require.ensure([], () => r(require('../pages/login.vue')), 'login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      	path: '/',
      	redirect: '/dashboard'
    },
	{
		path: '/',
		//component: resolve => require(['../common/home.vue'], resolve),
		component: home,
		meta: {
			title: '小绿人管理系统'
		},
		children: [
			{
				path: '/dashboard',
                component: dashboard,
                meta: { 
                	title: '系统首页' 
                }
            },
            {
            	path: '/partnerList',
            	component: partnerList,
            	meta: {
            		title: '合作伙伴'
            	}
            },
            {
                path: '/partnerDetail',
                name: 'partnerDetail',
                component: partnerDetail,
                meta: {
                    title: '合作伙伴详情'
                }
            }
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	}
  ]
})
