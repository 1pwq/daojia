<template>
	<div>
		<div class="top-right">
			<img :src="pertop.img1" alt="">
			<img :src="pertop.img2" alt="">
		</div>
		<div class="face">
			<img :src="pertop.face" alt="">
			<span class="login" v-show="display" @click="login">{{pertop.logres}}</span>
			<span class="face-tit">
				jd_183269fxl <i class="fa fa-diamond"></i>
				<p>183****5226 <i class="fa fa-edit"></i></p>
			</span>
		</div>
		<div class="vip"></div>
	</div>
</template>
<script>
	export default {
		props:['pertop','display'],
		data:function(){
			return {
				// display:false,
			}
		},
		methods:{
			login:function(){
				window.location.href = '/login';
			},
		}
	}
</script>
<style>
	.per-header .face .face-tit{
		float: left;
		display: inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: #fff;
	}
	.per-header .face .face-tit i{
		padding-left: 5px;
	}
	.per-header .face .face-tit p{
		margin-bottom: 0;
		font-size: 15px;
	}
	.per-header .per-top .vip{
		position:absolute;
		right: 0;
		bottom: 0;
		width:102px;
		height:65px;
		background:url(/static/img/personal/vip.png) no-repeat;
		background-size: 102px 65px;
	}
</style>