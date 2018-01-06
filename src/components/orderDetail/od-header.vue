<template>
	<div class="od-top">
		<div class="od-header-left">
			<i class="fa fa-file-text-o order-icon"></i>
			<div class="od-status">
				<h2>{{$route.params.status}}</h2>
				<span>配送已完成，鼓励一下</span>
				<p>&yen; 鼓励配送员</p>
			</div>
		</div>
		<div class="od-header-right">
			<p class="od-time">{{$route.params.time}}</p>
			<p class="od-rstatus">
				更多状态
				<i class="fa fa-angle-right"></i>
			</p>
		</div>
	</div>
</template>
<script>

</script>
<style>
	.od-header{
		overflow: hidden;
		margin-bottom: 10px;
	}
	.od-header .od-top{
		overflow: hidden;
		padding:20px 10px 0 10px;
		width:100%;
		background:#fff;
	}
	.od-header .od-top .od-header-left{
		overflow: hidden;
		float: left;
	}
	.od-header .od-header-left .order-icon{
		float: left;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    color: #fff;
    width: 25px;
    height: 25px;
    background: #47b34f;
	}
	.od-header .od-header-left .od-status{
		padding-left: 35px;
		font-size: 11px;
		color:#999;
	}
	.od-header .od-status h2{
		margin-top: 0;
		margin-bottom: 11px;
    font-size: 15px;
    color: #3c3c3c;
	}
	.od-header .od-status span{
		display: block;
    margin-bottom: 11px;
		font-size: 11px;
    color: #999999;
	}
	.od-header .od-status p{
		display: inline-block;
		padding: 6px 5px;
    border: 1px solid #fb8217;
    border-radius: 3px;
    font-size: 11px;
    color: #fb8217;
	}
	.od-header .od-top .od-header-right{
		float: right;
	}
	.od-header .od-header-right .od-time{
		font-size: 10px;
    color: #999999;
	}
	.od-header .od-header-right .od-rstatus{
		font-size: 13px;
    color: #47b34f;
	}
</style>