import Vue from 'vue';
import router from '@/router/home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
 
var vm = new Vue({
	el:'#app',
	data:function(){
		return {
			bus:new Vue(),
		}
	},
	router,
	template:'<div><router-view/></div>'
})