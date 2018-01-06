<template>
  <div class="swiper-slide">
		<img :src="swpe.img" alt="">
  </div>
</template>
<script>
	import '../../assets/swiper.min.css';
	import Swiper from 'swiper';
	export default {
		props:['swpe'],
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    speed:1000,
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    autoplay:{
		    	delay: 2000,
		    }
		  })        
		},
	}
</script>
<style>
	.swiper-container {
    width: 100%;
	} 
	.swiper-container img{
		width:100%;
	} 
	.swiper-pagination-bullet-active{
		background:#fff;
	}
</style>