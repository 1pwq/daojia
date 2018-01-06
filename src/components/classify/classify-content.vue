<template>
	<li class="clist">
		<a :href="'#'+clist.id">{{clist.text}}</a>		
	</li>
</template>
<script>
	export default {
		props:['clist']
	}
</script>
<style>
	.row-clist .clist a{
		display: block;	
		padding:0 20px;
		border-bottom:1px solid #e8e8e8;
		border-right:1px solid #e8e8e8;
		
		font-size:13px;
		color:#666;
		text-align: center;
		line-height: 43px;
		height:43px;
		background:#f4f4f4;
	}
	.row-clist .clist a:hover{
		padding-left: 17px;
		border-left: 3px solid #47b34f;
		border-right: none;
		text-decoration: none;
		color:#47b34f;
		background:#fff;
	}
</style>