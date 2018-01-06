<template>
	<div class="searchCon">
		<router-link :to="'/plist/'+shop.id+'/'+shop.title" class="shoplink">
			<div class="seaLeft">
				<div class="shoplimg">
					<img :src="shop.img" alt="">
				</div>
			</div>
		</router-link>
		<div class="searight">
			<router-link :to="'/plist/'+shop.id+'/'+shop.title" class="shoplink">
				<h2 class="searight-title">
					{{shop.title}}
					<img :src="shop.shopicon" alt="">
				</h2>
				<p class="squ">{{shop.munite}}</p>
				<p class="star">
					<span>{{shop.star}}</span>
					<b>{{shop.monthSale}}</b>
				</p>
			</router-link>
			<div class="cright-bottom">
				<div class="neck">
					<p class="neck-p">
						<router-link :to="'/plist/'+shop.id+'/'+shop.title" class="shoplink shopcol">
							<i>领券</i>
							<span class="zhekou">{{shop.full1}},{{shop.sub1}},{{shop.full1}},{{shop.sub1}},{{shop.full1}}，{{shop.sub1}}</span>
						</router-link>
						<span :class="listdown" class="neck-ico" @click="list"></span>
					</p>
					<router-link :to="'/plist/'+shop.id+'/'+shop.title" class="shoplink shopcol">
						<p class="neck-p">
							<i>首单</i>
							<span class="zhekou">{{shop.desc}}</span>
						</p>
						<p v-show="display" class="neck-p neck-green" v-for="(neck,index) in shop.children" :key="index">
							<i>满减</i>
							<span>{{neck.full1}}{{neck.sub1}}，{{neck.full1}}{{neck.sub1}}，{{neck.full1}}...</span>
						</p>
					</router-link>
				</div>
				<div class="shop-bottom">
					<router-link :to="'/plist/'+shop.id+'/'+shop.title" class="shoplink">
						<ul>
							<li v-for="(imgs,index) in shop.imgs">
								<img :src="imgs.img" alt="">
								<p>{{imgs.desc}}</p>
								<span>
									<small>&yen;</small> {{imgs.price}}
								</span>
							</li>
							<li v-show="dislist" v-for="(imgs2,index) in shop.imgs2">
								<img :src="imgs2.img" alt="">
								<p>{{imgs2.desc}}</p>
								<span>
									<small>&yen;</small> {{imgs2.price}}
								</span>
							</li>
						</ul>
					</router-link>
					<div class="more-shop" @click="blolist">
						<span>{{look}}</span>
						<i :class="cladown"></i>
					</div>
				</div>				
			</div> 
		</div>
	</div>
