<template>
	<li>
		<a :href="'/plist/'+spec.id+'/'+spec.shoptit">
			<p class="special-posi">
				<i class="goog-hot"></i>
				<img :src="spec.img1" alt="">
				<span class="shop-tit">{{spec.shoptit}}</span>
			</p>
			<p class="spe-title">
				{{spec.spetit}}
			</p>
			<p class="spe-price">
				<span class="spe-price-left">
					<b class="sprice">&yen;{{spec.sprice}}</b>
					<span class="price">&yen;<b>{{spec.price}}</b></span>
				</span>
				<img :src="spec.robimg" alt="">
			</p>
		</a>
	</li>
</template>
<script>
	export default {
		props:['spec'],
	}
</script>
<style>
	.new-content .special-offers li{
		overflow: hidden;
		float: left;
		padding-bottom: 20px;
		width: 50%;
    background: url(/static/img/newpeople/item_bottom.png) center bottom repeat-x;
    background-size: 100% 20px;    
	}
	.new-content .special-offers a{
		display: block;
		margin: 0 5px;
		padding:6px;
		border-radius: 5px;
		color:#333;
		background:#fff;
	}
	.new-content .special-offers a:hover{
		text-decoration: none;
	}
	.new-content .special-posi{
		position:relative;
	}
	.new-content .special-posi .goog-hot{
		position:absolute;
		left: -2px;
		top:-7px;
		display: block;
		width:36px;
		height:40px;
		background:url(/static/img/newpeople/qiang.png) 0 0 no-repeat;
		background-size: 100% auto;
	}
	.new-content .special-offers .special-posi img{
		width:100%;
	}
	.new-content .special-posi .shop-tit{
		position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: block;
    padding: 0 5px;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    line-height: 16px;
		text-overflow: ellipsis;
    white-space: nowrap;  
    font-size: 10px;
    color: #fff;
    width: 100%;
    background: rgba(252,0,95,0.6);   
	}
	.new-content .special-offers .spe-title{
		overflow: hidden; 
		margin-bottom: 2px;
		word-break: break-all; /*允许在单词内换行。*/
    text-overflow: ellipsis;	/*显示省略符号来代表被修剪的文本。*/
    display: -webkit-box;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 2; 
    font-size: 12px;
		color:#333;
	}
	.new-content .special-offers .spe-price{
		margin-top: 10px;
		margin-bottom: 0;
    height: 34px;
	}
	.new-content .spe-price .sprice {
		display: block;
    font-size: 20px;
    color: rgba(252,1,109,1);
    line-height: 16px;
    letter-spacing: 2px;
	}
	.new-content .spe-price .price{		
    color: #999;
	}
	.new-content .spe-price .price b{
		font-size: 10px;
		letter-spacing: 1px;
		text-decoration: line-through;
	}
	.new-content .special-offers .spe-price img{
		float: right;
    margin-top: -16px;
		width: 33px;
	}	     
</style>