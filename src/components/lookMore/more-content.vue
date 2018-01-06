<template>
	<li>
		<a :href="'/plist/'+more.id+'/'+more.shoptit">
			<img :src="more.img" alt="">
			<span class="us">
				<span class="us-tit">{{more.title}}</span>
				<span class="us-shop">来自{{more.shoptit}}</span>
				<span class="us-bot">
					<small>&yen;</small> {{more.sprice}}
					<del>&yen; {{more.price}}</del>
				</span>
				<span class="progre">
					<span class="leftpro">已抢购1%</span>
					<span class="oncerob">马上抢</span>
				</span>
			</span>
		</a>
	</li>
</template>
<script>
	export default {
		props:['more'],
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
	.more-content{
		overflow: hidden;
		width:100%;
	}
	.more-content .more-list{
		overflow: hidden;
	}
	.more-content .more-list li{
		overflow: hidden;
		margin-top:10px;
		width:100%;
		background:#fff;
	}
	.more-content .more-list a:hover{
		text-decoration: none;
		color:#333;
	}
	.more-content .more-list a{
		overflow: hidden;
		display: block;
		padding:10px;
		color:#333;
	}
	.more-content .more-list a img{
		float: left;
		margin-right: 10px;
		border:1px solid #e8e8e8;
		width:104px;
		height:104px;
	}
	.more-content .more-list .us{
		overflow: hidden;
		display: block;
	}
	.more-content .more-list .us-tit{
		display: block;
    font-size: 15px;
    color: #333;
	}
	.more-content .more-list .us-shop{
		display: block;
    margin-top: 8px;
    margin-bottom: 5px;
    height: 19px;
    line-height: 19px;
    font-size: 9px;
    color: #999;
	}
	.more-content .more-list .us-bot{
		display: block;
		margin-bottom: 10px;
    font-size: 18px;
    color: #ff5757;
	}
	.more-content .more-list .us-bot small{
		font-size: 13px;
	}
	.more-content .more-list .us-bot del{
		padding-left: 5px;
		font-size: 13px;
		color:#999;
	}
	.more-content .more-list .progre{
		display: block;
	}
	.more-content .progre .leftpro{
		display: inline-block;    
    border: 1px solid #ff5757;
    border-radius: 3px;
    text-align: center;
    font-size: 9px;
    color:#fff;
    height: 16px;
    width: 52%;
    background: #f7b0b0;
	}
	.more-content .progre .oncerob{
		float: right;
		display: inline-block;
		margin-top:-3px;
		border-radius: 3px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color:#fff;
    width: 62px;
    height: 24px;
    background: #ff5757;
	} 
</style>