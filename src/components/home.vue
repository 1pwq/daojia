<template>
	<div class="home">
		<div class="header">
			<header-top/>
			<div class="swiper-container">
	    	<div class="swiper-wrapper">
				<header-swiper :swpe="swpe" v-for="(swpe,index) in swp" :key="swpe.id" />
				</div>
		    <div class="swiper-pagination"></div>
			</div>

			<ul class="header-nav">
				<li v-for="(list,index) in navlists" :key="index">
					<top-nav :text="list.text" :csrc="list.csrc"/>
				</li>
			</ul>
			<div class="empty"></div>
			<div class="imgs">
				<home-single v-for="(single,index) in homeSingle" :key="index" :single="single.single" :rightAside="single.asidePacket" />
			</div>
		</div>
		<div class="content">
			<div class="empty"></div>
			<div class="content-shop-more">
				<div class="seckill">
					<a href="/lookMore">
						更多
						<i class="fa fa-angle-right"></i>
					</a>
				</div>
				<div class="content-more-img">
					<shop-more v-for="(list,index) in shopMore" :key="list.id" :id="list.id" :price="list.price" :sprice="list.sprice" :title="list.title" :csrc="list.img"/>
					<!-- <p></p> -->
					<a href="/lookMore" class="fa fa-arrow-circle-o-right more more-arrow"></a>
					<a href="/lookMore" class="more">查看更多</a>
				</div>
			</div>
			<div class="empty"></div>
			<div class="actcount">
				<ul>
					<li v-for="(shop,index) in shopActcount" :key="index">
						<shop-actcount :title="shop.title" :low="shop.low" :img="shop.img"/>
					</li>
				</ul>
			</div>
			<div class="empty"></div>
			<div class="shop-top">
				<span>附近的店铺</span>
			</div>
			<shop-list v-for="(shop,index) in shopLists" 
				:key="shop.id" 
				:id="shop.id" 
				:shop="shop" />
			<button @click="getMore" class="btn btn-info">加载更多</button>
		</div>
		<div class="footer">
			<footer-nav v-for="(list,index) in footernav" :key="index" :text="list.text" :icon="list.icon" :url="list.url" :index="index" />
		</div>
	</div>
