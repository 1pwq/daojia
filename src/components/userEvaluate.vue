<template>
	<div>
		<div class="eval-header" v-for="(list,index) in evalute">
			<user-header :list="list" :key="list.id" />
			<div class="userEval">
				<ul>
					<user-eval :user="user" v-for="(user,index) in list.goodEval" :key="index" />
				</ul>
			</div>
			<div class="cuteWrap">
				<cuteWrap :cute="cute" v-for="(cute,index) in list.cuteWrap" :key="index" />
				<div class="cute-eval">
					<eval-cute :evalcute="evalcute" v-for="(evalcute,index) in list.evalCute" :key="index" />
				</div>
			</div>
			<div class="user-examine">
				<span class="examine"></span>
				<span class="user-text">只查看有内容的评价</span>
			</div>
		</div>
		<div class="user-content" v-for="(list,index) in evalute">
			<user-rating :shopid="$route.params.shopid" :shopname="$route.params.shopname" :rate="rate" v-for="(rate,index) in userEvalute" :key="index" />	
		</div>
		<button @click="getMore" class="btn btn-info">加载更多</button>
		<div class="user-footer"></div>
	</div>
</template>
<script>
	import userHeader from '@/components/evalute/user-header';
	import userEval from '@/components/evalute/user-eval';
	import cuteWrap from '@/components/evalute/cuteWrap';
	import evalCute from '@/components/evalute/eval-cute';
	import userRating from '@/components/evalute/user-rating';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				evalute:[],
				userEvalute:[],
			}
		},
		methods:{
			getMore:function(){
				var th = this;
				$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getuserEvalute',function(res){
					th.userEvalute = th.userEvalute.concat(res.data)
				},'json')
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/plistHeader',function(res){
				th.evalute = th.evalute.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getuserEvalute',function(res){
				th.userEvalute = th.userEvalute.concat(res.data)
			},'json')
		},
		components:{
			'user-header':userHeader,
			'user-eval':userEval,
			'cuteWrap':cuteWrap,
			'eval-cute':evalCute,
			'user-rating':userRating,
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
	.eval-header .user-examine{
		overflow:hidden;
		padding: 15px 10px;
		border-bottom: 1px solid #f1f1f1;
		width:100%;
		background:#fff;
	}
	.eval-header .user-examine .examine{
		float: left;
		display: inline-block;
		margin-right: 8px;
		border:1px solid #ccc;
		border-radius: 50%;
		width:16px;
		height:16px;
	}
	.eval-header .user-examine .user-text{
		float: left;
		line-height: 19px;
    font-weight: bold;
    font-size: 12px;
    color: #666;
	}
	.btn-info{
    border: none;
    color: #333;
		width:100%;
		background: #fff;
	}
	.btn-info:hover{
		border:none;
		color:#333;
		background:#fff;
	}
	.btn-info:active{
		border:none;
		border-color:#fff;
	}
</style>