<template>
	<ul class="user-score">
		<li class="user-border">
			<span class="score">{{list.shopscore}}</span>
			{{list.scoretext}}
		</li>
		<li>
			<span class="evalnum">{{list.evalnum}}</span>
			{{list.evaltext}}
		</li>
	</ul>
</template>
<script>
	export default {
		props:['list'],
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	ul>li{
		list-style: none;
	}
	.eval-header{
		overflow: hidden;
		width:100%;
	}
	.eval-header .user-score{
		overflow: hidden;
		padding: 10px 0;
		width:100%;
    background: #fff;
	}
	.eval-header .user-score li{
		position:relative;
		float: left;
		text-align: center;
    font-size: 12px;
    color: #666;
		width:50%;
	}
	.eval-header .user-score li .evalnum,
	.eval-header .user-score li .score{
		display: block;
    font-size: 25px;
    font-weight: bold;
    line-height: 36px;
	}
	.eval-header .user-score li .score{
		
		color: #ff5757;
	}
	.eval-header .user-score .user-border::after{
		position:absolute;
		right: 0;
		top:0;
		content:'';
		width:1px;
		height:53px;
		border-right:1px solid #d9d9d9;
	}
	.eval-header .user-score li .evalnum{
		color: #333;
	}
	    
</style>