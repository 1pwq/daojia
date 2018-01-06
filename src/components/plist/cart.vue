<template>
	<div class="footer-cart">
		<div class="full-sel">
			<input type="checkbox" checked class="cart-full-check" @click="selectfull">
			<span>
				<span class="cart-full">全选</span>
				<small>（已选2件，共3.32kg）</small>
			</span>
			<span class="del fa fa-trash-o" @click="emptyCar"> 清空购物车</span>
		</div>
		<div class="cart-pois">
			<table class="cart-tab">
				<tr v-for="(item,index) in cart">
					<td class="cart-check">
						<input type="checkbox" checked>
					</td>
					<td class="cart-img">
						<img :src="item.img" alt="">
					</td>
					<td class="cart-three">
						<p class="cart-tit">{{item.title}}</p>
						<p>
							<span class="cart-price">&yen;{{item.sprice}}</span>
							<strong class="addSub">
								<span @click="sub(item)" class="sub fa fa-minus"></span>
								<span class="sprice">{{item.num}}</span>
								<span @click="add(item)" class="add fa fa-plus"></span>
							</strong>
						</p>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	import store from 'storejs';
	export default {
		props:['shopid','shopname'],
		data:function(){
			return {
				cart:[],
				display:true,
			}
		},
		watch:{
			cart:function(newval,oldval){				
				var cart = store.get('cart');
				cart[this.shopid] = {
					shopid:this.shopid,
					shopname:this.shopname,
					cart:this.cart,
				}
				store.set('cart',cart)
			}
		},
		methods:{
			//全选
			selectfull:function(el){
				$('input:checkbox').prop('checked',el.target.checked)
			},
			//清空
			emptyCar:function(){
				if (confirm('确定清除吗？')) {
					this.cart = [];

					$('.cart-empty').html('购物车是空的')
					$('.cart-bottom .cart-right').css('background','#bebebe')
					$('.cart-bottom .cart-empty').css({
						'color':'#999',
					})
					$('.cart-bottom .cart-icon').css({
						'position':'absolute',
						'left':10+'px',
						'top':0 + 'px',
						'line-height':40+'px',
						'background':'#bebebe',
						'width':40+'px',
						'height':40+'px',
					})
				}
				
			},
			add(item){
				for(var i = 0; i < this.cart.length; i++){
					if (item.id == this.cart[i].id) {
						if (this.cart[i].num < item.stock) {
							this.cart[i].num++;
							this.cart.splice(i,1,this.cart[i])

							var price = item.sprice*item.num
							$('.cart-empty').html('&yen;' + price)
						}
						//广播添加商品数量的事件
						var nums = {};
						nums[item.id] = this.cart[i].num;
						this.$root.bus.$emit('nums',nums)
						return;
					}
				}
			},
			sub(item){
				for(var i = 0; i < this.cart.length; i++){
					if (item.id == this.cart[i].id) {
						this.cart[i].num--;
						this.cart.splice(i,1,this.cart[i])
						//
						var nums = {};
						nums[item.id] = this.cart[i].num;
						this.$root.bus.$emit('nums',nums)

						var price = item.sprice*item.num
						$('.cart-empty').html('&yen;' + price)

						if (this.cart[i].num == 0) {
							this.cart.splice(i,1)

							$('.cart-empty').html('购物车是空的')
							$('.cart-bottom .cart-right').css('background','#bebebe')
							$('.cart-bottom .cart-empty').css({
								'color':'#999',
							})
							$('.cart-bottom .cart-icon').css({
								'position':'absolute',
								'left':10+'px',
								'top':0 + 'px',
								'line-height':40+'px',
								'background':'#bebebe',
								'width':40+'px',
								'height':40+'px',
							})
						}
						return;
					}
				}
			},
		},
		created:function(){
			var th = this;
			//获取自定义事件的参数
			this.$root.bus.$on('addPct',function(data){
				for(var i = 0; i < th.cart.length; i++){
					if (data.id == th.cart[i].id) { //判断商品是否已经添加
						//判断是否超出库存
						if (th.cart[i].num < data.stock) {
							th.cart[i].num++;
							th.cart.splice(i,1,th.cart[i])

							var nums = {};
							nums[data.id] = th.cart[i].num;
							th.$root.bus.$emit('nums',nums)
						}
						return;
					}
				}
				data.num = 1;
				th.cart = th.cart.concat(data)
				// 广播添加商品数量的事件
				var nums = {};
				nums[data.id] = 1;
				th.$root.bus.$emit('nums',nums)
			})
			this.$root.bus.$on('subPct',function(data){
				for(var i = 0; i < th.cart.length; i++){
					if (data.id == th.cart[i].id) {
						if (th.cart[i].num >= 1) {
							th.cart[i].num--;
							th.cart.splice(i,1,th.cart[i])
						} 
						//
						var nums = {};
						nums[data.id] = data.num;
						th.$root.bus.$emit('nums',nums)

						if(th.cart[i].num == 0){
							th.cart.splice(i,1)
						}
						return;
					}
				}
			})
		}
	}