</template>
<script>
	export default {
		props:['shop'],
		data:function(){
			return {
				display:false,
				dislist:false,
				look:'查看更多商品',
				cladown:'fa fa-angle-down',
				listdown:'fa fa-angle-down',
			}
		},
		methods:{
			blolist:function(){
				this.dislist = !this.dislist;
				if (this.dislist != false) {
					this.look = '收起';
					this.cladown = 'fa fa-angle-up';
				} else{
					this.look = '查看更多四件商品';
					this.cladown = 'fa fa-angle-down';
				}
			},
			list:function(){
				this.display = !this.display;
				if (this.display != false) {
					this.listdown = 'fa fa-angle-up';
				} else{
					this.listdown = 'fa fa-angle-down';
				}
			},
		}
		// created:function(){
		// 	var th = this;
		// 	$.get('',function(res){},'json')
		// },
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
	.claSeaCon .shoplink{
		color:#333;
	}
	.claSeaCon .shoplink:hover{
		text-decoration: none;
		color:#333;
	}
	.claSeaCon .shopcol{
		color:#999;
	}
	.claSeaCon .shopcol:hover{
		text-decoration: none;
		color:#999;
	}
	ul>li{
		list-style: none;
	}
	.claSeaCon{
		overflow: hidden;
		width:100%;
		background:#fff;
	}
	.claSeaCon .searchCon{
		overflow: hidden;
		padding:20px 10px 15px;
		border-bottom: 1px solid #e7e9e4;
	}
	.claSeaCon .searchCon .seaLeft{
		float: left;
	}
	.claSeaCon .seaLeft .shoplimg{
		margin-right: 10px;
		border:1px solid #e8e8e8;
		width:66px;
	}
	.claSeaCon .seaLeft .shoplimg img{
		width:100%;
	}
	.claSeaCon .searchCon .searight{
		overflow: hidden;
	}
	.claSeaCon .searight .searight-title{
		overflow: hidden;
		margin: 0;
    margin-bottom: 5px;
		font-size: 16px;
    color: #333;
    font-weight: bold;
	}
	.claSeaCon .searight .searight-title a{
		color:#333;
	}
	.claSeaCon .searight .searight-title a:hover{
		text-decoration: none;
		color:#333;
	}
	.claSeaCon .searight .searight-title img{
		float: right;
    width: 18px;
    height:20px;
	}
	.claSeaCon .searight .squ{
		display: inline-block;
		margin-bottom: 0;
		padding:0 2px;
		border:1px solid #16A9ff;
		box-sizing: border-box;
		text-align: center;
		font-size: 10px;
		color:#16A9ff;
	}
	.claSeaCon .searight .star{
		position:relative;
		overflow: hidden;
		margin-bottom: 0;
		border-bottom: 1px dotted #e8e8e8;
		padding:8px 0;
		font-size:10px;			
	}
	.claSeaCon .star span{
		position:relative;
		float: left;
		padding-right: 10px;
		color:#efa215;	
	}
	.claSeaCon .star b{
		padding-left: 5px;
		font-weight: normal;
		font-size:11px;
		color:#999;	
	}
	.claSeaCon .star span::after{
		position:absolute;
		right: 2px;
		top:4px;
		content:'';
		width:1px;
		height:10px;
		background:#999;
	}

	.claSeaCon .searight .cright-bottom{
		overflow: hidden;
		margin-top:10px;
	}
	.claSeaCon .cright-bottom .neck-p{		
		margin-bottom:10px;
		font-size: 10px;
		color:#999;
	}
	.claSeaCon .cright-bottom .neck-p .zhekou{
		overflow: hidden;
		display: inline-block;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 75%;
	}
	.claSeaCon .cright-bottom .neck-green i{
		background:#5FBC65;
	}
	.claSeaCon .neck i{
		float: left;
    display: inline-block;
    margin-right: 5px;
		padding:0 2px;
		border-radius: 2px;
		box-sizing: border-box;
		font-style: normal;
		color:#fff;
		background:#FF6C57;
	}
	.claSeaCon .neck .neck-ico{
		float: right;
		padding-top:2px;
	}
	.claSeaCon .searight .shop-bottom ul{
		margin-bottom: 0;
	}
	.claSeaCon .searight .shop-bottom img{
		float: left;
    display: inline-block;
		width: 50px;
	}
	.claSeaCon .searight .shop-bottom p{
		overflow: hidden;
    display: inline-block;
    margin:0;
    padding-left: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 50px;
    font-size: 13px;
    width: 50%;
	}
	.claSeaCon .shop-bottom li span{
		float: right;
    line-height: 50px; 
    font-size: 13px;
    color: #FF5757;
	}  
	.claSeaCon .shop-bottom li small{
		font-size: 10px;
	}
	.claSeaCon .shop-bottom .more-shop{
		font-size: 14px;
    color: #47b34f;
    margin-top: 15px;
    padding: 17px 0 2px;
    border-top: 1px solid #e8e8e8;
	}
	.claSeaCon .shop-bottom .more-shop i{
		float: right;
    line-height: 20px;
    font-size: 26px;
    margin-right: 7px;
	}
	    
	
	    
</style>