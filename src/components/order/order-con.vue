<template>
	<li>
		<h2>
			<a :href="'/plist/'+list.id+'/'+list.shoptit">
				{{list.shoptit}}
				<span class="fa fa-angle-right arrow"></span>
			</a>
			<a :href="'/orderDetail/'+list.id+'/'+list.shoptit+'/'+list.nowstatus+'/'+list.time" class="status">{{list.nowstatus}}</a>
		</h2>
		<p class="storeShop">
			<span class="shop-pad">
				<span class="shopimg">
					<img :src="img.img" alt="" v-for="(img,index) in list.imgs" :key="index">
				</span>
				<span class="spot">···</span>
				<span class="shop-right">
					<b>&yen;{{list.price}}</b>
					<span class="all-item">共{{list.pnum}}件</span>
					<span class="shop-squ">达达专送</span>
				</span>
			</span>
		</p>
		<p class="shop-time">
			<span class="datetime">{{list.time}}</span>
			<span class="time-right">
				<span class="time-eval">去评价</span>
				<span class="again-buy">再次购买</span>
			</span>
		</p>
	</li>
</template>
<script>
	export default {
		props:['list'],
	}
</script>
<style>
	ul>li{
		list-style: none;
	}
	.order-content{
		overflow: hidden;
		padding-bottom: 50px;
		width:100%;
	}
	.order-content .order-list{
		overflow: hidden;
		width:100%;
	}
	.order-content .order-list li{
		overflow: hidden;
		display: block;
		margin-bottom: 10px;
		border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
		width:100%;
		background:#fff;
	}
	.order-content .order-list li h2{
		margin: 0;
		padding:10px;
		border-bottom: 1px solid #f4f4f4;
    font-size: 13px;
    color: #484848;
	}
	.order-content .order-list h2 a{
		color:#484848;
	}
	.order-content .order-list h2 a:hover{
		text-decoration: none;
	}
	.order-content .order-list .arrow{
		padding-left: 4px;
		font-size: 14px;
		color: #c5c5cf;
	}
	.order-content .order-list .status{
		float: right;
	}
	.order-content .order-list .storeShop{
		overflow: hidden;
		padding:0 10px;
		width:100%;
	}
	.order-content .order-list .shop-pad{
		overflow: hidden;
		display: block;
		padding:15px 0;
		border-bottom: 1px solid #f4f4f4;
	}
	.order-content .order-list .shopimg{
		overflow: hidden;
    float: left;
		display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 185px;
	}
	.order-content .order-list .shopimg img{
		padding-left: 2px;
		box-sizing: border-box;
		width:46px;
	}
	.order-content .order-list .spot{
		position:relative;
		top:5px;
		display: inline-block;
		font-size: 24px;
		color:#6b6b70;
	}
	.order-content .order-list .shop-right{
		float: right;
    text-align: right;
    font-size: 11px;
	}
	.order-content .shop-right b{
		display: block;
		margin-bottom: 3px;
    color: #ff5a5e;
    font-weight: normal;
    font-size: 11px;
	}
	.order-content .shop-right .all-item{
		display: block;
		margin-bottom: 3px;
    color: #333333;
	}
	.order-content .shop-right .shop-squ{
		display: block;
    padding: 0 2px;
    border: 1px solid #16a9ff;
    border-radius: 1px;
    color: #16a9ff;
	}
	.order-content .order-list .shop-time{
		padding:0 10px;
	}
	.order-content .shop-time .time-right{
		float: right;
	}
	.order-content .shop-time .datetime{
		font-size: 10px;
		color:#484848;
	}
	.order-content .time-right .time-eval,
	.order-content .time-right .again-buy{
		display: inline-block;
		margin-left: 10px;
		padding: 0 7px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    font-size: 12px;
    color: #333333;
	}
</style>