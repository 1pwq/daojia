<template>
	<div>
		<div class="reg-header">
			<h2>
				<span class="fa fa-angle-left" @click="disag"></span>
				京东注册
			</h2>
		</div>
		<div class="reg-content">
			<div class="reg">
				<div class="reg-inp">
					<span class="phone" @click="cxarea">+86 
						<i class="fa fa-caret-down down"></i>
					</span>
					<input type="text" @keyup="valphone" v-model="phone" placeholder="请输入手机号" @focus="discir" @blur="nonecir">
					<span class="fa fa-times-circle circle" @click="disn" v-show="display"></span>
				</div>
				<div class=" reg-btn">
					<span class="valtelphone">{{msgtel}}</span>
					<button @click="btn">
						<img src="/static/img/init.gif" alt="">
						<span>点击完成验证</span>
					</button>
				</div>
			</div>
			<div class="yzsha" v-show="shadow">
				<div class="shadow" @click="shadowno"></div>
				<div class="yz">
					<h4>安全验证 <i class="fa fa-undo"></i></h4>
					<div class="yzimg">
						<img src="/static/img/yz" alt="">
					</div>
					<div class="yzbottom">
						<span>请点击上图中的：</span>
						<img src="/static/img/smallyz" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="regfooter" v-show="secret">
			<div class="shadow"></div>
			<div class="footsha">
				<h2>注册协议及隐私政策</h2>
				<div class="footcon">
					<p>
						在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
						<span>
							请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
						</span>
					</p>
					<a href="http://m.jd.com//help/app/register.html">《京东用户注册协议》</a>
					<a href="">《用户隐私政策》</a>
					<a href="https://in.m.jd.com/help/app/order_sharing_info.html">
						《订单共享与安全》
					</a>
					<p>
						<span>
							【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。
						</span>
						如您对以上协议内容有任何疑问，您可随时与京东客服联系。
					</p>
				</div>
			</div>
			<div class="footposi">
				<p>
					点击同意即表示您已阅读并同意
					<a href="https://m.jd.com//help/app/register.html">《京东用户注册协议》</a>
					与
					<a href="">《京东隐私政策》</a>
					并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于
					<a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
				</p>
				<div class="agree">
					<button class="disagree" @click="disag">不同意</button>
					<button class="agr" @click="disecrt">同意</button>
				</div>
			</div>
		</div>
		<div class="login-footer" v-show="isshow">
			<div class="reg-header">
				<h2>
					<span class="fa fa-angle-left" @click="disarea"></span>
					选择国家或地区
				</h2>
			</div>
			<dl class="area">
				<area-area :zone="zone" v-for="(zone,index) in area" :key="index" />
			</dl>
		</div>
	</div>
