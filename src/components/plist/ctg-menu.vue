<template>
	<li class="ctgMenu1">
		<span @click="toggle">{{ctgMenu.text}}</span>
		<ul v-show="display">
			<li v-for="(ctg,index) in ctgMenu.children" :key="ctg.id">
				<a :href="'#'+ctg.id">{{ctg.text}}</a>
			</li>
		</ul>
	</li>
</template>
<script>
	export default{
		data:function(){
			return {
				display:false
			}
		},
		props:['ctgMenu'],
		methods:{
			toggle:function(){
				this.display = !this.display;
			}
		}
	}
</script>
<style>
	.ctgMenu1{
		/*padding-right: 10px;*/
	}
	.ctgMenu1 span{
		display: block;
		padding:15px 5px;
		border-bottom:1px solid #ddd;
		border-right:1px solid #ddd;
		text-align: center;
		font-size:13px;
		color:#666;
		background:#f4f4f4;
	}
	.ctgMenu1:hover span{
		color:#47b34f;
	}
	.ctgMenu1 span:hover{
		padding-left: 2px;
		border-left: 3px solid #47b34f;
		/*color:#47b34f;*/
		background:#fff;
	}
	.ctgMenu1 li{
		padding:15px 5px;
		text-align: center;
		color:#666;
		border-bottom:1px dotted #ddd;
		border-right:1px solid #ddd;
		background:#fff;
	}
	.ctgMenu1 li:hover{
		padding-left: 1px;
		border-left: 3px solid #47b34f;
		border-right: none;
	}
	.ctgMenu1 li:hover a{
		color:#47b34f;
	}
	.ctgMenu1 a{
		color:#666;
	}
	.ctgMenu1 a:hover{
		text-decoration: none;
	}
</style>