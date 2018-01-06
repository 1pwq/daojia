<template>
  <li>
  	<a :href="url">
  		<span class="icon" :class="icon"></span>
  		<span>{{text}}</span>
  	</a>
  </li>
</template>
<script>
	export default{
		data:function(){
			return {
				display:true,
			}
		},
		props:['text','icon','url']
	}
</script>
<style>
	.footer-dropup {
		position:fixed;
		right:0;
		bottom:88px;
		z-index:20;
	}
	.footer-dropup .butn{
		padding:5px 10px;
		border-radius: 4px;
		border:none;
		outline: none;
		font-size:20px;
		color:#fff;
		background:rgba(0,0,0,0.7);
	}
	.footer-dropup .dropdown-menu1{
	  position: absolute;
	  bottom: 40px;
	  right: 0;
	  margin: 2px 0 0;
	  text-align: center;
	  font-size: 14px;
	  min-width: 95px;
	  background:rgba(0,0,0,0.7);
	}
	.footer-dropup .dropdown-menu1 li{
		float: none;
		padding:5px 0;
		border-bottom:1px solid #999;
		text-align: center;
	}
	.footer-dropup .dropdown-menu1 li a{
		color:#fff;
	}
	.footer-dropup .dropdown-menu1 li a:hover{
		text-decoration: none;
	}
	.footer-dropup .dropdown-menu1 li .icon{
		float: left;
		padding-top:2px;
		padding-left: 20px;
		font-size:16px;
	}
</style>