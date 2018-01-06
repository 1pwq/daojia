<template>
	<div class="home">
		<div class="login-header">
			<h2>
				<span class="fa fa-angle-left" @click="disag"></span>
				京东登录
			</h2>
		</div>
		<div class="login-content">
			<div class="list">
				<ul>
					<li @click="acpwd1">
						<span :class="classAct">账号密码登录</span>
					</li>
					<li @click="acpwd">
						<span :class="classVal">短信验证码登录</span>
					</li>
				</ul>
			</div>
			<div class="form">
				<div class="acpwd" v-show="dis">
					<div class="inp-container">
						<span>账号</span>
						<input type="text" @keyup="valuname" v-model="account" placeholder="用户名/邮箱/已验证手机" @focus="nameblo" @blur="namedis">
						<span class="fa fa-times-circle circle" @click="acname" v-show="name"></span>
					</div>
					<div class="inp-container">
						<span>密码</span>
						<input :type="type" @keyup="valupwd" v-model="psword" placeholder="请输入密码" @focus="pwdblo" @blur="pwddis">
						<span class="fa fa-eye" :class="classcir" @click="xscon"></span>
						<span class="fa fa-times-circle circle" @click="pswd" v-show="pwd"></span>
					</div>
				</div>
				<div class="acpwd" v-show="display">
					<div class="inp-container verco">
						<span @click="bloarea">+86 <i class="fa fa-caret-down"></i></span>
						<input type="text" @keyup="valutel" v-model="telphone" placeholder="请输入手机号" class="inp" @focus="phone" @blur="phonedis">
						<button class="vali" @click="send">
							<span v-if="sendMsgDisabled" class="cxfs">重新发送({{time}}s)</span>
							<span v-if=!sendMsgDisabled class="cxfs">获取验证码</span>
						</button>
						
						<span class="fa fa-times-circle circle" @click="teldis" v-show="tel"></span>
					</div>
					<div class="inp-container">
						<input type="text" v-model="content" placeholder="请输入收到的验证码" @focus="inpdis" @blur="inpblo">
						<span class="fa fa-times-circle circle" @click="cirledis" v-show="inp"></span>
					</div>
				</div>
				<div class="login">
					<p class="valu">{{msgname}}</p>
					<button @click="login">登 录</button>
				</div>
				<div class="login onelogin">
					<button>一键登录</button>
				</div>
				<div class="login-bottom">
					<a href="#" class="findpwd">
						<i class="fa fa-lock"></i>
						<span>忘记密码</span>
					</a>
					<a href="/register" class="findpwd reg">
						<i class="fa fa-mobile-phone"></i>
						<span>手机快速注册</span>
					</a>
				</div>
			</div>
			<div class="bottom">
				<div class="login-way">
					<h4>其他登录方式</h4>
				</div>
				<div class="icon">
					<i class="fa fa-qq qq"></i>
					<i class="fa fa-wechat wx"></i>
				</div>
				<div class="desc">
					<p>登录即代表您已同意<a href="#">京东隐私政策</a></p>
				</div>
			</div>
		</div>
		<div class="login-footer" v-show="disarea">
			<div class="login-header">
				<h2>
					<span class="fa fa-angle-left" @click="disnone"></span>
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
				msgname:'',
				disarea:false,
				sendMsgDisabled:false,
				display:false,
				dis:true,
				inp:false,
				name:false,
				pwd:false,
				tel:false,
				time:60,
				classAct:'list-active',
				classVal:'list-border',
				content:'',
				telphone:'',
				account:'',
				psword:'',
				type:'password',
				classcir:'circle',
				area:[],
			}
		},
		created:function(){
			var th = this;
			$.get('https://easy-mock.com/mock/5a16743ed8031f24f9a7a5e7/daojia/getarea',function(res){
				th.area = th.area.concat(res.data)
			})
		},
		components:{
			'area-area':area,
		},
		methods:{
			valutel(){
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3-9]))\d{8}$/;
				if (this.telphone == '') {
					this.msgname = '请输入手机号！';
				} else if (!reg.test(this.telphone)) {
					this.msgname = '手机输入错误！'
				} else{
					this.msgname = '';
				}
			},
			bloarea:function(){
				this.disarea = true;
			},
			disnone:function(){
				this.disarea = false;
			},
			login:function(){
				if ($('input').val()!='') {
					window.location.href = '/personal'
				}
			},
			send:function(){
				if ($('.inp').val()!='') {
					let th = this;
	        th.sendMsgDisabled = true;
	        let interval = window.setInterval(function() {
	          if ((th.time--) <= 0) {
	            th.time = 60;
	            th.sendMsgDisabled = false;
	            window.clearInterval(interval);
	          }
	        }, 1000);
				}
			},
			xscon:function(){
				if(this.classcir=='circle'){
					this.classcir='eye';
					this.type = 'text';
				}
			},
			pswd:function(){
				this.psword = '';
				this.msgname = '';
			},
			acname:function(){
				this.account = '';
				this.msgname = '';
			},
			cirledis:function(){
				this.content = '';
				this.msgname = '';
			},
			teldis:function(){
				this.telphone = '';
				this.msgname = '';
			},
			disag:function(){
				window.location.href="/register";
			},
			phone:function(){
				this.tel = true;
			},
			phonedis:function(){
				this.tel = false;
			},
			valuname(){
				var reg = /^[a-zA-Z0-9_-]{4,16}$/;
				if (this.account == '') {
					// alert('用户名不能为空')
					this.msgname = '用户名不能为空';
				} else if(!reg.test(this.account)){
					// alert('用户名输入不正确')
					this.msgname = '用户名输入不正确';
				} else{
					this.msgname = '';
				}
			},
			valupwd(){
				var reg = /^[a-zA-Z0-9]{6,20}$/;
				if (this.psword == '') {
					this.msgname = '密码不能为空！';
				} else if(!reg.test(this.psword)){
					this.msgname = '密码输入不正确';
				} else{
					this.msgname = '';
				}
			},
			nameblo:function(){
				this.name = true;
			},
			namedis:function(){
				this.name = false;
			},
			pwdblo:function(){
				this.pwd = true;
			},
			pwddis:function(){
				this.pwd = false;
			},
			inpblo:function(){
				this.inp = false;
			},
			inpdis:function(){
				this.inp = true;
			},
			acpwd:function(){
				this.display = true;
				this.dis = false;
				this.classVal = 'list-active';
				this.classAct = 'list-border';
			},
			acpwd1:function(){
				this.display = false;
				this.dis = true;
				this.classAct = 'list-active';
				this.classVal = 'list-border';
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
	a{
		color:#333;
	}
	a:hover{
		text-decoration: none;
		color:#333;
	}
	.login-content .form .inp-container .eye{
		float: right;
		padding:0 5px;
		font-size: 20px;
		color:#000;
	}
	.valu{
		margin-bottom: 0;
		padding:15px 0;
		font-size: 12px;
		color:#f23030;
	}
	.home{
		background:#fff;
	}
	.list-active{
		border-bottom: 2px solid #f23030;
	}
	.list-border{
		border:none;
	}
	.login-header{
		border-bottom: 1px solid #bbb;
		width:100%;
		background:#f9f9f9;
	}
	.login-header h2{
		margin:0;
		padding:0 12px;
		line-height: 45px;
		text-align: center;
		font-size: 17px;
		color:#616161;
	}
	.login-header h2 span{
		float: left;
		line-height: 45px;
		font-size: 30px;
		color:#999;
	}
	.login-content{
		overflow: hidden;
		width:100%;
	}
	.login-content .list{
		overflow: hidden;
		border-bottom: 1px solid #d7d7d7;
		height:45px;
	}
	.login-content .list ul{
		overflow: hidden;
		padding:0 10px;
	}
	.login-content .list ul li{
		float: left;
		line-height: 45px;
		width:50%;
		text-align: center;
	}
	.login-content .list ul li span{
		padding:12px;
		box-sizing: border-box;
	}
	.login-content .form{
		overflow: hidden;
		padding:0 25px;
	}
	.login-content .form .verco .inp{
		width:30%;
	}
	.login-content .form .verco i{
		color:#ababab;
	}
	.login-content .form .verco .vali{
		display: inline-block;
    border: none;
    outline: none;
    background: #fff;
		float: right;
		padding: 0 0 0 10px;
    border-left: 1px solid #d7d7d7;
		/*color:#848689;*/
	}
	.login-content .form .verco .vali .cxfs{
		padding: 0;
	}
	.login-content .form .inp-container{
		padding:15px 0;
		border-bottom: 1px solid #d7d7d7;
		height:45px;
	}
	.login-content .form .inp-container span{
		padding:0 20px 0 5px;
	}
	.login-content .form .inp-container input{
		width:55%;
		border:none;
		outline: none;
	}
	.login-content .form .inp-container .circle{
		float: right;
		padding:0 5px 0 0;
		font-size: 20px;
		color:#ccc;
	}
	.login-content .form .login{
		/*margin-top:30px;*/
	}
	.login-content .form .login button{
		padding:12px 0;
		border:none;
		outline: none;
		font-size: 14px;
		color:#848689;
		width:100%;
		background:#eee;
	}
	.login-content .form .onelogin{
		margin-top:10px;
	}
	.login-content .form .onelogin button{
		border:1px solid #f23030;
		color:#f23030;
		background:#fff;
	}
	.login-content .form .login-bottom{
		overflow: hidden;
		margin-top:20px;
	}
	.login-content .form .login-bottom .findpwd{
		overflow: hidden;
		float: left;
		display: inline-block;
		line-height: 20px;
		font-size: 12px;
		color:#333;
	}
	.login-content .form .findpwd i{
		float: left;
		padding-right: 7px;
		padding-left: 7px;
		font-size: 19px;
		color:#ccc;
	}
	.login-content .form .findpwd span{
		float: left;
	}
	.login-content .form .login-bottom .reg{
		float: right;
	}
	.login-content .bottom{
		box-sizing: border-box;
    padding: 25px;
    text-align: center;
    margin-top: 80px;
	}
	.login-content .bottom .login-way{
		position: relative;
    border-top: 1px solid #d7d7d7;
	}
	.login-content .bottom .login-way h4{
		position:absolute;
		left: 50%;
		top:-10px;
		margin:0;
		padding: 0 10px;
		transform: translateX(-50%);
		font-weight: bold;
		font-size: 14px;
		color:#bfbfbf;
    background: #fff;
	}
	.login-content .bottom .icon{
		overflow: hidden;
		padding-top:40px;
	}
	.login-content .bottom .icon i{
		display: inline-block;
		font-size: 25px;
	}
	.login-content .bottom .icon .qq{
		padding-right: 60px;
		color:#65e3f1;
	}
	.login-content .bottom .icon .wx{
		color:#8dde6c;
	}
	.login-content .bottom .desc{
		margin-top:25px;
		font-size: 14px;
	}
	.login-content .bottom .desc a{
		text-decoration: underline;
	}
</style>