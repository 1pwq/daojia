<template>
	<div class="top">
		<div class="top-tit" @click="hide">
			<p class="top-tit-imgs">
				<img :src="item.img" alt="">
			</p>
			<div class="tit-right">
				<h3>
					{{shopname}}
					<span :class="hearto" @click="redheart"></span>
				</h3>
				<p class="tit-bottom">
					<strong>
						<span>{{item.munite}}</span>
						<span class="base">{{item.baseFreight}}</span>
					</strong>
					<img :src="item.spriceimg" alt="" v-show="hideSprice">
				</p>
			</div>
		</div>
		<div class="list" v-show="topTit">
			<ul>
				<li v-for="(full,index) in item.children">
					<span class="fullsub">满减</span>
					<span>{{full.full1}}</span>
				</li>
				<li v-for="(full,index) in item.children" v-show="display">
					<span class="fullsub">满减</span>
					<span>{{full.full1}}</span>
				</li>
				<li class="list-act">
					<span class="fullsub">满减</span>
					<span>{{item.full1}}</span>
					<span class="acti" @click="toggle">
						{{clicmore}} 
						<span class="fa fa-angle-down"></span>
					</span>
				</li>
			</ul>
			<p class="notic">
				<span class="fullsub notic-squ">公告</span>
				<span>{{item.notice}}</span>
			</p>
			<div class="shop-top">
				<span>店铺优惠券</span>
			</div>
			<ol class="out-coupons">
				<li class="in-coupons" @click="disrob(coupon,index)" v-for="(coupon,index) in item.children1" :key="index">
					<p class="coupons-border">
						<strong class="coupons-discount">
							<span class="rightback leftback">
								<span>{{coupon.num}}</span>
								<small>{{coupon.small}}</small>
							</span>
						</strong>
						<strong class="coupons-dis">
							<span class="couponsback">
								<span>{{coupon.discount}}</span>
								<span>{{coupon.receive}}</span>
							</span>
						</strong>
						<strong class="coupons-discount coupons-right">
							<span class="rightback">
								<img v-show="roblight" src="/static/img/plist/roblight.png" alt="">
								<!-- <span class="roblight">已领取</span> -->
								<span :class="clslight">{{coupon.coupons}}</span>
							</span>
						</strong>
					</p>
				</li>
			</ol>
			<div class="shop-evaluation">
				<div class="shop-top">
					<span>店铺评价</span>
				</div>
				<div class="evaluation">
					<div class="score">
						<div class="eval-left">
							<span>{{item.shopscore}}</span>
							<span class="small">{{item.scoretext}}</span>
						</div>
						<div class="eval-left eval-right">
							<span>{{item.evalnum}}</span>
							<span class="small">{{item.evaltext}}</span>
						</div>
					</div>
					<div class="user-eval">
						<img :src="item.evalimg" alt="">
						<h5>
							{{item.usertitle}}
							<span>{{item.date}}</span>
						</h5>
						<span v-for="(star,index) in item.userstar" :class="star.star" :key="index"></span>
						<p class="usertext">
							<strong class="user-ico">
								<i></i>
							</strong>
							<strong class="user-desc">
								<span>
									{{item.userdesc}}
								</span>
								<span>
									{{item.userdesc}}
								</span>
							</strong>
						</p>
					</div>
					<p class="user-whole">
						<router-link :to="'/evaluate/'+shopid+'/'+shopname">
							查看用户的全部评价
							<i class="fa fa-angle-right"></i>
						</router-link>
					</p>
				</div>
			</div>
			<div class="shop-evaluation" v-for="(info,index) in item.shopinfo">
				<div class="shop-top">
					<span>店铺信息</span>
				</div>
				<div class="evaluation">
					<div class="information">
						<img :src="item.shopinfoimg" alt="">
						<span>
							{{item.shopinfotext}}
							<i class="fa fa-angle-right arrow"></i>
						</span>
					</div>
					<div class="shop-info">
						<div class="shop-num">
							<span class="num">商品数量：</span>
							<p>
								<span>{{info.shopNum}}</span>
							</p>
						</div>
						<div class="shop-num">
							<span class="num">月售单量：</span>
							<p>
								<span>{{item.monthSale}}</span>
							</p>
						</div>
						<div class="shop-num">
							<span class="num">关注人数：</span>
							<p>
								<span>{{info.person}}</span>
							</p>
						</div>
						<div class="shop-num">
							<span class="num">营业时间：</span>
							<p>
								<span>{{info.time}}</span>
							</p>
						</div>
						<div class="shop-num">
							<span class="num">门店地址：</span>
							<p>
								<span>{{info.address}}</span>
							</p>
						</div>
						<div class="shop-num">
							<span class="num">门店电话：</span>
							<p>
								<span class="telphone">{{info.tel}}</span>
							</p>
						</div>
					</div>
					<div class="shop-info shop-qua">
						<h4>
							{{info.qual}}
							<span class="fa fa-angle-right"></span>
						</h4>
					</div>
					<div class="shop-info shop-qua shop-bor">
						<h4>
							<a href="/plistreport">
								{{info.red}}
								<span>{{info.height}}</span>
							</a>
						</h4>
					</div>
				</div>
			</div>
			<div class="shop-continue" @click="shopContinue">
				<i class="fa fa-angle-up"></i>
				<span>点击继续购物</span>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['item','shopid','shopname','goodslist'],
		data:function(){
			return {
				display:false,
				topTit:false,
				hideSprice:true,
				roblight:false,
				clslight:'coupon-red',
				// context:'领券',
				receive:'已领取',
				// nocoupon:true,
				heart:'fa fa-heart',
				hearto:'fa fa-heart-o',
				clicmore:'查看更多',
				clicstop:'收起',
			}
		},
		methods:{			
			redheart:function(){
				if (this.hearto == 'fa fa-heart-o') {
					this.hearto = 'fa fa-heart';
					this.heart = 'fa fa-heart-o';
					$('.tit-right h3 span').css('color','red')
				} else{
					this.hearto = 'fa fa-heart-o';
					this.heart = 'fa fa-heart';
					$('.tit-right h3 span').css('color','#d3d8d3')					
				}
			},
			disrob:function(coupon,index){
				console.log(coupon)
				this.clslight = this.clslight === 'coupon-red' ? 'coupon-light' : 'coupon-red';
				// this.context = this.context === this.receive ? this.context : this.receive;
				// this.roblight = true;
				// this.clslight = 'coupon-light';
				// this.context = '已领取';
				// this.nocoupon = false;
			},
			//显示头部余下内容
			hide:function(){
				this.topTit = true;
				this.hideSprice = false,
				$('.acti').html('查看更多 <span class="fa fa-angle-down"></span>')
				$('.acti').css({
					paddingTop: 2+'px',
			    paddingLeft: 5+'px',
			    paddingRight: 5+'px',
			    background: 'rgba(0, 0, 0, 0.5)',
			    color: 'rgb(255, 255, 255)',
				})
				$('.top').css({
					paddingBottom:20+'px',
				})
				$('.shop-continue').css({
					zIndex:15,
				})
				$('.header-back').css({
					overflow:'auto',
					position:'fixed',
					top:0,
					zIndex:15,
					height:100+'%',
					paddingBottom:50+'px',
				})
				$('.plist-content').css({
					position:'fixed',
					zIndex:-1,
					top:83+'px',
					height:100+'%',
					paddingBottom:50+'px',
				})
			},
			//点击继续购物
			shopContinue:function(){
				this.topTit = false;
				this.hideSprice = true,
				$('.top').css({
					paddingBottom:0,
				})
				$('.header-back').css({
					overflow:'hidden',
					position:'fixed',
					top:0,
					zIndex:-1,
					height:83+'px',
					paddingBottom:0,
				})
			},
			toggle:function(){
				this.display = !this.display;
				// if (this.display == true) {
				// 	this.clicmore = '收起';
				// 	this.clicstop = '查看更多';
				// } else{
				// 	this.clicmore = '查看更多';
				// 	this.clicstop = '收起';
				// }
				$('.acti').html('查看更多 <span class="fa fa-angle-down"></span>')
				if (this.display == true) {
					$('.acti').html('点击收起 <span class="fa fa-angle-down"></span>')
					$('.acti span').css({
						transform:'rotate(180deg)',
					})
					$('.acti').css({
						paddingTop:2+'px',
						paddingLeft:5+'px',
						paddingRight:5+'px',
						background:'rgba(0,0,0,0.5)',
						color:'#fff',
					})
				} else{
					$('.acti').html('查看更多 <span class="fa fa-angle-down"></span>')
				}
			}
		},
	}
