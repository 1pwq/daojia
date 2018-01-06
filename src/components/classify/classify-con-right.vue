<template>
	<li :id="list.id" class="cright-pad">
		<dl v-for="(item,index) in list.children" :key="item.id">
			<dd>{{item.text}}</dd>
			<dt>
				<a :href="'/classifySearch/'+list.id+'/'+list.title" v-for="(list,index) in item.plists" :key="list.id"">
					<img :src="list.img" alt="">
					<span>{{list.title}}</span>
				</a>
			</dt>
		</dl>
	</li>
</template>
<script>
	export default {
		props:['list']
	}
</script>
<style>
	.cright-con .cright-pad{
		padding-top:45px;
	}
	.cright-con dl{
		margin-bottom: 0;
		padding-top:10px;
	}
	.cright-con dl a{
		display: inline-block;
		text-align: center;
		font-weight: normal;
		font-size:12px;
		color:#7d7d7d;
		width:33%;
	}
	.cright-con dl dd{
		margin:9px 0 9px 4%;
		font-size: 13px;
		color:#666;
	}
	.cright-con dl img{
		width:62px;
	}
	.cright-con dl span{
		display: block;
	}
</style>