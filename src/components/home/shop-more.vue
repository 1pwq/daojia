<template>
	<div class="shop-more">
		<a :href="'/plist/'+id+'/'+title">
			<p class="shop-more-img">
				<img :src="csrc" alt="">
				<span>{{title}}-...</span>
			</p>
			<p class="sprice">
				<span>&yen;{{sprice}}</span>
			</p>
			<p>
				<del>&yen;{{price}}</del>
			</p>
		</a>
	</div>
</template>
<script>
	export default{
		props:['price','sprice','csrc','title','id'],
	}
</script>
<style>
	.shop-more{
		overflow: hidden;
		display: inline-block;
		margin:0 0 0 10px;
		width:20%;
	}
	.shop-more a:hover{
		text-decoration: none;
	}
	.shop-more .shop-more-img{
		position: relative;
	}
	.shop-more .shop-more-img span{
		display: block;
		position: absolute;
		left: 0;
		bottom:0;
		border-radius: 15px;
		text-align: center;
		font-size: 9px;
		color:#fff;
		width:100%;
		background:rgba(255,87,87,0.6);
	}
	.shop-more img{
		width:100%;
	}
	.shop-more p{
		margin-bottom: 0;
		text-align: center;
		font-size: 10px;
		color:#999;
	}
	.shop-more .sprice{
		font-weight: bold;
		font-size: 16px;
		color:#ff5757;
	}
</style>