</script>
<style>
/**/
	.header .user-whole a{
		color:#fff;
	}
	.header .user-whole a:hover{
		color:#fff;
		text-decoration: none;
	}
	.header .coupons-right .rightback .coupon-light{
		background:#cdcdcd;
	}
	.header .coupons-right .rightback .coupon-red{
		background:#ff5757;
	}
	.header .top{
		box-sizing: border-box;
		background:#c87354 url(/static/img/home-content-shop/store_industry_4.jpg) 0 0 no-repeat;
		background-size:cover;
	}
	.header .top-tit{
		overflow: hidden;
		padding:10px 15px;
		padding-bottom: 10px;
		width:100%;
	}
	.header .top-tit-imgs{
		float: left;
		padding-right:10px;
	}
	.header .top-tit-imgs img{
		border:1px solid rgba(255,255,255,0.8);
		border-radius: 4px;
		width:52px;
		height:53px;
	}
	.header .top-tit .tit-right{
		color:#fff;
	}
	.header .tit-right h3{
		margin-top:0;
		margin-bottom: 0;
		line-height: 20px;
		font-size: 18px;
	}
	.header .tit-right h3 span{
		float: right;
		color:#d3d8d3;
	}
	.header .tit-right .tit-bottom{
		font-size: 10px;
	} 
	.header .tit-bottom strong{
		float: left;
		display: block;
		font-weight: normal;
	}
	.header .tit-bottom .base{
		display: block;
	}
	.header .tit-bottom img{
		float: right;
		margin-top:7px;
		width:42px;
	}
	.header .list{
		padding:0 15px;
	}
	.header .list ul{
		margin-bottom: 0;
		padding-bottom: 10px;
	}
	.header .list li{
		margin-bottom:10px;
		font-size: 12px;
		color:#fff;
	}
	.header .top .fullsub{
		display: inline-block;
		margin-right: 2px;
		padding:0 2px;
		border-radius: 2px;
		background:#5FBC65;
	}
	.header .list li .acti{
		float: right;
	}
	.header .list .acti span{
		padding-left: 3px;
	}
	.header .top .notic{
    line-height: 15px;
		font-size: 12px;
		color:#fff;
	}
	.header .notic .notic-squ{
		margin-right: 5px;
		font-size: 12px;
		color:#333;
		background:#fff;
	}
	.header .top .shop-top{
		position:relative;
		overflow: hidden;
		margin-bottom: 20px;
		text-align: center;
		line-height: 18px;
		width:100%;
	}
	.header .shop-top span{
		position:relative;
		display: inline-block;
		font-size: 15px;
		color:#fff;
	}
	.header .top .shop-top::before,
	.header .top .shop-top::after{
		position:absolute;
		top:50%;
		content:'';
		border-top:1px solid rgba(255,255,255,0.4);
		width:36%;
		height:1px;
	}
	.header .top .shop-top::before{
		left: 0;
	}
	.header .top .shop-top::after{
		right: 0;
	}
	.header .out-coupons .in-coupons{
		position: relative;
		overflow: hidden;
		margin:9px;
		border-left: 3px solid #ff5757;
		border-radius: 5px;
		box-sizing: border-box;
		height:70px;
	}
	.header .coupons-border .coupons-discount{
		position: absolute;
    left: 0;
		float: left;
		display: inline-block;
		line-height: 70px;
		text-align: center;
		font-weight: normal;
		color:#ff4f64;
		width:68px;
		height:70px;
	}
	.header .coupons-border .coupons-discount .leftback{
		margin-left: 0;
		border-right: none;
	}
	.header .coupons-border .coupons-discount span{
		font-size: 20px;
	}
	.header .coupons-border .coupons-discount small{
		display: inline-block;
		margin-left: -3px;
		padding-left: -5px;
		font-size: 15px;
	}
	.header .coupons-border .coupons-dis{	    
    position: absolute;
    float: left;
		display: inline-block;
    padding-right: 67px;
		padding-left: 67px;
		font-weight: normal;
		color:#333;
		width: 100%;
		height: 70px;
	}
	.header .coupons-border .coupons-dis .couponsback{
		margin-right: 45px;
    display: inline-block;
	  margin-bottom: 0;
	  margin-right: 0;
	  padding-top:14px;
	  border-top: 1px solid #ff9d9d;
	  border-bottom: 1px solid #ff9d9d;
	  width: 100%;
	  height: 70px;
	  background: #fff;
	}
	.header .coupons-border .coupons-dis span{
		display: block;
	}
	.header .coupons-border .coupons-dis span:nth-child(1){
		margin-bottom: 4px;
		font-size: 14px;
	}
	.header .coupons-border .coupons-dis span:nth-child(2){
		font-size: 11px;
		color:#666;
	}
	.header .coupons-border .coupons-right{
		position:relative;
		float: right;
		height:70px;
	}
	.header .coupons-border .coupons-right:after{
		position:absolute;
		left: 0;
		top:0;
		content:'';
		width:10px;
		height:100%;
		background:url(/static/img/home-content-shop/plist-header-dotted.png) no-repeat;
		background-size:10px 100%;
	}
	.header .coupons-border .rightback{
		position:relative;
		display: block;
		margin-left: 10px;
		border-top:1px solid #ff9d9d;
		border-bottom:1px solid #ff9d9d;
		border-right: 1px solid #ff9d9d;
		height:100%;
		width:100%;
		background:#fff;
	}
	.header .coupons-border .rightback img{
		width: 52px;
    position: absolute;
    left: 0;
    top: -15px;
    z-index: 10;
	}
	.header .coupons-right .rightback span{
		position:absolute;
		left: 5px;
		top:27px;
		display: inline-block;
		border-radius: 20px;
		line-height: 20px;
		width:45px;
		height:20px;
		font-size: 12px;
		color:#fff;
		background:#ff5757;
	}
	/*.header .coupons-right .rightback .roblight{
		background:#cdcdcd;
	}*/
	.header .top .shop-evaluation{
		overflow: hidden;
		padding-top:20px;
	}
	.header .shop-evaluation .evaluation{
		margin-bottom: 10px;
		overflow: hidden;
		padding:10px 10px 0 10px;
		border-radius: 3px;
		background:rgba(255,255,255,0.1);
	}
	.header .shop-evaluation .score{
		overflow: hidden;
		padding-bottom: 10px;
    border-bottom: 1px dotted rgba(236,236,236,0.5);
		text-align: center;
	}
	.header .shop-evaluation .score .eval-left{
		position:relative;
		float: left;
		width:50%;
	} 
	.header .shop-evaluation .eval-left span{
		display: block;
		font-weight: bold;
		line-height: 36px;
		font-size: 27px;
		color:#fff;
		height:36px;
	}
	.header .shop-evaluation .eval-left .small{
		line-height: 18px;
		font-weight: normal;
		font-size: 12px;
		height:18px;
	}
	.header .shop-evaluation .eval-right::before{
		position:absolute;
		left: 0;
		top:0;
		content:'';
		height:100%;
		width:1px;
		border-right:1px solid #e8e8e8;
	}
