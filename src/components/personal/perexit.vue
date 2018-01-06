<template>
	<button v-show="display" @click="disnone">{{exit}}</button>
</template>
<script>
	import $ from 'jquery';
	export default {
		props:['exit','dis'],
		data:function(){
			return {
				display:true,
			}
		},
		methods:{
			disnone:function(){
				$('.face .login').css('display','block')
				$('.face-tit').css('display','none')
				$('.vip').css('display','none')
				this.display = false;
			},
		}
	}
</script>
<style>

</style>