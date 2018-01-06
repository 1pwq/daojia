<template>
	<div>
		<div class="order-header">
			<order-header/>
		</div>
		<div class="order-content">
			<ul class="order-list">
				<order-con :list="list" v-for="(list,index) in order" :key="list.id" />
			</ul>
		</div>
		<div class="order-footer">
			<footer-nav v-for="(list,index) in footernav" :key="index" :text="list.text" :icon="list.icon" :url="list.url" :index="index" />
		</div>
	</div>
</template>
<script>
	import orderHeader from '@/components/order/order-header';
	import orderCon from '@/components/order/order-con';
	import footerNav from '@/components/home/footer-nav.vue';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				footernav:[],
				order:[],
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getOrderCon',function(res){
				th.order = th.order.concat(res.data)
			},'json')

			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.footernav = th.footernav.concat(res.data)
			},'json')
		},
		components:{
			'order-header':orderHeader,
			'order-con':orderCon,
			'footer-nav':footerNav,
		}
	}

	
</script>
<style>
	.order-footer{
		position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #d9d9d9;
    width: 100%;
    background:#fff;
	}
</style>