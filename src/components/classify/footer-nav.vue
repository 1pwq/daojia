<template>
	<div class="posi-footer">
		<router-link :to="url">
			<span :class="icon"></span>
			<p>{{text}}</p>
		</router-link>
	</div>
</template>
<script>
	export default{
		props:['icon','text','url']
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
	.posi-footer:nth-child(2) span,.posi-footer:nth-child(2) p{
		color:#39ac69;
	}
	.posi-footer{
		display: block;
		float: left;
		padding-top:5px;
		text-align: center;
		width:20%;
	}
	.posi-footer span{
		display: block;
		padding-top:5px;
		padding-bottom:2px;
		font-size:20px;
		color:#888;
	}
	.posi-footer p{
		font-size:10px;
		color:#888;
	}
</style>