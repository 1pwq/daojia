<template>
	<div>
		<div class="od-header">
			<od-header/>
		</div>
		<div class="od-content">
			<od-shop :ordeta="ordeta" v-for="(ordeta,index) in orderDetail" :key="ordeta.id"/>
		</div>
		<div class="od-footer">
			<od-footer/>
		</div>
	</div>
</template>
<script>
	import odHeader from '@/components/orderDetail/od-header';
	import odShop from '@/components/orderDetail/od-shop';
	import odFooter from '@/components/orderDetail/od-footer';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				orderDetail:[],
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getorderdetail',function(res){
				th.orderDetail = th.orderDetail.concat(res.data)
			},'json')
		},
		components:{
			'od-header':odHeader,
			'od-shop':odShop,
			'od-footer':odFooter,
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	ul>li{
		list-style: none;
	}
</style>