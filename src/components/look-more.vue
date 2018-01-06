<template>
	<div>
		<div class="more-header">
			<head-img/>
		</div>
		<div class="more-content">
			<ul class="more-list">
				<more-content :more="more" v-for="(more,index) in moreList" :key="more.id" />
			</ul>
			<button @click="getMore" class="btn btn-info">加载更多</button>
		</div>
		<div class="more-footer">
			<div class="footer-dropup">
				<button @click="toggle" class="butn">···</button>
				<ul v-show="display" class="dropdown-menu1">
					<li>
				  	<a href="">
				  		<span class="icon fa fa-search"></span>
				  		<span>搜索</span>
				  	</a>
				  </li>
					<p-aside :text="item.text" :icon="item.icon" :url="item.url" v-for="(item,index) in aside" :key="index" />
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import moreHead from '@/components/lookMore/more-head';
	import moreContent from '@/components/lookMore/more-content';
	import aside from '@/components/plist/aside';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				display:false,
				moreList:[],
				aside:[],
			}
		},
		methods:{
			//加载更多
			getMore:function(){
				var th = this;
				$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getLookMore',function(res){
					th.moreList = th.moreList.concat(res.data)
				},'json')
			},
			toggle:function(){
				this.display = !this.display;
			},
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getLookMore',function(res){
				th.moreList = th.moreList.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getfooter',function(res){
				th.aside = th.aside.concat(res.data)
			},'json')
		},
		components:{
			'head-img':moreHead,
			'more-content':moreContent,
			'p-aside':aside,
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
		margin:0;
		padding:0;
	}
	.more-content .btn{
		padding:10px;
		border:none;
		outline: none;
		color:#000;
		width:100%;
		background:#f4f4f4;
	}
</style>