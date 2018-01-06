<template>
	<span class="eval-cute">{{evalcute.text}}</span>
</template>
<script>
	export default {
		props:['evalcute']
	}
</script>
<style>
	.eval-header .cute-eval{
		overflow: hidden;
	}
	.eval-header .eval-cute{
		display: inline-block;
    padding: 7px 12px;
    margin-right: 2.4%;
    margin-bottom: 10px;
    background: #f5f5f5;
    font-size: 13px;
    color: #aaa;
	}
</style>