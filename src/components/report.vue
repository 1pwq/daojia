<template>
	<div>
		<div class="report-header">
			<reportHead/>
		</div>
		<div class="report-content">
			<ul>
				<report-radio :rad="rad" v-for="(rad,index) in report" :key="rad.id" />
			</ul>
			<report-tel/>

			<upimg/>
		</div>
		<div class="report-footer">
			<subreport/>
		</div>
	</div>
</template>
<script>
	import reportHead from '@/components/report/reportHead';
	import reportRradio from '@/components/report/report-radio';
	import upimg from '@/components/report/upimg';
	import reportTel from '@/components/report/report-tel';
	import subreport from '@/components/report/subreport';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				report:[],
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getReport',function(res){
				th.report = th.report.concat(res.data)
			},'json')
		},
		components:{
			'reportHead':reportHead,
			'report-radio':reportRradio,
			'upimg':upimg,
			'report-tel':reportTel,
			'subreport':subreport,
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	.report-content{
		overflow: hidden;
		background:#fff;
	}
	.report-content .desc{
		margin-left: 5px;
		margin-bottom: 0;
		border-bottom: 1px solid #f3f3f3;
		width:100%;
	}
	.report-content .desc textarea{
		border:none;
		outline: none;
		font-size: 13px;
		color:#999;
		width:100%;
		height:100px;
	}
	.report-content .report-tel{
		margin-left: 5px;
		line-height: 45px;
		color:#666;
		width:100%;
		height:45px;
		border-bottom: 1px solid #f3f3f3;
	}
	/*.report-content .report-tel span{

	}*/
	.report-content .report-tel input[type="tel"]{
		margin-left: 15px;
		border:none;
		outline: none;
		line-height: 44px;
	}
</style>