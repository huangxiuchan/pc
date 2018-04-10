//验证表单 显示提示框
var tipsText0="不能为空";
var tipsText1="邮箱或手机号码错误";
var tipsText2="账号或密码错误";
var tipsText3="长度不能小于8";
var tipsText4="长度不能大于16";
var tipsText5="只能输入字母或数字";
var tipsText6="验证码输入错误";
var tipsText7="格式错误";

var w0=5*26;
var w1=7*26;
var w2=6*26;

$(".fgpwBox .fgpw .form-send").css("display","none");
//登录验证
function checkForm(obj){
	var phone=$(obj).parents("form").find('input[name="phone"]').val();
	var password=$(obj).parents("form").find('input[name="password"]').val();
	
  var res_phone=new RegExp(/^1(3|4|5|7|8)\d{9}$/);
  var res_email=new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
  //console.log(phone);
  //不能为空
  if(phone.length==0){
  	var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	$(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
  	
  }else if(!res_phone.test(phone)&&!res_email.test(phone)){ //输入格式不正确
  	var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText1+'</label>';
  	$(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
  }else if(password.length==0){
  	var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	$(obj).parents("form").find('input[name="password"]').parent("div").append(html);
  }
    
}     
 

//获取验证码
function getMa(obj){
	var phone=$(obj).parents("form").find('input[name="phone"]').val();
	var res_phone=new RegExp(/^1(3|4|5|7|8)\d{9}$/);
	var res_email=new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
	
	//不能为空
    if(phone.length==0){
     	var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
  	
    }else if(!res_phone.test(phone)&&!res_email.test(phone)){ //输入格式不正确
  	    var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText1+'</label>';
  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
  	}else{
  		$(".login-page .fgpwBox .part1").removeClass("show");
	    $(".login-page .fgpwBox .part2").addClass("show");
	    
	    
	     $(".fgpwBox .fgpw .form-send.style1").css("display","flex");
	    setTimeout(function(){
	    	 $(".fgpwBox .fgpw .form-send.style1").addClass("show"); //图形验证码宽动画
	    },10)
	   
  	}
    
    
}


//设置新密码发送
function setCheck(obj){
	var newpassword=$(obj).parents("form").find('input[name="newpassword"]').val();
	var yzm_tx=$(obj).parents("form").find('input[name="yzm_tx"]').val();
	
	var res_newpassword=new RegExp(/^[a-zA-Z\d]{8,16}$/);
	var res_txma="tdsl";  //图形验证码
	
	if(newpassword.length<8){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText3+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(newpassword.length>16){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText4+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(!res_newpassword.test(newpassword)){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText5+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(yzm_tx.length==0){
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="yzm_tx"]').parent("div").append(html);
	}else if(yzm_tx!=res_txma){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText6+'</label>';
	    $(obj).parents("form").find('input[name="yzm_tx"]').parent("div").append(html);
	}else{
		
		$(".fgpwBox .form-submit .btn").removeAttr("disabled");
		

		$(".fgpwBox .fgpw .form-send.style1").css("display","none");
		$(".fgpwBox .fgpw .form-send.style1").removeClass("show"); 
		$(".fgpwBox .fgpw .form-send.style2").css("display","flex");
		
	    setTimeout(function(){
	    	
		    $(".fgpwBox .fgpw .form-send.style2").addClass("show"); //验证码宽动画
	    },10)
	    
	}
}

//设置新密码确认
function setOk(obj){
	var newpassword=$(obj).parents("form").find('input[name="newpassword"]').val();
	var yzm_dx=$(obj).parents("form").find('input[name="yzm_dx"]').val();
	
	var res_newpassword=new RegExp(/^[a-zA-Z\d]{8,16}$/);
	
	var res_dxma="1234";  //短信验证码
	
	if(newpassword.length<8){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText3+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(newpassword.length>16){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText4+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(!res_newpassword.test(newpassword)){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText5+'</label>';
  	    $(obj).parents("form").find('input[name="newpassword"]').parent("div").append(html);
	}else if(yzm_dx.length==0){
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="yzm_dx"]').parent("div").append(html);
	}else if(yzm_dx!=res_dxma){
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText6+'</label>';
	    $(obj).parents("form").find('input[name="yzm_dx"]').parent("div").append(html);
	}
	
}


//注册验证
function checkRegister(obj){
	var password=$(obj).parents("form").find('input[name="password"]').val();
	var email=$(obj).parents("form").find('input[name="email"]').val();
	var phone=$(obj).parents("form").find('input[name="phone"]').val();
	var yzm_dx=$(obj).parents("form").find('input[name="yzm_dx"]').val();
    
    
	var res_password=new RegExp(/^[a-zA-Z\d]{8,16}$/); //密码
	var res_email=new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
	var res_phone=new RegExp(/^1(3|4|5|7|8)\d{9}$/);
	
	var res_dxma="1234";  //短信验证码
	
	if(email.length==0){ //邮箱不为空
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="email"]').parent("div").append(html);
	}else if(!res_email.test(email)){  //邮箱格式错误
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText7+'</label>';
  	    $(obj).parents("form").find('input[name="email"]').parent("div").append(html);
  	    
	}else if(password.length==0){  //密码不为空
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="password"]').parent("div").append(html);
	}else if(!res_password.test(password)){  //密码格式错误
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText7+'</label>';
  	    $(obj).parents("form").find('input[name="password"]').parent("div").append(html);
  	    
	}else if(phone.length==0){  //手机不为空
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
	}else if(!res_phone.test(phone)){  //手机格式错误
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText7+'</label>';
  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
  	    
  	}else if(yzm_dx.length==0){  //验证码不为空
		var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	    $(obj).parents("form").find('input[name="yzm_dx"]').parent("div").append(html);
	}else if(yzm_dx!=res_dxma){  //验证码格式错误
		var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText6+'</label>';
  	    $(obj).parents("form").find('input[name="yzm_dx"]').parent("div").append(html);
	}
	    
}


//注册验证，获取验证码
var tx_ma='';
function registerGetma(obj){
   
   if(tx_ma==''){  //之前已获取过图形验证码，不需要再获取，图形验证码5分钟内有效
   	    var phone=$(obj).parents("form").find('input[name="phone"]').val();
		var res_phone=new RegExp(/^1(3|4|5|7|8)\d{9}$/);
		
		//不能为空
	    if(phone.length==0){
	     	var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
	  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
	  	
	    }else if(!res_phone.test(phone)){ //输入格式不正确
	  	    var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText7+'</label>';
	  	    $(obj).parents("form").find('input[name="phone"]').parent("div").append(html);
	  	}else{
	  		
	  		$(obj).parents("form").find(".form-submit .btn").attr("disabled","disabled");
	  		$(obj).parents("form").find(".form-submit .btn").addClass("is-disabled");
		    $("#ex-page .form-send.style2").css("display","none");
		    $("#ex-page .form-send.style2").removeClass("show");
		    $("#ex-page .form-send.style1").css("display","flex");
		    setTimeout(function(){
		    	 $("#ex-page .form-send.style1").addClass("show"); //图形验证码动画
		    },10)
		   
	  	}
   }
   	
}


//注册验证，短信发送
function registerSend(obj){
        
        var yzm_tx=$(obj).parents("form").find('input[name="yzm_tx"]').val();
        tx_ma=yzm_tx;
        if(yzm_tx.length==0){
             var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
  	         $(obj).parents("form").find('input[name="yzm_tx"]').parent("div").append(html);
        }else if(yzm_tx!=tx_ma){
             var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText7+'</label>';
  	         $(obj).parents("form").find('input[name="yzm_tx"]').parent("div").append(html);
        }else{
        
            $(obj).parents("form").find(".form-submit .btn").removeAttr("disabled");
            $(obj).parents("form").find(".form-submit .btn").removeClass("is-disabled");
            
	        $("#ex-page  .form-send.style1").css("display","none");
			$("#ex-page .form-send.style1").removeClass("show"); 
			$("#ex-page .form-send.style2").css("display","flex");
			
		    setTimeout(function(){
		    	
			    $("#ex-page .form-send.style2").addClass("show"); //验证码宽动画
		    },10)
        
        }
        
  		
}

//服务协议勾选

function changeCheck(obj){
   var a=$(obj).is(':checked');
  
   //var item=$(obj).parents("form").find(".form-submit .btn").attr("disabled");
   var b=$(obj).parents("form").find(".form-submit .btn").hasClass("is-disabled");
  //console.log(item);
  if(!b){
     if(!a){
         $(obj).parents("form").find(".form-submit .btn").attr("disabled","disabled");
     }else{
     	$(obj).parents("form").find(".form-submit .btn").removeAttr("disabled");
     }
  }
   
}


//消除提示
$("#ex-page input").on('keyup blur',function(){
	
	$(this).parent("div").find(".error").remove();
})

//关闭所有提示框
function delAllTips(){
	$("label.error").remove();
}


//点击忘记密码
$("#ex-page .fgmm").on('click',function(){
	$(".login-page .wrapper-Bg").addClass("show");
	$(".login-page .fgpwBox .part1").addClass("show");
	
	delAllTips();
})

//关闭
$("#ex-page .fgpwBox .close").on('click',function(){
	$(".login-page .wrapper-Bg").removeClass("show");
	$(".login-page .fgpwBox .part1").removeClass("show");
	$(".login-page .fgpwBox .part2").removeClass("show");
	
	$(".fgpwBox ").find('input[name="phone"]').val('');
	$(".fgpwBox .part2  .form-submit .btn").attr("disabled","disabled");

	$(".fgpwBox .fgpw .form-send").removeClass("show"); //验证码宽动画
	    setTimeout(function(){
	    	
		    $(".fgpwBox .fgpw .form-send").css("display","none"); //验证码宽动画
	    },10)
	
	delAllTips();
})

//返回
$("#ex-page .fgpwBox .back").on('click',function(){
	$(".login-page .fgpwBox .part1").addClass("show");
	$(".login-page .fgpwBox .part2").removeClass("show");
	$(".fgpwBox .part2 .form-submit .btn").attr("disabled","disabled");
	
        $(".fgpwBox .fgpw .form-send").removeClass("show"); //验证码宽动画
	    setTimeout(function(){
	    	
		    $(".fgpwBox .fgpw .form-send").css("display","none"); //验证码宽动画
	    },10)
	
	delAllTips();
})



//点击我要注册
$("#ex-page .register").on('click',function(){
	$(".login-page .inputs").removeClass("show");
	$(".login-page .form-inputs.reg").addClass("show");
	$("#ex-page .form-send.style1").css("display","none");
   
    $(".login-page").find('input[name="email"]').val('');
	$(".login-page").find('input[name="password"]').val('');
	$(".login-page").find('input[name="phone"]').val('');
	$(".login-page").find('input[name="yzm_dx"]').val('');
	
	delAllTips();
})

//点击我要登录
$("#ex-page .login").on('click',function(){
	$(".login-page .inputs").removeClass("show");
	$(".login-page .form-inputs.log").addClass("show");
	
	$(".login-page").find('input[name="phone"]').val('');
	$(".login-page").find('input[name="password"]').val('');
	
	delAllTips();
})
