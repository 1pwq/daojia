<template>
	<div class="det-desc">
		<h2 class="desc-tit">{{$route.params.desc}}</h2>
		<div class="priCar">
			<p class="det-price">
				<span>&yen;</span>
				{{$route.params.sprice}}
			</p>
			<p class="addCar">
				<span v-show="dis" class="addcarback" @click="addcar(nums[$route.params.id])">加入购物车</span>
				<span class="addsubcar" v-show="display">
					<span @click="sub($route.params.num,$route.params.sprice)" class="sub fa fa-minus"></span>
					<span class="addnum">{{nums[$route.params.id]}}</span>
					<span class="add fa fa-plus" @click="add($route.params.num,$route.params.sprice)"></span>
				</span>
			</p>
		</div>
		<div class="empty"></div>
		<div class="det-sales">
			<ul>
				<li>
					<span class="det-pro">促销</span>
					<a :href="'/plist/'+$route.params.shopid+'/'+$route.params.shopname">
						<span class="fullSub">满减</span>
						精选圣诞装饰满50减10
						<i class="fa fa-angle-right det-arr"></i>
					</a>
				</li>
			</ul>
		</div>
		<div class="empty"></div>
		<div class="det-seller">
			<div class="seller-bor">
				<a :href="'/plist/'+$route.params.shopid+'/'+$route.params.shopname" class="seller-name">
					<i class="fa fa-archive"></i>
					<span>{{$route.params.shopname}}</span>
				</a>
				<div class="contact">
					<i class="fa fa-phone"></i>
					<span>联系商家</span>
				</div>
			</div>
			<div class="det-eval">
				<span class="shopEval">商品评价</span>
				<span class="noEval">暂无评价</span>
			</div>
		</div>
		<!-- <div class="img-text" >
			<span class="text">查看图文详情</span>
			<span class="fa fa-angle-right img-arrow"></span>
		</div> -->

	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['nums'],
		data:function(){
			return {
				display:false,
				dis:true,
			}
		},
		methods:{
			addcar:function(num){
				this.display = true;
				this.dis = false;
			},
			add:function(num,sprice){
				
				this.$root.bus.$emit('addPct',num)

				var price = sprice*num
				
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
			sub:function(num,sprice){
				this.$root.bus.$emit('subPct',num)

				var price = sprice*num
				$('.cart-empty').html('&yen;' + price)
				if (num == 0) {
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
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
	ul>li{
		list-style: none;
	}
	.empty{
		width:100%;
		height:12px;
		background:#f7f7f7;
	}
	.det-header .desc-tit{
		overflow: hidden;
		margin-right:100px;
		margin: 10px 50px 2px 0;
    padding: 0 20px;
    line-height: 22px;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 16px;
    max-height: 40px;
    background: #fff;
	}
	.det-header .priCar{
		padding:5px 15px;
	}
	.det-header .priCar .det-price{
		display: inline-block;
		margin-right: 5px;
		margin-bottom: 0;
		font-size: 30px;
		color:#ff3434;
	}
	.det-header .priCar .det-price span{
		display: inline-block;
    margin-right: -4px;
		font-size: 20px;
    font-weight: 500;
	}
	.det-header .priCar .addCar{
		float: right;
		display: inline-block;
		margin-bottom: 0;
		/*line-height:30px;*/
	}
	.det-header .priCar .addCar .addcarback{
		display: inline-block;
		margin-top:4px;
		padding:0 10px;
		line-height: 33px;
		font-size: 13px;
		color:#fff;
		height:33px;
		background:#47b34f;
	}
	.det-header .det-sales{
		padding:0 10px;
		line-height: 40px;
		width:100%;
		height:40px;
	}
	.det-header .det-sales .det-pro{
		float: left;
    padding-right: 15px;
		font-size: 12px;
		color:#999;
	}
	.det-header .det-sales li a{
		display: block;
    width: 100%;
    font-size: 12px;
    color: #555;
	}
	.det-header .det-sales li a:hover{
		text-decoration: none;
		color:#333;
	}
	.det-header .det-sales .fullSub{
		padding: 1px 2px;
    background: #5FBC65;
    font-size: 12px;
    color: #fff;
    border-radius: 2px;
	}
	.det-header .det-sales .det-arr{
		float: right;
    font-size: 20px;
    display: inline-block;
    padding-top: 8px;
    color: rgb(153, 153, 153);
	}
	.det-header .det-seller{
		box-sizing: border-box;
    padding: 0 10px;
    line-height: 50px;
	}
	.det-header .det-seller .seller-bor{
		border-bottom: 1px solid #d8d8d8;
	}
	.det-header .det-seller .seller-name{
		display: inline-block;
		box-sizing: border-box;
    text-overflow: ellipsis;
    text-align: left;
    color: #333;
    width: 64%;
	}
	.det-header .det-seller .seller-name:hover{
		text-decoration: none;
		color:#333;
	}
	.det-header .seller-name i{
    padding-right: 5px;
    color: #888;
	}
	.det-header .det-seller .contact{
		position:relative;
		display: inline-block;
    width: 34%;
    text-align: right;
    color: #333;
	}
	.det-header .det-seller .contact::before{
		position:absolute;
		left: 0;
		top:15px;
		content:'';
		width:1px;
		height:20px;
		background:#d9d9d9;
	}
	.det-header .contact i{
		padding-right: 2px;
		color: #888;
	}
	.det-header .det-seller .det-eval{
		overflow: hidden;
	}
	.det-header .det-eval .shopEval{
		float: left;
	}
	.det-header .det-eval .noEval{
		float: right;
    padding-right: 15px;
	}
	.det-header .img-text{
		text-align: center;
    padding: 22px 0;
    background: #f7f7f7;
	}
	.det-header .img-text .text{
		font-size: 13px;
    color: #333;
	}
	.det-header .img-text .img-arrow{
		display: inline-block;
    width: 16px;
    height: 16px;
    background: #47b34f;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 13px;
    line-height: 16px;
	}    
	.det-header .addCar .sub,
	.det-header .addCar .add{
		border:1px solid #e8e8e8;
		border-radius: 50%;
		text-align: center;
    line-height: 30px;
		width: 30px;
    height: 30px;
		background:#fff;
	}
	.det-header .addCar .addnum{
		display: inline-block;
		text-align: center;
		width:20px;
	}
	.det-header .addCar .addsubcar{
		display: inline-block;
		margin-top:4px;
	}
</style>