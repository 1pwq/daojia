<template>
	<div class="posi-footer" :class="{'focus':$route.path == url}">
		<router-link :to="url" class="chancolor">
			<span :class="icon" class="chancolor"></span>
			{{text}}
		</router-link>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default{
		props:['icon','text','url','index'],
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
	.focus .chancolor{
		/*font-size:10px;*/
		color:#39ac69;
	}
	.posi-footer{
		display: block;
		float: left;
		padding-top:5px;
		text-align: center;
		width:20%;
	}
	.posi-footer a{
		font-size:10px;
		color: #888;
	}
	.posi-footer a:hover{
		text-decoration: none;
	}
	.posi-footer span{
		display: block;
		padding-top:5px;
		padding-bottom:2px;
		font-size:20px;
		color: #888;
	}
</style>