</template>
<script>
	import topNav from '@/components/home/top-nav.vue';
	import footerNav from '@/components/home/footer-nav.vue';
	import shopList from '@/components/home/shop-list.vue';
	import shopMore from '@/components/home/shop-more.vue';
	import shopActcount from '@/components/home/shop-actcount.vue';
	import homeSingle from '@/components/home/home-single.vue';
	import headerSwiper from '@/components/home/header-swiper.vue';
	import headerTop from '@/components/home/header-top.vue';
	import $ from 'jquery';
	export default {
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getSwiper',function(res){
				th.swp = th.swp.concat(res.data)
			},'json')
			//顶部导航
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/gettopnav',function(res){
				th.navlists = th.navlists.concat(res.data)
			},'json')
			//商家列表
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getShopList',function(res){
				th.shopLists = th.shopLists.concat(res.data)
			},'json')
			//更多内容
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getshopMore',function(res){
				th.shopMore = th.shopMore.concat(res.data)
			},'json')
			//actcount
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getActcount',function(res){
				th.shopActcount = th.shopActcount.concat(res.data)
			},'json')
			//底部导航
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.footernav = th.footernav.concat(res.data)
			},'json')
			//fixed
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getSingleAside',function(res){
				th.homeSingle = th.homeSingle.concat(res.data)
			},'json')
		},
		methods:{
			//加载更多
			getMore:function(){
				var th = this;
				$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getShopList',function(res){
					th.shopLists = th.shopLists.concat(res.data)
				},'json')
			}
		},
		data:function(){
			return {
				navlists:[],
				shopLists:[],
				footernav:[],
				shopMore:[],
				shopActcount:[],
				homeSingle:[],
				swp:[],
			}
		},
		components:{
			'top-nav':topNav,
			'footer-nav':footerNav,
			'shop-list':shopList,
			'shop-more':shopMore,
			'shop-actcount':shopActcount,
			'home-single':homeSingle,
			'header-swiper':headerSwiper,
			'header-top':headerTop,
		},
		mounted:function(){
			var th = this;
			var flag = true;//保证每次加载完后不再重新加载
			window.addEventListener('scroll',function(){
				if (flag) {
					setTimeout(function(){
						var scrollHeight = document.documentElement.scrollHeight;//获取内容高度
						var clientHeight = document.documentElement.clientHeight;//获取可视高度
						var scrollTop = document.documentElement.scrollTop;//获取滚动高度
						//当滚动条距离底部50个像素的时候执行
						if (scrollTop+clientHeight >= scrollHeight - 50) {
							//console.log('hello')
							th.getMore();
						}
						flag = true;//每次滚动完后,设置true，保证下次滚动代码继续执行
					},500)
					flag = false;
				}
			})
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
	a{
		color:#333;
	}
	a:hover{
		text-decoration: none;
		color:#333;
	}
	ul{
		margin:0;
		padding:0;
		box-sizing: border-box;
		list-style: none;
	}
	.home{
		background:#fff;
	}
	.empty{
		width:100%;
		height:10px;
		background:#f1f1f1;
	}
	.header .header-nav{
		overflow: auto;
		padding:15px 5px;
	}
	.header-nav li{
		float:left;
		padding:0 5px;
		box-sizing: border-box;
		width:20%;
	}
	.content{
		overflow: hidden;
		padding-bottom: 80px;
		width:100%;
	}
	.content .content-shop-more .seckill{
		overflow: hidden;
		padding:5px 10px;
		text-align: right;
		background:url(/static/img/home-content-shop/seckill-title.png) 10px center no-repeat;
		background-size: auto 20px;
	}
	.content .content-shop-more .seckill a{
		font-size: 12px;
		color:#ff5757;
	}
	.content .content-shop-more .seckill i{
		font-style: normal;
		font-size:16px;
	}
	.content .content-shop-more{
		overflow: hidden;
	}
	.content .content-more-img{
		position: relative;
		overflow-y: auto;
		padding-right: 10px;
		padding-bottom: 10px;
		white-space: nowrap;
		width:100%;
	}
	.content .content-shop-more .more{
		display: inline-block;
		writing-mode:tb-rl;
		margin-bottom:18px;	
		margin-right: 8px;
		letter-spacing:3px;	
		font-size: 10px;
		color:#999;
	}
	.content .content-shop-more .more-arrow{
		margin-left:10px;
		margin-right: 0;
		margin-bottom:35px;
		font-size:25px;
	}
	.content .actcount{
		overflow: hidden;
	}
	.content .actcount li .actcount-meat::after{
		border-right: none;
	}
	.content .actcount li:nth-child(1) .actcount-meat{
		padding-bottom: 20px;
	}
	.content .actcount li:nth-child(2){
		float: left;
		border-bottom: 1px solid #e8e8e8;
		box-sizing: border-box;
		text-align: center;
		width:57%;
	}
	.content .actcount li:nth-child(2) p{
		float: left;
		width:50%;
	}
	.content .actcount li:nth-child(2) b{
		font-size: 13px;
	}
	.content .actcount li:nth-child(2) img{
		margin-top:12px;
		width:46px;
	}
	.content .actcount li:nth-child(3){
		border-right: 1px solid #e8e8e8;
	}
	.content .actcount li:nth-child(3),.content .actcount li:nth-child(4){
		float: left;
		box-sizing: border-box;
		text-align: center;
		width:28.5%;
	}
	.content .actcount li:nth-child(3) p,
	.content .actcount li:nth-child(4) p{
		margin-bottom:0;
		padding-top:5px;
		padding-bottom:0;
	}
	.content .actcount li:nth-child(3) b,
	.content .actcount li:nth-child(4) b{
		font-size:13px;
	}
	.content .actcount li:nth-child(3) img,
	.content .actcount li:nth-child(4) img{
		margin-bottom: 10px;
		width:46px;
	}
	.content .actcount .bac{
		background:red;
	}
	.content .actcount .abc{
		background:pink;
	}
	.content .actcount li:nth-child(1){
		float: left;
		box-sizing: border-box;
		text-align: center;
		width:43%;
	}
	.content .actcount li:nth-child(1) .actcount-meat::after{
		border-right: 1px solid #e8e8e8;
	}
	.content .shop-top{
		position:relative;
		overflow: hidden;
		text-align: center;
		line-height: 50px;
		width:100%;
		background:#fff;
	}
	.content .shop-top span{
		position:relative;
		display: inline-block;
		padding:0 5px;
		font-weight: bold;
		font-size: 17px;
		color:#333;
		background-color: #FFF;
	}
	.content .shop-top::before{
		position:absolute;
		left: 50%;
		top:50%;
		content:'';
		border-top:1px solid #333;
		width:228px;
		height:1px;
		transform: scaleY(0.5) translate(-50%,0);
	}
	.content .btn{
		padding:10px;
		border:none;
		outline: none;
		color:#000;
		width:100%;
		background:#f4f4f4;
	}
	.footer{
		overflow: hidden;
		position:fixed;
		left: 0;
		bottom:0;
		border-top:1px solid #d9d9d9;
		width:100%;
		height:55px;
		background:#fff;
	}
	/*.footer li{
		float:left;
		box-sizing: border-box;
		width:20%;
	}*/
</style>