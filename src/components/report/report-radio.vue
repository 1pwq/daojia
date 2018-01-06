<template>
	<li class="checked" @click="checkRad()">
		{{rad.text}}
	</li>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['rad'],
		methods:{
			checkRad:function(){
				// $('.report-content ul li').css({
				// 	background:'url(/static/img/plist/icon_radio_checked.png) no-repeat 5px 11px',
				// 	backgroundSize:16+'px'
				// })
			},
		},
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
	.report-content{
		overflow: hidden;
		padding-bottom: 150px;
		padding-top:70px;
		padding-left: 10px;
		width:100%;
		background:#fff;
	}
	.report-content ul{
		padding:10px 0;
		border-bottom: 1px solid #f3f3f3;
	}
	.report-content ul li{
		padding-left: 31px;
		line-height: 38px;
		background:url(/static/img/plist/icon_radio_nochecked.png) no-repeat 5px 11px;
		background-size:16px;
	}
	.report-content li input[type="radio"]{
		margin-right: 5px;
	}
</style>