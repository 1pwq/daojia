<template>
	<div class="shopList">
		<div class="cleft">
			<div class="shopimg">
				<img :src="shop.img" alt="">
			</div>
		</div>
		<div class="cright">
			<h2 class="cright-title">
				<a :href="'/plist/'+id+'/'+shop.title">{{shop.title}}</a>
				<img :src="shop.shopicon" alt="">
			</h2>
			<p class="squ">{{shop.munite}}</p>
			<p class="star">
				<span>{{shop.star}}</span>
				<b>{{shop.monthSale}}</b>
			</p>
			<p class="desc">
				{{shop.riseSend}}，{{shop.distance}}，{{shop.baseFreight}}
			</p>
			<div class="cright-bottom">
				<div class="neck">
					<p class="neck-p">
						<i>领券</i>
						<span>{{shop.full1}}{{shop.children.sub1}}，{{shop.full1}}{{shop.sub1}}，{{shop.children.full1}}...</span>
						<span @click="toggle" class="fa fa-angle-down neck-ico"></span>
					</p>
					<p v-show="display" class="neck-p neck-green" v-for="(neck,index) in shop.children" :key="index">
						<i>满减</i>
						<span>{{neck.full1}}{{neck.sub1}}，{{neck.full1}}{{neck.sub1}}，{{neck.full1}}...</span>
					</p>
					<p class="neck-p">
						<i>首单</i>
						<span>{{shop.desc}}...</span>
					</p>
				</div>
				<div class="shop-bottom">
					<span class="imgs" v-for="(igs,index) in shop.imgs" :key="index">
						<span class="eco">{{igs.save}}</span>
						<img :src="igs.img" alt="">
						<p>&yen;{{igs.price}}</p>
					</span>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['id','shop'],
		data:function(){
			return {
				display:false,
			}
		},
		created:function(){
			this.$root.bus.$emit('shoplist',this.shop)
		},
		methods:{
			toggle:function(){
				this.display = !this.display;
			}
		}
	}
</script>
<style>
	.shopList{
		overflow: hidden;
		padding:15px 10px;
		border-top:1px solid #e7e9e4;
		box-sizing: border-box;
		width:100%;
	}
	.shopList .cleft{
		float: left;
	}
	.shopList .cleft .shopimg{
		margin-right: 10px;
		border:1px solid #e8e8e8;
		border-radius: 4px;
		width:66px;
	}
	.shopList .cleft img{
		width:100%;
	}
	.shopList .cright-title{
		margin:0;
		padding-bottom:5px;
		font-weight: bold;
		font-size:16px;
		color:#333;
	}
	.shopList .cright-title a{
		color:#333;
	}
	.shopList .cright-title a:hover{
		color:#333;
		text-decoration: none;
	}
	.shopList .cright-title img{
		float: right;
		width:15px;
	}
	.shopList .cright{
		overflow: hidden;
	}
	.shopList .star{
		overflow: hidden;
		margin-bottom: 0;
		padding:5px 0;
		font-size:10px;			
	}
	.shopList .star span{
		position:relative;
		float: left;
		padding-right: 10px;
		color:#efa215;	
	}
	.shopList .star b{
		padding-left: 5px;
		font-weight: normal;
		font-size:11px;
		color:#999;	
	}
	.shopList .star span::after{
		position:absolute;
		right: 2px;
		top:4px;
		content:'';
		width:1px;
		height:10px;
		background:#999;
	}
	.shopList .desc{
		margin-bottom: 0;
		padding-bottom: 10px;
    border-bottom: 1px dotted #ccc;
		font-size:10px;
		color:#999;
	}
	.shopList .cright .squ{
		display: inline-block;
		margin-bottom: 0;
		padding:0 2px;
		border:1px solid #16A9ff;
		box-sizing: border-box;
		text-align: center;
		font-size: 10px;
		color:#16A9ff;
	}
	.shopList .cright .cright-bottom{
		overflow: hidden;
		margin-top:10px;
	}
	.shopList .cright-bottom .neck-p{
		margin-bottom:10px;
		font-size: 10px;
		color:#999;
	}
	.shopList .cright-bottom .neck-green i{
		background:#5FBC65;
	}
	.shopList .neck i{
		padding:0 2px;
		border-radius: 2px;
		box-sizing: border-box;
		font-style: normal;
		color:#fff;
		background:#FF6C57;
	}
	.shopList .neck .neck-ico{
		float: right;
		padding-top:2px;
	}
	.shopList .shop-bottom .imgs:nth-child(1){
		margin-left:0;
	}
	.shopList .shop-bottom .imgs{
		display: inline-block;
		position: relative;
		padding-left:10px;
		box-sizing: border-box;
		width:25%;
	}
	.shopList .shop-bottom .eco{
		position: absolute;
		left: 0;
		top:0;
		padding:0 2px;
		box-sizing: border-box;
		font-size: 9px;
		color:#fff;
		background:#fc2c50;
	}
	.shopList .shop-bottom img{
		width:100%;
	}
	.shopList .shop-bottom p{
		text-align: center;
		font-size:10px;
		color:red;
	}
</style>