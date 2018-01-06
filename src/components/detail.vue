<template>
	<div>
		<div class="det-header">
			<div class="swiper-container">
    		<div class="swiper-wrapper">
					<detail-swiper :swpimg="swpimg" v-for="(swpimg,index) in swp" :key="index" />
				</div>
	    	<div class="swiper-pagination"></div>
			</div>
			<det-headesc :nums="nums" />
			
			<div class="img-text" @click="bloCon">
				<span class="text">查看图文详情</span>
				<span class="fa fa-angle-right img-arrow"></span>
			</div>
		</div>
		<div class="det-content">
			<det-content v-show="discon" />
		</div>

		<div class="det-footer">
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
	import detHeadesc from '@/components/detail/det-headDesc';
	import detContent from '@/components/detail/det-content';
	import aside from '@/components/plist/aside';
	import cart from '@/components/plist/cart';
	import swp from '@/components/detail/swp';
	import $ from 'jquery';
	import store from 'storejs';
	if (!store.has('cart')) {//保证cart不存在的时候初始化购物车
		store.set('cart',{})
	}
	export default {
		data:function(){
			return {
				aside:[],
				display:false,
				dis:false,
				discon:false,
				nums:{},
				swp:[],
			}
		},
		methods:{
			bloCon:function(){
				this.discon = true;
			},
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
		created:function(){
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
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getDetailSwiper',function(res){
				th.swp = th.swp.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.aside = th.aside.concat(res.data)
			},'json')
		},
		components:{
			'det-headesc':detHeadesc,
			'p-aside':aside,
			'cart':cart,
			'det-content':detContent,
			'detail-swiper':swp,
		}
	}
</script>
<style>
	.det-header{
		overflow: auto;
		position:fixed;
		left: 0;
		top:0;
		height:100%;
		padding-bottom: 50px;
		width:100%;
		background:#fff;
	}
	.det-header img{
		width:100%;
	}
	.det-footer .shadow{
		position:fixed;
		left: 0;
		top:0;
		width:100%;
		height:100%;
		background:black;
		opacity:0.5;
		filter: alpha(opacity=50);
	}
	/*.det-content{

	}*/
</style>