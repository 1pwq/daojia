<template>
	<div class="home">
		<div class="header">
			<div class="search">
				<div class="search-xt">
					<span class="fa fa-search"></span>
					<input type="text" placeholder="搜索附近的商品和门店">
				</div>
			</div>
		</div>
		<div class="content row">
			<div class="content-con">
				<div class="row-clist">
					<ul class="row-clist-clist">
						<classify-content :clist="clist" v-for="(clist,index) in classifyCon" :key="clist.id" />
					</ul>
				</div>
				<div class="row-clist2">
					<ul class="cright-con">
						<classify-con-right :list="list" v-for="(list,index) in cright" :key="list.id" />
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<footer-nav v-for="(list,index) in footernav" :key="index" :text="list.text" :icon="list.icon" :url="list.url" :index="index" />
		</div>
	</div>
</template>
<script>
	import classifyCon from '@/components/classify/classify-content';
	import classifyConRight from '@/components/classify/classify-con-right';
	import footernav from '@/components/home/footer-nav';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				classifyCon:[],
				footernav:[],
			}
		},
		created:function(){
			var th = this;
			//分类列表
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getClassify',function(res){
				th.classifyCon = th.classifyCon.concat(res.data)
			},'json')
			//底部导航
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.footernav = th.footernav.concat(res.data)
			},'json')
		},
		components:{
			'classify-content':classifyCon,
			'classify-con-right':classifyConRight,
			'footer-nav':footernav,
		},
		computed:{
			cright:function(){
				return this.classifyCon;
			}
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
		list-style: none;
	}
	.row{
		margin-right: 0;
		margin-left: 0;
	}
	.row-clist,.row-clist2{
		padding-left: 0;
		padding-right: 0;
	}
	.header .search{
		position:fixed;
		left: 0;
		top:0;
		z-index: 10;
		width:100%;
		height:45px;
		background:#fff;
	}
	.header .search .search-xt{
		position:absolute;
		left: 7px;
		top:7px;
		right: 7px;
		border:1px solid #e6e6e6;
		border-radius: 3px;
	}
	.header .search-xt input{
		padding:4px 0;
		border:none;
		outline: none;
		box-sizing: border-box;
		width:88%;
	}
	.header .search-xt span{
		padding:0 8px 0 11px;
		color:#999;
	}
	.content a:hover{
		text-decoration: none;
	}
	.content .row-clist{
		overflow: hidden;
		position:fixed;
		left: 0;
		top: 44px;
		width:100px;
		height:100%;
		background:#f4f4f4;
	}
	.content .content-con{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		background:#fff;
	}
	.content .row-clist2{
		padding-left: 105px;
		padding-bottom: 55px;
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
</style>