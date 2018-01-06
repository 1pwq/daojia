<template>
	<span class="cuteWrap-back">{{cute.text}}</span>
</template>
<script>
	export default {
		props:['cute']
	}
</script>
<style>
	.cuteWrap{
		overflow: hidden;
		padding: 0 10px;
		border-bottom: 1px dotted #f1f1f1;
		width:100%;
		background: #fff;
	}
	.cuteWrap .cuteWrap-back{
		display: inline-block;
		margin-bottom: 10px;
		margin-right: 2.4%;
		padding: 7px 12px;
		border-radius: 3px;
		font-size: 13px;
    color: #888;
    background: #e8e8e8;
	}
</style>