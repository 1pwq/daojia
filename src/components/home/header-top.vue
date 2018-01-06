<template>	
	<div class="header-top">
		<span class="locate">
			和平新村
			<i class="fa fa-angle-down"></i>
		</span>
		<span class="search">
			<i class="fa fa-search"></i>
			附近商家商品
		</span>
		<a href="" class="fa fa-bell-o bell"></a>
	</div>
</template>
<script>

</script>
<style>
	.header .header-top{
		display: flex;
		position:fixed;
		left: 0;
		top:0;
		z-index: 10;
		width:100%;
		background:url(/static/img/home-content-shop/index_black_semi.png) no-repeat;
		background-size:100% 100%;
		height:56px;
	}
	.header .header-top .locate{
		padding-left: 20px;
		line-height: 40px;
		font-size: 14px;
		color:#fff;
		background:url(/static/img/home-content-shop/icon_locate.png) no-repeat 4px 11px;
		background-size: 16px;
	}
	.header .header-top .locate i{
		margin-left: -2px;
	}
	.header .header-top .search{
    position: relative;
    top: 5px;
    display: inline-block;
    margin-left: 20px;
    padding-left: 15px;
    border-radius: 20px;    
    flex: 1;
    line-height: 30px; 
    font-size: 14px;
    color:#fff;
    height: 30px;
    background: rgba(255,255,255,0.35);
	}
	.header .header-top .search i{
		position: relative;
    left: -3px;
    display: inline-block;
	}
	.header .header-top .bell{
		line-height: 40px;
    width: 34px;
    text-align: center;
    font-size: 18px;
    color: #fff;
	}
	
	    
	    
	
</style>