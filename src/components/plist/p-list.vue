<template>
	<li>
		<ul>
			<li v-for="(plist,index) in list.children" :key="plist.id">
				<a href="" :id="plist.id" class="title">{{plist.text}}</a>
				<ul class="goods">
					<li v-for="(goods,index) in plist.plists" :key="goods.id">
						<p class="imgs">
							<img :src="goods.img" alt="">
						</p>
						<h4>
							<a :href="'/detail/'+goods.id+'/'+goods.desc+'/'+goods.price+'/'+goods.sprice+'/'+shopid+'/'+shopname">{{goods.desc}}</a>
						</h4>
						<p class="prCar">
							<span class="sprice">
								<small>&yen;</small> {{goods.sprice}}
							</span>
							<del class="sprice price">
								<small>&yen;</small> {{goods.price}}
							</del>
						</p>
						<span class="prAddSub">
							<span v-if="nums[goods.id]" >
								<span @click="sub(goods)" class="sub fa fa-minus"></span>
								<span class="num">{{nums[goods.id]}}</span>
							</span>
							<span @click="add(goods)" class="add fa fa-plus"></span>
						</span>
					</li>
				</ul>
			</li>
		</ul>
	</li>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['list','nums','shopid','shopname'],
		methods:{
			add:function(goods){
				
				this.$root.bus.$emit('addPct',goods)

				var price = goods.sprice*goods.num
				
				$('.cart-empty').html('&yen;' + price)
				$('.cart-bottom .cart-icon').css({
					'position':'absolute',
					'left':10+'px',
					'top':-20 + 'px',
					'line-height':50+'px',
					'background':'#47b34f',
					'width':50+'px',
					'height':50+'px',
				})
				$('.cart-bottom .cart-right').css({
					'background':'#47b34f',
				})
				$('.cart-bottom .cart-empty').css({
					'color':'#ff3434',
					'padding-left':55+'px',
				})
			},
			sub:function(goods){
				this.$root.bus.$emit('subPct',goods)

				var price = goods.sprice*goods.num
				$('.cart-empty').html('&yen;' + price)
				if (goods.num == 0) {
					$('.cart-bottom .cart-right').css('background','#bebebe')
					$('.cart-empty').html('购物车是空的')

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
			}
		},
	}
</script>
<style>
	.row-list2 .title{
		overflow: hidden;
		display: block;
		padding:5px 10px;
		border:none;
		outline: none;
		font-size:13px;
		color:#666;
		width:100%;
		background:#f4f4f4;
	}
	.goods{
		padding-left: 10px;
		box-sizing: border-box;
	}
	.goods li{
		overflow: hidden;
		padding:10px 10px 3px 0;
		border-bottom: 1px solid #f1f1f1;
	}
	.row-list2 .title:hover{
		text-decoration: none;
	}
	.goods .imgs{
		display: inline-block;
		float: left;
		padding-right: 5px;
		width:65px;
	}
	.goods .imgs img{
		width:100%;
	}
	.goods h4{
		margin-top:0;
		margin-bottom:5px;
		line-height:18px;
		font-size: 14px;
		color:#333;
	}
	.goods h4 a{
		color:#333;
	}
	.goods h4 a:hover{
		text-decoration: none;
	}
	.goods .desc{
		font-size:10px;
		color:#999;
	}
	.goods .prCar{
		display: inline-block;
	}
	.goods .prCar .price{
		display: block;
		font-size:10px;
		color:#999;
	}
	.goods .sprice{
		font-size:15px;
		color:#ff3434;
	}
	.goods .sprice small{
		font-size:10px;
	}
	.goods .prAddSub{
		float: right;
		display: inline-block;
		margin-top:15px;
	}
	.goods .prAddSub .num{
		display: inline-block;
		padding:0 3px;
		font-size:15px;
		color:#333;
	}
	.goods .prAddSub .sub,
	.goods .prAddSub .add{
		display: inline-block;
		border:1px solid #ccc;
		border-radius: 50%;
		line-height: 25px;
		text-align: center;
		font-size: 14px;
		color:#47b34f;
		width:25px;
		height:25px;
		background:#fff;
	}
	.goods .prAddSub .sub{
		color:#999;
	}
</style>