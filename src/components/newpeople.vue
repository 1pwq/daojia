<template>
	<div class="new-back">
		<div class="new-header">
			<new-header :newhead="newhead" v-for="(newhead,index) in newHeader" :key="index" />
		</div>
		<div class="new-content">
			<div class="new-spec">
				<div class="goog_tit_img">
					<goog-tit/>
				</div>
				<div class="special-back">
					<p class="confirst"> + 在商家的第一次下单，可享受 
						<b>新人商品价</b>
						哟 +
					</p>
					<ul class="special-offers">
						<special-offers :spec="spec" v-for="(spec,index) in special" :key="spec.id" />
					</ul>
				</div>
				<div class="bottom-img">
					<img src="/static/img/newpeople/bottom_bg.png" alt="">
				</div>
			</div>
			<div class="new-spec">
				<div class="goog_tit_img">
					<store-tit/>
				</div>
				<div class="special-back">
					<p class="confirst"> + 在商家的第一次下单，可享受 
						<b>商家首单优惠</b>
						哟 +
					</p>
					<ul class="special-off">
						<special-store :store="store" v-for="(store,index) in specialStore" :key="store.id" />
					</ul>
				</div>
				<div class="bottom-img">
					<img src="/static/img/newpeople/bottom_bg.png" alt="">
				</div>
			</div>
		</div>
		<div class="new-footer"></div>
	</div>
</template>
<script>
	import newHeader from '@/components/newpeople/new-header';
	import specialOffers from '@/components/newpeople/special-offers';
	import googTit from '@/components/newpeople/goog-tit';
	import storeTit from '@/components/newpeople/store-tit';
	import specialStore from '@/components/newpeople/special-store';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				newHeader:[],
				special:[],
				specialStore:[],
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getNewHeader',function(res){
				th.newHeader = th.newHeader.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getSpecial',function(res){
				th.special = th.special.concat(res.data)
			},'json')
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getSpecialStore',function(res){
				th.specialStore = th.specialStore.concat(res.data)
			},'json')
		},
		components:{
			'new-header':newHeader,
			'special-offers':specialOffers,
			'goog-tit':googTit,
			'store-tit':storeTit,
			'special-store':specialStore,
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
	.new-back{
		width:100%;
		background:#f40060;
	}
	.new-content{
		padding: 0 10px 50px 10px;
		width:100%;
	}
	.new-content .new-spec{
		overflow: hidden;
		padding-bottom: 30px;
	}
	.new-content .special-back{
		overflow: hidden;
		width:100%;
		background:url(/static/img/newpeople/react_bg.png) center 0 repeat-y;
		background-size: 100% auto;
	}
	.new-content .special-back .confirst{
		margin-bottom: 10px;
		line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #fff;
	}
	.new-content .special-back .confirst b{
		font-weight: bold;
		color: #ffd573;
	} 
	.new-content .special-off,
	.new-content .special-offers{
		overflow: hidden;
		margin-bottom: 0;
		padding:0 10px;
	}
	.new-content .bottom-img img{
		display: block;
		width:100%;
	}
</style>