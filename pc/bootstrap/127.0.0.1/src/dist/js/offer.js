$(document).ready(function () {
// start the main function
  "use strict";

	//sara 4-11
	
	
$("#content .card .card-body .oper-btn a .bg-2").on('click',function(){

  var index=$(this).parents(".email").index()+1;
  
  
  var html='<div class="modal fade" id="modal'+index+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">'+
						            '<div class="modal-dialog modal-md" role="document">'+
						              '<div class="modal-content">'+
						                '<div class="modal-body">'+
						                  '<i class="zmdi zmdi-modal zmdi-notifications"></i>'+
						                  '<p>是否要删除此记录？</p>'+
						                  '<a href="#" class="btn btn-secondary" data-dismiss="modal">删除</a>'+
						                  '<a href="#" class="btn btn-primary" data-dismiss="modal">取消</a>'+
						                '</div>'+
						              '</div>'+
						            '</div>'+
						          '</div>'
  
  
	$(this).parents(".card-body").append(html);					          
})


//设置取消默认
$("#myinbox .oper-btn a").on('click',function(){
	
	var class0=$(this).attr("class");
	var html0='<i class="bg-4">取消默认</i>';
	var html1='<i class="bg-3">设为默认</i>';
  if(class0=='setNormal'){
  	var id_str=$(this).parents(".email").attr("id");
		var s1=id_str.slice(0,1);
		var obj=$('#myinbox .email[id^="'+s1+'"]')
		
		obj.removeClass("selected");
		$(this).parents(".email").addClass("selected");
		
		
		obj.find(".beNormal").html(html1).attr("class","setNormal");
		$(this).parents(".email").find(".setNormal").html(html0).attr("class","beNormal");
  }else if(class0=='beNormal'){
  	$(this).parents(".email").removeClass("selected");
	  $(this).parents(".email").find(".beNormal").html(html1).attr("class","setNormal");
  	
  }
	
	
})


///////////
})