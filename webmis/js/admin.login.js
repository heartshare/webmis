$(function(){
	$webmis_root = '/webmis/'		//Webmis根目录
	//加载文件
	$.webmis.inc([
		$webmis_root + 'css/admin.css',		//后台样式
		$webmis_root + 'css/webmis.css',		//插件样式
	]);
	//登录事项
	$('#adminLogin').hover(
		function () {
			$(this).attr('class','an2');
		},
		function () { 
			$(this).attr('class','an1');
		}
	).click(function(){
		var uname = $('#uname').val();
		var passwd = $('#passwd').val();
		if(uname.length < 1 || passwd.length < 1){
			$.webmis.win.open({content:'<b class="red">帐号或密码为空！</b>',AutoClose:3});
			return false;
		}else{
			$.post($base_url+'index_c/login.html',{'uname':uname,'passwd':passwd},function(data){
				if(data == 1){
					$.webmis.win.close('welcome.html');
				}else if(data == 2){
					$.webmis.win.open({content:'<b class="red">该用户已被禁用！</b>',AutoClose:3});
				}else{
					$.webmis.win.open({content:'<b class="red">帐号或密码有误！</b>',AutoClose:3});
				}
			});
		}
	});
});