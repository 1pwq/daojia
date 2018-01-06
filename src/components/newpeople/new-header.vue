<template>
	<div class="new-top">
		<img :src="newhead.banner" alt="" class="new_banner">
		<div class="new-vip">
			<div class="vip-img">
				<img :src="newhead.coupontitle" alt="" class="coupon_title">
			</div>
			<div class="new-receive">
				<p class="new-posi">
					<button v-show="disblo" class="new-btn" @click="immediately">立即领取</button>
					<span v-show="display" class="receive"></span>
					<img :src="newhead.daojiacoupon" alt="">
				</p>
				<p class="new-posi">
					<button v-show="disblo" class="new-btn" @click="immediately2">立即领取</button>
					<span v-show="disnon" class="receive"></span>
					<img :src="newhead.jdcoupon" alt="">
				</p>
			</div>
			<div class="bottom-img">
				<img :src="newhead.bottomcouponbg" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['newhead'],
		data:function(){
			return {
				display:false,
				disblo:true,
				disnon:false,
			}
		},
		methods:{
			immediately:function(el){
				el.target.style.display = 'none';
				this.display = true;
			},
			immediately2:function(el){
				el.target.style.display = 'none';
				this.disnon = true;
			}
		}
	}
</script>
<style>
	.receive{
		overflow: hidden;
		position: absolute;
    right: 15px;
    width: 52px;
    height: 52px;
    top: 50%;
    margin-top: -30px;
		background:url(/static/img/newpeople/seal_receive.png) center 0 no-repeat;
		background-size: 100% auto;
	}
	.new-header .new-top{
		padding-bottom: 30px;
		width:100%;
	}
	.new-header .new-top .new_banner{
		width:100%;
	}
	.new-header .new-top .new-vip{
		overflow: hidden;
		padding:0 10px;
		width:100%;
	}
	.new-header .new-top .coupon_title{
		width:100%;
	}
	.new-header .new-top .new-posi{
		position:relative;
		margin-bottom: 10px;
		margin-bottom: 0;
	}
	.new-header .new-posi .new-btn{
		position: absolute;
    right: 15px;
    width: 52px;
    height: 52px;
    top: 50%;
    border: none;
    background: #dc49ae;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: -30px;
	}
	.new-header .new-top .new-receive{
		padding: 15px 5px 0 5px;
		/*padding:0 5px;*/
		width:100%;
		background:url(/static/img/newpeople/repeat_coupon_bg.png) center 0 repeat-y;
		background-size: 100% auto;
	}
	.new-header .new-top .new-receive img{
		/*padding-top:15px;*/
		width:100%;
	}
	.new-header .bottom-img img{
		display: block;
		width:100%;
	}
</style>