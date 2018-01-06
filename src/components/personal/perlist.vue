<template>
	<a href="">
		<img :src="img" alt="">
		<span>{{text}}</span>
	</a>
</template>
<script>
	export default {
		props:['img','text']
	}
</script>
<style>
	.perabout{
		overflow: hidden;
		background:#fff;
	}
	.perabout a{
		display: inline-block;
		padding: 1px 0 25px 0;
    border-bottom: 1px solid #e8e8e8;
    text-align: center;
    font-size: 13px;
    color:#323232;
		width: 25%;
	}
	.perabout a:hover{
		text-decoration: none;
		color:#323232;
	}
	.perabout a img{
		width:47px;
	}
	.perabout a span{
		display: block;
    line-height: 30px;
	}
	.perabout a:nth-last-child(1){
		border-bottom: none;
	}
</style>