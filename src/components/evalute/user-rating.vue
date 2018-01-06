<template>
	<div class="user-rating">
		<img class="face" :src="rate.img" alt="">
		<div class="userRight">
			<h2>
				{{rate.username}}
				<span>{{rate.time}}</span>
			</h2>
			<span class="star">
				<i>{{rate.star}}</i>
			</span>
			<p>{{rate.usereval}}</p>
			<div class="shop-desc">
				<i></i>
				<span class="service">
					<span>
						{{rate.service}}
					</span>
				</span>
			</div>
			<div class="shop-staff">
				<span class="fa fa-thumbs-o-up staff"></span>
				<div class="shop-squ">
					<a :href="'/detail/'+tit.id+'/'+tit.tit+'/'+tit.sprice+'/'+tit.price+'/'+tit.stock+'/'+tit.num+'/'+shopid+'/'+shopname" class="listTit" v-for="(tit,index) in rate.shoptit" :key="tit.id">{{tit.tit}}</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['rate','shopid','shopname'],
	}
</script>
<style>
	.user-content{
	/*	overflow: hidden;*/
    padding: 10px;
    background: #fff;
	} 
	.user-content .user-rating{
		overflow: hidden;
		padding: 10px 0;
		border-bottom: 1px solid #f1f1f1;
	}
	.user-content .user-rating .face{
		float: left;
    margin-right: 5px;
    border-radius: 50%;
    width: 35px;
	}
	.user-content .user-rating .userRight{
		overflow: hidden;
	}
	.user-content .userRight h2{
		font-size: 13px;
    margin: 0;
    color: #333;
    height: 16px;
    line-height: 16px;
	}
	.user-content .userRight h2 span{
		float: right;
		color:#999;
	}
	.user-content .userRight .star i{
		font-style: normal;
    color: #e8910a;
    font-size: 15px;
	}
	.user-content .userRight p{
		padding: 11px 10px 0 0;
    font-size: 13px;
    color: #333;
    margin-bottom: 0;
	}
	.user-content .userRight .shop-staff,
	.user-content .userRight .shop-desc{
		overflow: hidden;
		margin-top:15px;
	}
	.user-content .userRight .shop-desc i{
		display: inline-block;
		float: left;
		margin-right: 8px;
		margin-top:10px;
		width:13px;
		height:20px;
		background:url(/static/img/plist/peisongMark.png) no-repeat;
		background-size: 100% 100%;
	}  
	
	.user-content .userRight .shop-desc .service{
		/*display: inline-block;
		margin-top:15px;*/
		overflow: hidden;
		display: block;
		padding-top:15px;
		font-size: 12px;
		color:#999;
	}
	.user-content .userRight .shop-staff span{
		display: inline-block;
		font-size: 12px;
		color:#999;
	}
	.user-content .shop-staff .shop-squ{
		overflow: hidden;
	}
	.user-content .userRight .shop-staff .staff{
		font-size: 18px;
    color: #e8910a;
    width: 18px;
    float: left;
	}
	.user-content .shop-staff .listTit{ 
    overflow: hidden;
    display: inline-block;
    margin-top:12px;
    margin: 0 0 10px 10px;
    padding: 2px 4px;
    border: 1px solid #e8e8e8;    
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#999;
    width: 82px;
	}
	.user-content .shop-staff .listTit:hover{
		text-decoration: none;
	}
	    
</style>