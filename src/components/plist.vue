<template>
	<div>
		<div class="header">
			<div class="header-back">
				<plist-header :goodslist="goodsList" :shopid="$route.params.shopid" :shopname="$route.params.shopname" :item="item" v-for="(item,index) in plistHeader" :key="item.id"/>
			</div>
		</div>
		<div class="plist-content">
			<div class="con-search">
				<p class="sear-inp">
					<span class="icon fa fa-search"></span>
					<input type="text" placeholder="搜索店内商品">
				</p>
			</div>
			<div class="row-list">
				<ul>
					<ctg-menu :ctgMenu="ctg" v-for="(ctg,index) in ctgMenu" :key="ctg.id" />
				</ul>
			</div>
			<div class="row-list2">
				<ul>
					<p-list :shopid="$route.params.shopid" :shopname="$route.params.shopname" :nums="nums" :list="list" v-for="(list,index) in goodsList" :key="list.id" />
				</ul>
			</div>
		</div>
		<div class="plist-footer">
			<div class="footer-dropup">
				<button @click="toggle" class="butn">···</button>
				<ul v-show="display" class="dropdown-menu1">
					<p-aside :text="item.text" :icon="item.icon" :url="item.url" v-for="(item,index) in aside" :key="index" />
				</ul>
			</div>
			<div class="cart" v-show="dis">
				<cart :shopid="$route.params.shopid" :shopname="$route.params.shopname" />
			</div>
			<div class="shadow" v-show="dis" @click="shadow"></div>
			<div class="cart-bottom">
				<div class="col-xs-8 cart-left">
					<span class="fa fa-shopping-cart cart-icon" @click="toggcart"></span>
					<span class="cart-empty">购物车是空的</span>
				</div>
				<a class="col-xs-4 cart-right">去结算</a>				
			</div>
		</div>
	</div>
</template>
<script>
	import ctgMenu from '@/components/plist/ctg-menu';
	import pLists from '@/components/plist/p-list';
	import aside from '@/components/plist/aside';
	import cart from '@/components/plist/cart';
	import plistHeader from '@/components/plist/plist-header';
	import $ from 'jquery';
	import store from 'storejs';
	if (!store.has('cart')) {//保证cart不存在的时候初始化购物车
		store.set('cart',{})
	}
	export default{
		data:function(){
			return {
				display:false,
				dis:false,
				ctgMenu:[],
				aside:[],
				nums:{},
				plistHeader:[],
			}
		},
		methods:{
			toggle:function(){
				this.display = !this.display;
			},
			toggcart:function(){
				this.dis = !this.dis;
				$('.cart-icon').css({
					'position':'absolute',
					'top':-20+'px',
					'left':10+'px',
				})
			},
			shadow:function(){
				this.dis = false;
			}
		},
		computed:{
			goodsList:function(){
				return this.ctgMenu;
			}
		},
		created:function(){
			this.$root.bus.$on('shoplist',this.ctgMenu)

			var th = this;
			this.$root.bus.$on('nums',function(data){
				for(var i in data){
					this.$set(th.nums,i,data[i]);
					if (data[i]==0) {
						delete th.nums[i]
					}
				}
			})

			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getCtgList',function(res){
				th.ctgMenu = th.ctgMenu.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.aside = th.aside.concat(res.data)
			},'json')

			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/plistHeader',function(res){
				th.plistHeader = th.plistHeader.concat(res.data)
			},'json')
		},
		components:{
			'ctg-menu':ctgMenu,
			'p-list':pLists,
			'p-aside':aside,
			'cart':cart,
			'plist-header':plistHeader,
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
		list-style: none;
	}
	button:hover{
		outline: none;
	}
	.header-back{
		overflow: auto;
		padding-bottom: 45px;
		box-sizing: border-box;
		width:100%;
		min-height:83px;
	}
	.row{
		margin-left:0;
		margin-right:0;
	}
	.plist-content{
		position:fixed;
		left: 0;
		top:83px;
		margin:0;
		width:100%;
		height:100%;
		background:#fff;
	}
	.plist-content .con-search{
		position:relative;
		padding-top:5px;
		border-bottom: 1px solid #ddd;
		width:100%;
		height:40px;
		background:#eaeaea;
	}
	.plist-content .con-search .icon{
		padding:7px 10px;
		font-size: 14px;
		color:#999;
	}
	.plist-content .con-search .sear-inp{
		margin:0 auto;
		border-radius: 2px;
		width:95%;
		background:#fff;
	}
	.plist-content .con-search input{
		border:none;
		outline: none;
	}
	.row-list,.row-list2{
		overflow: auto;
		position:absolute;
		top:40px;
		padding-bottom: 60px;
		padding-left: 0;
		padding-right: 0;
		height:100%;
	}
	.row-list{
		float: left;
		left: 0;
		z-index: 100;
		width:100px;
		background:#f4f4f4;
	}
	.row-list2{
		right:0;
		padding-left: 100px;
		width: 100%;
		background:#fff;
	}
	a:hover,a:focus{
		outline: none;
		color:#666;
		text-decoration: none;
	}
	.plist-footer .shadow{
		position:fixed;
		left: 0;
		top:0;
		width:100%;
		height:100%;
		background:black;
		opacity:0.5;
		filter: alpha(opacity=50);
	}
</style>