</script>
<style>
	.cart{
		position:fixed;
		bottom:0;
		z-index: 10;
		width:100%;
	}
	.cart-pois{
		overflow: auto;
		max-height:380px;
	}
	 .cart-bottom{
	 	position:fixed;
	 	left: 0;
	 	bottom: 0;
	 	z-index: 10;
		border-top:1px solid #d9d9d9;
		box-sizing: border-box;
		line-height: 45px;
		width:100%;
		height:45px;
	}
	 .cart-bottom .cart-left{
		height:100%;
		background:#fff;
	}
	.cart-icon{
		display: inline-block;
		margin-top:3px;
		border-radius: 50%;
		line-height: 40px;
		text-align: center;
		font-size:25px;
		color:#fff;
		width:40px;
		height:40px;
		background:#bebebe;
	}
	 .cart-bottom .cart-empty{
		display: inline-block;
		padding-left: 15px;
		font-size:15px;
		color:#999;
	}
	 .cart-bottom .cart-right{
		text-align: center;
		line-height: 45px;
		color:#fff;
		height:100%;
		background:#bebebe;
	}
	.cart .footer-cart{
		/*overflow: auto;*/
		position:fixed;
		left: 0;
		bottom:45px;
		width:100%;
		max-height:420px;
		background:#fbfbfb;
	}
	.cart .footer-cart .full-sel{
		border-bottom: 1px solid #e8e8e8;
		line-height: 40px;
		color:#666;
		width:100%;
		height:40px;
		background:#fff;
	}
	.cart .footer-cart .cart-full-check{
		margin-left: 13px;
	}
	.cart .footer-cart .cart-full{
		color:#333;
	}
	.cart .footer-cart .del{
		float: right;
		padding-top:13px;
		padding-right: 10px;
	}
	.cart .cart-tab{
		display: block;
		width:100%;
		background:#fbfbfb;
	}
	.cart .cart-tab tr{
		display: block;
		margin-left: 13px;
		border-bottom: 1px solid #e8e8e8;
	}
	.cart .cart-tab .sub,
	.cart .cart-tab .add{
		display: inline-block;
		border:1px solid #ccc;
		border-radius: 50%;
		text-align: center;
		line-height: 25px;
		font-size:17px;
		width:25px;
		height:25px;
	}
	.cart .cart-tab p{
		margin:0 0 5px;
	}
	.cart .cart-tab .cart-tit{
		color:#666;
	}
	.cart .cart-tab .cart-check{
		text-align: center;
		width:40px;
		height:60px;
	}
	.cart .cart-tab .cart-img{
		padding:0 10px;
		width:60px;
		height:80px;
	}
	.cart .cart-tab .cart-img img{
		width:52px;
	}
	.cart .cart-tab .cart-price{
		font-size: 16px;
		color:#ff3434;
	}
	.cart .cart-tab .addSub{
		float: right;
		padding-right: 10px;
		font-weight: normal;
		font-size: 16px;
	}
	.cart .cart-tab .add{
		font-size: 14px;
		color:#47b34f;
	}
	.cart .cart-tab .sub{
		font-size: 14px;
		color:#999;
	}
	.cart .cart-tab .sprice{
		padding:0 5px;
		color:#333;
	}
	.cart .cart-tab .cart-three{
		width:100%;
	}
</style>