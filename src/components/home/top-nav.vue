<template>
	<a href="#" class="top-nav-imgs">
		<img :src="csrc" alt="">
		<span>{{text}}</span>
	</a>
</template>
<script>
	export default {
		props:['csrc','text']
	}
</script>
<style>
	.top-nav-imgs{
		color:#000;
	}
	.top-nav-imgs:hover{
		text-decoration: none;
		color:#000;
	}
	.top-nav-imgs img{
		padding-bottom: 2px;
		width: 100%;
	}
	.top-nav-imgs span{
		display: block;
		text-align: center;
		font-size: 12px;
	}
</style>