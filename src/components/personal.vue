<template>
	<div>
		<div class="per-header">
			<div class="per-top">
				<pertop :display="dis" :pertop="pertop" v-for="(pertop,index) in pertop" />
			</div>
		</div>
		<div class="per-content">
			<ul>
				<li class="perlist">
					<span><img src="/static/img/personal/icon_packet.png" alt=""></span>
					<p>我的钱包</p>
				</li>
				<per-package :icon="item.icon" :text="item.text" v-for="(item,index) in perPackage" :key="index" />
			</ul>
			<div class="singleimg">
				<single-img :img="img.perimg" v-for="(img,index) in singleimg" />
			</div>
			<div class="perabout">
				<perlist :img="per.img" :text="per.text" v-for="(per,index) in perlist" :key="index" />
			</div>
			<div class="exit">
				<!-- <button v-show="display" @click="disnone">退出账号</button> -->
				<perexit :exit="exit.perexit" v-for="(exit,index) in singleimg" />
			</div>
		</div>
		<div class="footer">
			<footer-nav v-for="(list,index) in footernav" :key="index" :text="list.text" :icon="list.icon" :url="list.url" :index="index" />
		</div>
	</div>
</template>
<script>
	import perPackage from '@/components/personal/per-package';
	import singleimg from '@/components/personal/single-img';
	import perlist from '@/components/personal/perlist';
	import footerNav from '@/components/home/footer-nav';
	import pertop from '@/components/personal/pertop';
	import perexit from '@/components/personal/perexit';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				perPackage:[],
				singleimg:[],
				perlist:[],
				footernav:[],
				pertop:[],
				dis:false,
			}
		},
		created:function(){
			var th = this;
			// packet
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/perList',function(res){
				th.perPackage = th.perPackage.concat(res.data)
			},'json')
			// single
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getSingleAside',function(res){
				th.singleimg = th.singleimg.concat(res.data)
			},'json')

			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getperList',function(res){
				th.perlist = th.perlist.concat(res.data)
			},'json')
			//footer nav
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.footernav = th.footernav.concat(res.data)
			},'json')
			//top
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getperTop',function(res){
				th.pertop = th.pertop.concat(res.data)
			},'json')
		},
		components:{
			'per-package':perPackage,
			'single-img':singleimg,
			'perlist':perlist,
			'footer-nav':footerNav,
			'pertop':pertop,
			'perexit':perexit,
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	a{
		color:#323232;
	}
	a:hover{
		text-decoration: none;
		color:#323232;
	}
	ul li{
		list-style: none;
	}
	.per-header{
		overflow: hidden;
		width:100%;
	}
	.per-header .per-top{
		position:relative;
		width:100%;
		height:110px;
		background:url(/static/img/personal/headerback.png) center bottom no-repeat;
		background-size: cover;
	}
	.per-header .per-top .top-right{
		position:absolute;
		left: 0;
		top:0;
		width:100%;
		height:50px;
	}
	.per-header .per-top .top-right img{
		float: right;
		margin: 15px 15px 0 0;
		width:22px;
	}
	.per-header .per-top .face{
		position:absolute;
		left: 16px;
		bottom:25px;
	}
	.per-header .per-top .face img{
		float: left;
		margin-right: 10px;
		width:61px;
	}
	.per-header .per-top .face .login{
		margin-top: 12px;
    display: inline-block;
    float: left;
		padding:7px 11px;
		letter-spacing:1px;
		font-size: 14px;
		color:#fff;
		background:#69c575;
	}
	.per-content{
		overflow: hidden;
		margin-bottom: 10px;
	}
	.per-content ul{
		overflow: hidden;
		padding-top:14px;
		padding-bottom: 12px;
		margin-bottom: 12px;
		width:100%;
		background:#fff;
	}
	.per-content .singleimg{
		margin-bottom: 12px;
		width:100%;
		height:75px;
		background:#fff;
	}
	.per-content .singleimg img{
		width:100%;
		height:75px;
	}
	.per-content .exit{
		margin-top:12px;
		padding-bottom: 64px;
		width:100%;
	}
	.per-content .exit button{
		border:none;
		outline: none;
		font-size: 16px;
		color:#ff5757;
		width:100%;
		height:46px;
		background:#fff;
	}
	.footer{
		position:fixed;
		left: 0;
		bottom:0;
		width:100%;
		background:#fff;
	}
</style>