<template>
	<li>
		{{user.text}}
	</li>
</template>
<script>
	export default {
		props:['user'],
	}
</script>
<style>
	ul>li{
		list-style: none;
	}
	.eval-header .userEval{
		overflow: hidden;
		padding:0 10px;
		width:100%;
		background:#fff;
	}
	.eval-header .userEval ul{
		overflow: hidden;
		margin-bottom: 0;
		padding:12px 0;
		width:100%;
	}
	.eval-header .userEval ul li:nth-child(1){
		color:#fff;
		background:#47b34f;
	}
	.eval-header .userEval ul li:nth-last-child(1){
		color:#aaa;
		background:#F5F5F5;
	}
	
	.eval-header .userEval ul li{
		float: left;
		margin-right: 2.4%;
		padding: 7px 0;
		border-radius: 3px;
    text-align: center;
    font-size: 13px;
    color: #888;
		width: 22.5%;
    background: #E8E8E8;
    
	}
	
</style>