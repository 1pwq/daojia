import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//.js 和 .vue 后缀名可不写，其他照写

import home from '@/components/home';
import plist from '@/components/plist';
import classify from '@/components/classify';
import mycart from '@/components/mycart';
import login from '@/components/login';
import register from '@/components/register';
import personal from '@/components/personal';
import detail from '@/components/detail';
import classifySearch from '@/components/classifySearch';
import evaluate from '@/components/userEvaluate';
import plistreport from '@/components/report';
import lookMore from '@/components/look-more';
import order from '@/components/order';
import newpeople from '@/components/newpeople';
import orderDetail from '@/components/orderDetail';
var router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:home,
		},
		{
			path:'/plist/:shopid/:shopname',
			component:plist,
		},
		{
			path:'/evaluate/:shopid/:shopname',
			component:evaluate,
		},
		{
			path:'/classify',
			component:classify,
		},
		{
			path:'/car',
			component:mycart,
		},
		{
			path:'/order',
			component:order,
		},
		{
			path:'/personal',
			component:personal,
		},
		{
			path:'/login',
			component:login,
		},
		{
			path:'/register',
			component:register,
		},
		{
			path:'/detail/:id/:desc/:price/:sprice/:shopid/:shopname',
			component:detail,
		},
		{
			path:'/classifySearch/:claid/:clatit',
			component:classifySearch,
		},
		{
			path:'/plistreport',
			component:plistreport,
		},
		{
			path:'/lookMore',
			component:lookMore,
		},
		{
			path:'/newpeople',
			component:newpeople,
		},
		{
			path:'/orderDetail/:id/:shopname/:status/:time',
			component:orderDetail,
		}
	]
})
export default router