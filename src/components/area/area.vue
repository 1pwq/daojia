<template>
	<div>
		<dt>{{zone.letter}}</dt>
		<dd v-for="(area,index) in zone.children" :key="index">
			<span class="desc">{{area.desc}}</span>
			<span class="number">{{area.number}}</span>
		</dd>
	</div>
</template>
<script>
	export default {
		props:['zone']
	}
</script>
<style>
	.login-footer{
		position:fixed;
		left: 0;
		top:0;
		width:100%;
		height:100%;
		background:#fff;
	}
	.area{
		display: block;
		overflow: auto;
		width:100%;
		height:100%;
	}
	.area dt{
		display: block;
		padding:0 23px 0 15px;
		line-height: 43px;
		width:100%;
		height:43px;
		background:#f1f1f1;
	}
	.area dd{
		display: block;
		margin:0 23px 0 15px;
		border-bottom: 1px solid #e8e8e8;
		line-height: 43px;
		font-size: 18px;
		height:43px;
		background:#fff;
	}
	.login-footer .area .number{
		float: right;
		padding-right: 10px;
		font-size: 13px;
		color:#999;
	}
</style>