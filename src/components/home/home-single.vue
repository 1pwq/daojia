<template>
	<div>
		<a href="/newpeople">
			<img :src="single" alt="">
		</a>
		<aside>
			<img :src="rightAside" alt="">
		</aside>
	</div>
</template>
<script>
	export default {
		props:['single','rightAside']
	}
</script>
<style>
	.header .imgs{
		padding:0 10px;
	}
	.header .imgs img{
		width:100%;
	}
	aside{
		position:fixed;
		right: 0;
		bottom: 20%;
		z-index: 10;
		width:75px;
	}
	aside img{
		width:100%;
	}
</style>