$(document).ready(function () {
// start the main function
  "use strict";

	//sara 3-28
	
	
	//添加一行
	
	$(".oper-add-btn .btn").on('click',function(){
		var n=$(this).parents(".card-body").find(".form-box .form-row").length;
	
		var html='<div class="form-row row mb-3">'+
										
										'<div class="col-lg-5">'+
											'<div class="row">'+
												'<div class="col-4">'+
													'<input type="text" name="changSize" class="form-control" placeholder="长" onkeyup="delTips()"/>'+
												'</div>'+
												
												'<div class="col-4">'+
													'<input type="text" name="kuanSize" class="form-control" placeholder="宽" onkeyup="delTips()"/>'+
												'</div>'+
												'<div class="col-4">'+
													'<input type="text" name="number" class="form-control" placeholder="数量" onkeyup="delTips()"/>'+
												'</div>'+
											'</div>'+
										'</div>'+
										'<div class="myCheckBox">'+
											'<div class="myChek">'+
									            '<input id="Chek_'+n+'" type="checkbox">'+
									            '<label id="labelChek_'+n+'" for="Chek_'+n+'">'+
									            	'<em></em>'+
									            	'<span>中文</span>'+
									            '</label>'+
									        '</div>'+
								       '</div>'+
								       '<div class="col-lg-5">'+
											'<div class="row">'+
									       	    '<div class="col-4">'+
											        '<select class="form-control" name="category" onchange="delTips()">'+
														'<option value="">选择类别</option>'+
														'<option value="10">10</option>'+
													'</select>'+
												'</div>'+
												 '<div class="col-4">'+
											        '<select class="form-control" name="material" onchange="delTips()">'+
														'<option value="">选择材质</option>'+
														'<option value="10">10</option>'+
													'</select>'+
												'</div>'+
												 '<div class="col-4">'+
											        '<select class="form-control" name="technology" onchange="delTips()">'+
														'<option value="">附加工艺</option>'+
														'<option value="10">10</option>'+
													'</select>'+
												'</div>'+
											'</div>'+
								     '</div>'+
								     
								     '<div class="myDeleteBox" data-id="d_'+n+'">'+
										    '<a class="myDel btn btn-danger" onclick="delList(this)">'+
								            'X'+
								        '</a>'+
							       '</div>'+
									        
									'</div>'
			
			$(this).parents(".card-body").find(".form-box").append(html);
			
			
	 })

      
})



//删除一行
function delList(obj){
	$(obj).parents(".form-row").remove();
}

//验证表单 显示提示框
var tipsText0="请输入尺寸";
var tipsText1="按平方算，请输入数值";
var tipsText2="不能大于200";
var tipsText3="不能小于3";
var tipsText4="填写数据为3~200的数";
var tipsNumber="请输入数量";
var tipsSelect="请选择";
var n=99;

var w0=5*26;
var w1=9*26;
var w2=6*26;
var w3=5*26;
var w4=5*26;
var w5=5*26;

