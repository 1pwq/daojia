<template>
	<div class="claSearch">
		<i class="fa fa-search"></i>
		<input type="text" v-model="title">
	</div>
</template>
<script>
	export default {
		props:['title']
	}
</script>
<style>
	.claSeaHeader{
		overflow: hidden;
		border-bottom: 1px solid #e7e9e4;
		background:#fff;
	}
	.claSeaHeader .claSearch{
		margin: 8px auto;
    box-sizing: border-box;
    border: 1px solid #e6e6e6;
		width: 90%;
	}
	.claSeaHeader .claSearch i{
		padding-right: 8px;
    padding-left: 8px;
    color:#888;
	}
	.claSeaHeader .claSearch input{
		padding:3px 0;
		border: none;
    outline: none;
		width: 88%;
	}
	   
</style>