/**/
	.header .shop-evaluation .user-eval{
		overflow: hidden;
		padding-top:20px;
		padding-bottom: 10px;
		border-bottom: 1px dotted #fff;
	}
	.header .shop-evaluation .user-eval img{
		float: left;
		margin-right: 5px;
		border-radius: 50%;
		width:35px;
	}
	.header .shop-evaluation .user-eval h5{
		margin:0;
		color:#fff;
	}
	.header .shop-evaluation .user-eval h5 span{
		float: right;
		line-height: 16px;
		font-size: 12px;
	}
	.header .shop-evaluation .user-eval .star{
		padding-right: 2px;
		font-size: 10px;
		color:#efa215;
	}
	.header .shop-evaluation .user-eval .usertext{
		overflow: hidden;
		margin-top:10px;
		margin-left: 40px;
		font-size: 12px;
		color:rgba(255,255,255,0.6);
		margin-bottom: 0;
	}
	.header .shop-evaluation .user-eval .usertext i{
		display: inline-block;
		margin-right: 5px;
		width:13px;
		height:18px;
		background:url(/static/img/home-content-shop/serviceMark.png) no-repeat;
		background-size:100% 100%;
	}
	.header .shop-evaluation .user-eval .usertext span{
		float: left;
		padding-top:4px;
	}
	.header .shop-evaluation .user-eval .user-ico{
		display: block;
		float: left;
	}
	.header .shop-evaluation .user-eval .user-desc{
		display: block;
	}
	.header .shop-evaluation .user-whole{
		margin-bottom: 0;
		line-height: 46px;
		text-align: center;
		font-size: 14px;
		color:#fff;
		height:46px;
	}
