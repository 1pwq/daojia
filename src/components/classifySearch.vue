<template>
	<div>
		<div class="claSeaHeader">
			<searchHead :title="$route.params.clatit" />
		</div>
		<div class="claSeaCon">
			<searchCon :shop="shop" v-for="(shop,index) in shoplist" :key="shop.id" />
		</div>
		<div class="claSeaFooter">
			<div class="footer-dropup">
				<button @click="toggle" class="butn">···</button>
				<ul v-show="display" class="dropdown-menu1">
					<p-aside :text="item.text" :icon="item.icon" :url="item.url" v-for="(item,index) in aside" :key="index" />
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import searchHead from '@/components/classifySearch/searchHead';
	import searchCon from '@/components/classifySearch/searchCon';
	import aside from '@/components/plist/aside';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				shoplist:[],
				aside:[],
				display:false,
			}
		},
		methods:{
			toggle:function(){
				this.display = !this.display;
			},
		},
		created:function(){
			var th = this;
			//content
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getShopList',function(res){
				th.shoplist = th.shoplist.concat(res.data)
			},'json')
			//aside
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.aside = th.aside.concat(res.data)
			},'json')
		},
		components:{
			'searchHead':searchHead,
			'searchCon':searchCon,
			'p-aside':aside,
		}
	}
</script>
<style>

</style>