function checkResult(){
	var count=0;
	$(".form-row").each(function(){
		 var changSize=$(this).find('input[name="changSize"]').val();
		 var kuanSize=$(this).find('input[name="kuanSize"]').val();
		 var number=$(this).find('input[name="number"]').val();
		 var sel1=$(this).find('select[name="category"]').val();
		 var sel2=$(this).find('select[name="material"]').val();
		 var sel3=$(this).find('select[name="technology"]').val();
     

     if(changSize==''&&kuanSize==''){  //都为空
     	 var html='<label id="number-error" class="error" style="width:'+w0+'px" for="number">'+tipsText0+'</label>';
     	 $(this).find('input[name="changSize"]').parent("div").append(html);
     	 count++;
     	 return false;
     }
     
     if(!isNaN(changSize)&&changSize!=''){ //是数字类型，且不是空
	     if(changSize>200){
	     	  var html='<label id="number-error" class="error" style="width:'+w2+'px" for="number">'+tipsText2+'</label>';
	     	  $(this).find('input[name="changSize"]').parent("div").append(html);
	     	  count++;
	     	  return false;
	     }
	     
	     if(changSize<3){
	     
	     	  var html='<label id="number-error" class="error" style="width:'+w3+'px" for="number">'+tipsText3+'</label>';
	     	  $(this).find('input[name="changSize"]').parent("div").append(html);
	     	  count++;
	     	  return false;
	     }
     }else if(isNaN(changSize)&&changSize!=''){ //不是数字类型，且不是空
     	    var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText4+'</label>';
	     	  $(this).find('input[name="changSize"]').parent("div").append(html);
	     	  count++;
	     	  return false;
     }
     
     if(!isNaN(kuanSize)&&kuanSize!=''){ //是数字类型，且不是空
     	
     	
      if(kuanSize>200){
     	  var html='<label id="number-error" class="error" style="width:'+w2+'px" for="number">'+tipsText2+'</label>';
     	  $(this).find('input[name="kuanSize"]').parent("div").append(html);
     	  count++;
     	  return false;
     }
     
     if(kuanSize<3){
     	  var html='<label id="number-error" class="error" style="width:'+w3+'px" for="number">'+tipsText3+'</label>';
     	  $(this).find('input[name="kuanSize"]').parent("div").append(html);
     	  count++;
     	  return false;
     }
    }else if(isNaN(kuanSize)&&kuanSize!=''){ //不是数字类型，且不是空
     	    var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText4+'</label>';
	     	  $(this).find('input[name="kuanSize"]').parent("div").append(html);
	     	  count++;
	     	  return false;
    }
     
     if(changSize>99||kuanSize>99){
     	 var html='<label id="number-error" class="error" style="width:'+w1+'px" for="number">'+tipsText1+'</label>';
     	 if(changSize==''){
     	 	  
     	 	  $(this).find('input[name="changSize"]').parent("div").append(html);
     	 	  count++;
     	    return false;
     	 }
     	 
     	 if(kuanSize==''){
     	 	  $(this).find('input[name="kuanSize"]').parent("div").append(html);
     	 	  count++;
     	    return false;
     	 }
     	 
     }
     
     
     //数量
     if(!(number>0)){
     	  var html='<label id="number-error" class="error" style="width:'+w4+'px" for="number">'+tipsNumber+'</label>';
     	  $(this).find('input[name="number"]').parent("div").append(html);
     	  count++;
     	  return false;
     }
     
    //下拉选择

    if(sel1==0){
    	var html='<label id="number-error" class="error" style="width:'+w5+'px" for="number">'+tipsSelect+'</label>';
    	$(this).find('select[name="category"]').parent("div").append(html);
    	count++;
    	return false;
    }
    
    if(sel2==0){
    	var html='<label id="number-error" class="error" style="width:'+w5+'px" for="number">'+tipsSelect+'</label>';
    	$(this).find('select[name="material"]').parent("div").append(html);
    	count++;
    	return false;
    }
    
    if(sel3==0){
    	var html='<label id="number-error" class="error" style="width:'+w5+'px" for="number">'+tipsSelect+'</label>';
    	$(this).find('select[name="technology"]').parent("div").append(html);
    	count++;
    	return false;
    }
    
    
	})

	if(count==0){
		showResult();
	}
	if(count>0){
		return false;
	}
}

//消除提示

function delTips(){
	$("label.error").remove();
}


//计算结果消息框


function showResult(){
	
	var d = new Date();
	var my_hours=d.getHours();
	var my_minutes=d.getMinutes();
	var my_seconds=d.getSeconds();
	
	var result=239; //计算结果
	var bottom=0;
	var n=$(".notBox").length;
	
	if(n>0){
		bottom=bottom+66*n;
	}
	
	var facebook = '<div id="not" class="notBox">'+
                  '<div class="not facebook formResult" style="bottom:'+bottom+'px;">'+
                    '<div class="left" >'+
                      '<i class="zmdi zmdi-close-circle-o"></i>'+
                    '</div>'+
                    '<div class="right">'+
	                    '<h1>计算结果 '+my_hours+':'+my_minutes+':'+my_seconds+'</h1>'+
	                    '<p>总计：'+result+'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>';
	$.notifications( {
        // className: 'notify1',
        alive: 2000,
        fadeIn: 600,
        fadeOut: 800,
        sticky: true,
        tpl: facebook
      });
}
