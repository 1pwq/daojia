<template>
	<div class="ord-con">
		<div class="ord-back">
			<div class="ord-con-top">
				<h2>
					<a href="">
						{{$route.params.shopname}}
						<span class="fa fa-angle-right"></span>
					</a>
				</h2>
				<div class="shopig">
					<div class="ord-con-img">
						<img :src="ig.img" alt="" :key="index" v-for="(ig,index) in ordeta.imgs">
					</div>
					<span class="spot">···</span>
					<p class="shopig-right">
						共{{ordeta.pnum}}件
						<i class="fa fa-angle-right"></i>
					</p>
				</div>
				<div class="ord-price">
					<p class="price">
						<span>商品金额</span>
						<b>&yen;{{ordeta.price}}</b>
					</p>
					<p class="price">
						<span>
							配送费
							<i class="fa fa-question-circle-o"></i>
						</span>
						<b>&yen;{{ordeta.disfee}}</b>
					</p>
				</div>
			</div>
			<div class="disnone" v-show="display">
				<p class="favo">
					<span class="favo-squ">优惠</span>
					<span class="favo-text">优惠券</span>
					<span class="favo-right">&yen; {{ordeta.discount}}</span>
				</p>
				<p class="favo favo-pri">
					<span class="meet">应付</span>
					<b class="favo-text">&yen;{{ordeta.meet}}</b>
					<span class="meet">- 优惠</span>
					<b class="favo-text">&yen;{{ordeta.discount}}</b>
					<span class="favo-right">
						<span class="meet">实付：</span>
						&yen; {{ordeta.ouofpocket}}
					</span>
				</p>
			</div>
			<p class="retract" @click="disblo">
				<span>{{more}} <i :class="down"></i></span>
			</p>
		</div>
		<div class="service">
			<h2>{{ordeta.service}}</h2>
			<div class="return">
				<img src="/static/img/home-content-shop/shop-icon3.png" alt="">
				<p class="return-text">
					<span class="seven">7天包退</span>
					<span class="sev-text">{{ordeta.sertext}}</span>
					<i class="fa fa-angle-right"></i>
				</p>
			</div>
		</div>
		<div class="service">
			<h2>{{ordeta.info}}</h2>
			<div class="ser-info">
				<ul>
					<li>
						<span class="ser-time">送达时间：</span>
						<p>{{ordeta.infoTime}}</p>
					</li>
					<li>
						<span class="ser-time">收货地址：</span>
						<p>
							<span>{{ordeta.infoaname}}</span>
							<span>{{ordeta.infoadd}}</span>
						</p>
					</li>
					<li>
						<span class="ser-time">配送方式：</span>
						<span class="ser-squ">{{ordeta.infomethod}}</span>
					</li>
					<li>
						<span class="ser-time">配送员：</span>
						<p>
							{{ordeta.infoDistri}} {{ordeta.infotel}}
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="service">
			<h2>{{ordeta.ordeinfo}}</h2>
			<div class="ser-info">
				<ul>
					<li>
						<span class="ser-time">订单号码：</span>
						<p>
							{{ordeta.ordenum}}
							<span class="copy">复制</span>
						</p>
					</li>
					<li>
						<span class="ser-time">下单时间：</span>
						<p>
							{{ordeta.ordetime}}
						</p>
					</li>
					<li>
						<span class="ser-time">支付方式：</span>
						<p>{{ordeta.ordemeth}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['ordeta'],
		data:function(){
			return {
				display:false,
				more:'查看更多',
				'down':'fa fa-angle-down',
			}
		},
		methods:{
			disblo(){
				this.display = !this.display;
				if (this.display == true) {
					this.more = '点击收起';
					this.down = 'fa fa-angle-up';
				} else{
					this.more = '查看更多';
					this.down = 'fa fa-angle-down';
				}
			}
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	ul>li{
		list-style: none;
	}
	.od-content{
		padding-bottom: 45px;
	}
	.od-content .ord-con{
		overflow: hidden;
		width:100%;
	}
	.od-content .ord-con-top{
		padding: 10px 10px 0 10px;
    width: 100%;
    background: #fff;
	}
	.od-content .ord-con-top .ord-back{
		margin-bottom: 10px;
		padding-bottom: 40px;
		width: 100%;
    background: #fff;
	}
	.od-content .ord-con-top h2{
		margin: 0;
    border-bottom: 1px solid #f4f4f4;
    line-height: 34px;
    font-size: 13px;
	}
	.od-content .ord-con-top h2 a{
		color: #333333;
	}
	.od-content .ord-con-top h2 a:hover{
		text-decoration: none;
	}
	.od-content .ord-con-top h2 span{
		float: right;
		display: block;
    line-height: 34px;
    color: #c4c4c7;
	}
	.od-content .ord-con-top .shopig{
		overflow: hidden;
		padding:10px 0;
		border-bottom: 1px solid #f4f4f4;
		width:100%;
	}
	.od-content .shopig .ord-con-img{
		overflow: hidden;
		float: left;
		width:195px;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.od-content .shopig .ord-con-img img{
		padding-right: 2px;
		box-sizing: border-box;
		width:46px;
	}
	.od-content .ord-con-top .shopig .spot{
		position:relative;
		top:5px;
		display: inline-block;
		font-size: 24px;
		color:#6b6b70;
	}
	.od-content .shopig .shopig-right{
		float: right;
    padding-top: 5%;
    font-size: 11px;
    color:#333333;
	}
	.od-content .shopig .shopig-right i{
		padding-left: 5px;
		color:#c4c4c7;
	}
	.od-content .ord-con-top .ord-price{
		overflow: hidden;
		padding-bottom: 10px;
    border-bottom: 1px solid #f4f4f4;
	}
	.od-content .ord-price .price{
		margin-bottom: 0;
    padding:15px 0 0 0;
    box-sizing: border-box;
		font-size: 12px;
    color: #333;
	}
	.od-content .ord-price .price b{
		float: right;
		font-weight: normal;
	}
	.od-content .ord-price .price i{
		font-size: 13px;
    color: #a2a2a2;
    margin-left: 5px;
	}
	.od-content .ord-con .disnone{
		overflow: hidden;
		padding: 0 10px;
		border-bottom: 1px solid #f4f4f4;
		width: 100%;
    background: #fff;
	} 
	.od-content .disnone .favo{
		margin-bottom: 0;
    padding: 10px 0;
    border-bottom: 1px solid #f4f4f4;
	}
	.od-content .disnone .favo-pri{
		border-bottom: none;
	}
	.od-content .disnone .favo-squ{
		display: inline-block;
		margin-right: 4px;
    padding: 1px 2px;
    border-radius: 3px;
    font-size: 11px;
    color: #fff;
    background: #ff9257;
	}
	.od-content .disnone .favo-text{
		padding-right: 5px;
		font-weight: normal;
		font-size: 12px;
		color:#333;
	}
	.od-content .disnone .favo-right{
		float: right;
		font-size: 10px;
		color:#333;
	}
	.od-content .disnone .meet{
		font-size: 12px;
		color:#999;
	}
	.od-content .ord-con-top .service{
		overflow: hidden;
		width:100%;
	}
	.od-content .service h2{
		margin: 0;
    padding: 15px 10px;
		font-size: 12px;
	}
	.od-content .service .return{
		padding: 10px;
		width: 100%;
		background: #fff;
	}
	.od-content .service .return img{
		float: left;
		width:25px;
	}  
	.od-content .service .return-text{
		padding-left: 30px;
		line-height: 20px;
	}
	.od-content .return-text .seven,
	.od-content .return-text .sev-text{
		display: block;
		font-size: 12px;
	}
	.od-content .return-text .seven{
		color:#333;
	}
	.od-content .return-text .sev-text{
		color:#999;
	}
	.od-content .service .return-text i{
		float: right;
    position: relative;
    top: -26px;
    font-size: 16px;
    color:#c4c4c7;
	}
	.od-content .ser-info ul{
		overflow: hidden;
		padding: 0 10px;
    width: 100%;
    background: #fff;
	}
	.od-content .ser-info ul li{
		padding: 15px 0;
		border-bottom: 1px solid #f4f4f4;    
		font-size: 12px;
	}
	.od-content .ser-info .ser-time{
		float: left;
    color: #999;
	}
	.od-content .ser-info li p{
		margin: 0;
		padding-left: 75px;
    color: #333;
	}
	.od-content .ser-info li p span{
		display: block;
	}
	.od-content .ser-info .ser-squ{
		display: inline-block;
    margin-left: 15px;
    padding: 2px;
    border: 1px solid #16a9ff;
    border-radius: 3px;
    font-size: 11px;
    color: #16a9ff;
	}
	.od-content .ser-info li p .copy{
		position: relative;
    top: -6px;
		float: right;
		padding: 4px 12px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    font-size: 11px;
    color: #333;
	}
	.od-content .retract{
		text-align: center;
    line-height: 40px;
    font-size: 12px;
    color: #999999;
		width: 100%;
    height: 40px;
    background: #fff;
	}
	    
</style>