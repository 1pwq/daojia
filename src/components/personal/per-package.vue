<template>
	<li class="perlist">
		<span>{{icon}}</span>
		<p>{{text}}</p>
	</li>
</template>
<script>
	export default {
		props:['icon','text'],
		data:function(){
			return {
				// classVf:'vf'
			}
		},
	}
</script>
<style>
	.per-content .perlist{
		float: left;
		text-align: center;
		width:30%;
	}
	.per-content .perlist span{
		display: inline-block;
		width:25px;
		height:25px;
	}
	.per-content .perlist img{
		width:25px;
	}
	.per-content .perlist p{
		margin:0;
		line-height:25px;
	}
</style>