</template>
<script>
	import area from '@/components/area/area';
	import $ from 'jquery';
	export default {
		data:function(){
			return {
				display:false,
				shadow:false,
				secret:true,
				isshow:false,
				area:[],
				phone:'',
				msgtel:'',
			}
		},
		components:{
			'area-area':area,
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getarea',function(res){
				th.area = th.area.concat(res.data)
			})
		},
		methods:{
			disn(){
				this.phone = '';
				this.msgtel = '';
			},
			valphone(){
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3-9]))\d{8}$/;
				if (this.phone == '') {
					this.msgtel = '请输入手机号！';
				} else if (!reg.test(this.phone)) {
					this.msgtel = '手机输入错误！'
				} else{
					this.msgtel = '';
				}
			},
			disarea:function(){
				this.isshow = false;
			},
			cxarea:function(){
				this.isshow = true;
			},
			disag:function(){
				window.location.href="/login";
			},
			disecrt:function(){
				this.secret = false;
			},
			shadowno:function(){
				this.shadow = false;
				$('button span').html('点击完成验证')
				$('button img').attr('src','/static/img/init.gif')
			},
			discir:function(){
				this.display = true;
			},
			nonecir:function(){
				this.display = false;
			},
			btn:function(){
				if($('input').val() != ''){
					this.shadow = true;
					$('button span').html('安全检测中')
					$('button img').attr('src','/static/img/loading.gif')
				}
			}
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
		list-style: none;
	}
	.footcon a{
		color:#333;
	}
	.footcon a:hover{
		text-decoration: none;
		color:#333;
	}
	.reg-header{
		border-bottom: 1px solid #bbb;
		width:100%;
		background:#f9f9f9;
	}
	.reg-header h2{
		margin:0;
		padding:0 12px;
		line-height: 45px;
		text-align: center;
		font-size: 17px;
		color:#616161;
	}
	.reg-header h2 span{
		float: left;
		line-height: 45px;
		font-size: 30px;
		color:#999;
	}
	.reg-content{
		padding:15px;
	}
	.reg-content .reg{
		margin-top:15px;
	}
	.reg-content .reg .reg-inp{
		margin-top:15px;
		line-height: 45px;
		height:45px;
		background:#fff;
	}
	.reg-content .reg .reg-btn{
		margin-top:15px;
		background:#fff;
	}
	.reg-content .reg .reg-inp .down{
		color:#ababab;
	}
	.reg-content .reg .reg-inp input{
		border:none;
		outline: none;
	}
	.reg-content .reg .reg-inp .phone{
		padding-left: 20px;
	}
	.reg-content .reg .reg-inp span{
		padding:0 10px 0 5px;
	}
	.reg-content .reg .reg-inp .circle{
		float: right;
		padding:12px 10px;
		font-size: 20px;
		color:#ccc;
	}
	.reg-content .reg .valtelphone{
		display: block;
		margin:10px 0;
		font-size: 12px;
		color:#f23030;
	}
	.reg-content .reg .reg-btn button{
		padding-left: 10px;
		outline: none;
		border:1px solid #409eff;
		line-height: 45px;
		text-align: left;
		color:#409eff;
		width:100%;
		background:#fff;
	}
	.reg-content .reg .reg-btn img{
		margin-top:-2px;
		width:20px;
	}
	.reg-content .shadow{
		position:fixed;
		left: 0;
		top:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.4);
	}
	.reg-content .yz{
		position:fixed;
		left: 10%;
		top:30%;
		border-radius: 5px;
		text-align: center;
		width:80%;
		background:#fff;
	}
	.reg-content .yz h4{
		margin:0;
		padding:5% 3%;
		box-sizing: border-box;
		font-size: 18px;
		color:#333;
	}
	.reg-content .yz h4 i{
		float: right;
	}
	.reg-content .yz .yzimg{
		padding:0 3% 5% 3%;
	}
	.reg-content .yz .yzimg img{
		width:100%;
	}
	.reg-content .yz .yzbottom{
		padding:0 3% 5% 3%;
		line-height: 36px;
	}
	.reg-content .yz .yzbottom span{
		font-size: 15px;
	}
	.shadow{
		position:fixed;
		left: 0;
		top:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.4);
	}
	.regfooter .footsha{
		overflow: hidden;
		position:absolute;
		left: 0;
		bottom:0;
		text-align: center;
		width:100%;
		height:390px;
		background:#f8f8f8;
	}
	.regfooter .footsha h2{
		margin:0;
		padding:5px 10px;
		border-bottom: 1px solid #d7d7d7;
		line-height: 42px;
		font-weight: bold;
		font-size: 18px;
		color:#000;
	}
	.regfooter .footsha .footcon{
		overflow: auto;
		padding:12px 10px 0 10px;
		width:100%;
		height:190px;
		background:#f8f8f8;
	}
	.regfooter .footsha .footcon a{
		display: block;
		margin-bottom: 10px;
		text-align: left;
	}
	.regfooter .footsha .footcon p{
		text-align: left;
		font-size: 13px;
	}
	.regfooter .footsha .footcon p span{
		text-decoration: underline;
		font-weight: bold;
	}
	.regfooter .footposi{
		overflow: hidden;
		position:fixed;
		bottom:0;
		padding:15px 10px;
		width:100%;
		background:#f8f8f8;
	}
	.regfooter .footposi p{
		line-height: 20px;
		font-weight: bold;
		font-size: 13px;
	}
	.regfooter .footposi p a{
		text-decoration: underline;
		color:#E93B3D;
	}
	.regfooter .agree{
		overflow: hidden;
		text-align: center;
	}
	.regfooter .agree button{
		margin-left: 20px;
		border: 1px solid #d7d7d7;
		border-radius: 5px;
		outline: none;
		font-size: 16px;
		color: #000;
		width:40%;
		height:41px;
    background: #fff;
	}
	.regfooter .agree .disagree{
		float: left;
	}
	.regfooter .agree .agr{
		float: right;
		border:1px solid #E93B3D;
		color:#fff;
		background:#E93B3D;
	}
</style>