<template>
	<div class="ord-footer">
		<ul>
			<li class="ord-more">
				<span>···</span>
				<p>更多</p>
			</li>
			<li class="ord-more ord-del">
				<span class="fa fa-trash-o"></span>
				<p>删除</p>
			</li>
			<li class="ord-eval">
				<span>去评价</span>
				<span>再次购买</span>
			</li>
		</ul>
	</div>
</template>
<script>

</script>
<style>
	.od-footer{
		position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d9d9d9;
    width: 100%;
    height: 45px;
    background: #fff;
	}
	.od-footer .ord-footer ul{
		display: flex;
		overflow: hidden;
		font-size: 12px;
		color:#777777;
		width:100%;
	}
	.od-footer .ord-footer .ord-more{
		position:relative;
		float: left;
		padding-top:7px;
		text-align: center;
		width: 56px;
		height:45px;
	}
	.od-footer .ord-footer .ord-del::before{
		position:absolute;
		left: 0;
		top:9px;
		content:'';
		width:1px;
		height:30px;
		background:#d9d9d9;
	}
	.od-footer .ord-footer .ord-eval{
		flex: 1;
		line-height: 45px;
    float: left;
	}
	.od-footer .ord-footer .ord-eval span{
		display: block;
		float: left;
		border-left: 1px solid #d9d9d9;
		text-align: center;
		width:50%;
	}
</style>