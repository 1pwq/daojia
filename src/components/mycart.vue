<template>
	<div>
		<div class="cart-header">
			登录后将同步购物车中商品
			<a href="/login" class="cart-login">登录</a>
		</div>
		<div class="cart-back">
			<div class="mycart">
				<ul class="my-cart">
					<li class="mycart-list" v-for="(item1,index) in carts" :key="index">
						<a class="mycart-tit" :href="'/plist/'+item1.shopid+'/'+item1.shopname">
							{{item1.shopname}}
							<span class="fa fa-angle-right carts-icon"></span>
						</a>
						<ul>
							<li v-for="(item2,index) in item1.cart" :key="index">
								<img :src="item2.img" alt="">
								<p>&yen; {{item2.sprice}}</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<footer-nav v-for="(list,index) in footernav" :key="index" :text="list.text" :icon="list.icon" :url="list.url" :index="index" />
		</div>
	</div>
</template>
<script>
	import footerNav from '@/components/home/footer-nav.vue';
	import store from 'storejs';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				carts:{},
				footernav:[],
			}
		},
		created:function(){

			//读取缓存
			var carts = store.get('cart');
			this.carts = carts;

			var th = this;
			//底部导航
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.footernav = th.footernav.concat(res.data)
			},'json')
		},
		components:{
			'footer-nav':footerNav,
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
		list-style: none;
	}
	a{
		color:#000;
	}
	a:hover{
		text-decoration: none;
		color:#000;
	}
	.cart-header{
		padding:9px 0 7px 0;
		border-bottom: 1px solid #e1d0af;
		line-height: 20px;
		text-align: center;
		font-size: 12px;
		color:#fb8217;
		width:100%;
		height:40px;
		background:#fbf8e4;
	}
	.cart-header .cart-login{
		display: inline-block;
		margin-left:3px;
		padding:0 14px;
		border-radius: 3px;
		vertical-align: top;
		font-size: 12px;
		color:#fff;
		background:#fb8217;
	}
	.cart-back{
		width:100%;
		height:100%;
		background:#f4f4f4;
	}
	.mycart{
		overflow: hidden;
		padding-bottom: 99px;
		width:100%;
	}
	.mycart .my-cart{
		overflow: hidden;
		margin:0 auto;
		width:90%;
	}
	.mycart .my-cart .mycart-list{
		overflow: hidden;
		margin-top: 10px;
		box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 5px 11px -8px;
		background:#fff;
	}
	.mycart .mycart-tit{
		display: block;
		border-bottom: 1px solid #f1f1f1;
		padding:0 7px;
		line-height: 30px;
		font-size: 15px;
		color:#585757;
		width:100%;
		height:30px;
		background:#fff;
	}
	.mycart .mycart-tit .carts-icon{
		float: right;
		line-height: 30px;
		font-size: 18px;
		color:#b5aaaa;
	}
	.mycart .my-cart .mycart-list ul{
		padding:5px;
		box-sizing: border-box;
	}
	.mycart .my-cart .mycart-list li{
		display: inline-block;
		padding-right: 5px;
		text-align: center;
		box-sizing: border-box;
		width:60px;
	}
	.mycart .my-cart .mycart-list img{
		width:53px;
	}
	.mycart .my-cart .mycart-list p{
		margin-bottom: 0;
		line-height: 21px;
		font-size: 12px;
		color:#333;
	}
	.footer{
		position:fixed;
		left: 0;
		bottom:0;
		border-top:1px solid #e8e8e8;
		width:100%;
		background:#fff;
	}
</style>