/**/
	.header .evaluation .information{
		overflow: hidden;
		padding-bottom: 10px;
		border-bottom: 1px dotted rgba(236,236,236,0.5);
		text-align: center;
	}
	.header .evaluation .information img{
		width:28px;
	}
	.header .evaluation .information span{
		display: block;
		padding-top:5px;
		font-size: 12px;
		color:#fff;
	}
	.header .evaluation .information span .arrow{
		padding-left: 4px;
		font-size: 15px;
	}
	.header .evaluation .shop-info{
		overflow: hidden;
		padding-top:20px;
		padding-bottom: 5px;
		border-bottom: 1px dotted #fff;
	}
	.header .evaluation .shop-num{
		overflow: hidden;
		margin-bottom: 5px;
	}
	.header .evaluation .shop-num .num{
		display: block;
		float: left;
		color:#fff;
	}
	.header .evaluation .shop-num p{
		float: left;
		color:#fff;
		width:70%;
	}
	.header .evaluation .shop-num .telphone{
		text-decoration: underline;
	}
	.header .evaluation .shop-qua{
		padding-top:15px;
	}
	.header .evaluation h4{
		margin:0 0 10px 0;
		font-size: 14px;
		color:#fff;
	}
	.header .evaluation h4 a{
		display: block;
    color: #fff;
	}
	.header .evaluation h4 a:hover{
		text-decoration: none;
		color:#fff;
	}
	.header .evaluation .shop-bor{
		border-bottom: none;
	}
	.header .evaluation .shop-qua span{
		float: right;
	}
.header .top .list .shop-continue{
	position:fixed;
	left: 0;
	bottom: 0;
	/*padding-top:10px;*/
	text-align: center;
	width:100%;
	height:50px;
	background:#fff;
}
.header .top .list .shop-continue i{
	font-size: 20px;
}
.header .top .list .shop-continue span{
	display: block;
	font-size: 15px;
	color:#666;
}
</style>
