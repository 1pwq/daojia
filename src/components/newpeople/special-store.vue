<template>
	<li>
		<div class="spec-store">
			<a :href="'/plist/'+store.id+'/'+store.shoptit">
				<p>
					<span class="special-img">
						<span class="spe-span">
							<img :src="store.spestore" alt="" class="spestore">
						</span>
					</span>
					<span class="shop-title">
						<span class="tit-p">{{store.shoptit}}</span>
						<span class="tit-tags">{{store.favourable}}</span>
					</span>
				</p>
				<div class="store-img">
					<img :src="store.storeButton" alt="" class="store-button">
				</div>
			</a>
			<img :src="store.storeimg" alt="" class="store_item_bg">
		</div>
	</li>
</template>
<script>
	export default {
		props:['store'],
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
	.new-content .special-off li{
		float: left;
		overflow: hidden;
		display: block;
		padding-bottom: 20px;
		width:50%;
		background: url(/static/img/newpeople/item_bottom.png) center bottom repeat-x;
    background-size: 100% 20px;
	}
	.new-content .special-off li a{
		position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
		display: block;
		padding:6px;
    text-align: center;
    color:#333;
    width: 100%;
    height:100%;
	}
	.new-content .special-off li a:hover{
		text-decoration: none;
	}
	.new-content .special-off .spec-store{
		position: relative;
		width: 100%;
	}
	.new-content .special-off .special-img{
		display: block;
    margin: 0 auto 7%;    
    margin-bottom: 0;
    padding-top: 13%;
    text-align: center;
		width:100%;
		height: 42%;    
	}
	.new-content .special-img img{
		width: 35%;
    border-radius: 50%;
	}
	.new-content .spec-store .store_item_bg{
		padding: 0 5px;
		width: 100%;
	}
	.new-content .spec-store .shop-title{
		margin-top:33%;
		margin-bottom: 0;
		display: block;
		text-align: center;
		width:100%;
	}
	.new-content .shop-title .tit-p{
		display: block;
    overflow: hidden;
    padding:0 5px;
		text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #6c4303;
    width:100%;
	}
	.new-content .shop-title .tit-tags{
		display: block;
		line-height: 27px;
		font-weight: bold;
		font-size: 16px;
		color:#6c4303;
	}
	.new-content .spec-store .store-img{
		position:absolute;
		left: 0;
		bottom:0;
		width:100%;
		height:18%;
	}
	.new-content .spec-store .store-button{
		width:90%;
	}
</style>