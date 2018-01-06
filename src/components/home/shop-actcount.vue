<template>
	<a href="#" class="actcount-meat">
		<p>
			<b>{{title}}</b>
			<span>{{low}}</span>
		</p>
		<img :src="img" alt="">
	</a>
</template>
<script>
	export default{
		props:['title','low','img'],
	}
</script>
<style>
	.actcount-meat{
		position:relative;
		overflow: hidden;
		display: block;
		color:#333;
	}
	.actcount-meat:hover{
		text-decoration: none;
		color:#333;
	}
	.actcount-meat::after{
		position: absolute;
		right: 0;
		top:0;
		content:'';
		border-right: 1px solid #e8e8e8;
		width:1px;
		height:100%;
	}
	.actcount-meat p{
		padding-top:20px;
		padding-bottom:20px;
	}
	.actcount-meat b{
		display: block;
		font-weight: bold;
		font-size:18px;
	}
	.actcount-meat span{
		display: block;
		font-size:10px;
		color:#999;
	}
	.actcount-meat img{
		width:62px;
	}
</style>