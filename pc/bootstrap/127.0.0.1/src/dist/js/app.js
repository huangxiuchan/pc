$(document).ready(function () {
// start the main function
  "use strict";



  // nice scrool
//$('body').append('<script src="node_modules/nicescroll/dist/jquery.nicescroll.min.js"></script>')
//$("html , .sidebar").niceScroll(
//  {
//    cursorcolor: "#000" ,
//    cursorborder: "0" ,
//    // cursoropacitymin: 0.4 ,
//    cursoropacitymax: 0.4 ,
//    cursorwidth: "8px" ,
//    mousescrollstep: 40,
//    zindex: 9990
//  }
//);

// load sidebar & navbar
$("#sidebar").load('sidebar.html');

$("#NavBtn").on( 'click' , function () {
  // $(".nav-left , #sidebar").toggle();
  $("#layout").toggleClass("toggled-side");
  $(".nav-left").toggleClass("toggled-side");
  if($(document).width() < 650){
  	$(".nav-right .right").toggleClass("move");
  }

});

$(window).resize(function () {
  if ($(document).width() < 900 ) {
    $("#layout").addClass("toggled-side");
    $(".nav-left").addClass("toggled-side");
    
  } else {
    $("#layout").removeClass("toggled-side");
    $(".nav-left").removeClass("toggled-side");
    
  }
 	
});

	if ($(document).width() < 900) {
	  $("#layout").addClass("toggled-side");
	  $(".nav-left").addClass("toggled-side");
	}

	if ($(document).width() < 375 ) {
		$(".nav-right .right .message").addClass("hide");
		$(".nav-right .right .notifications").addClass("hide");
	}
	


// notification start
var facebook = '<div id="not"><div class="not facebook"><div class="left"><i class="zmdi zmdi-facebook"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';
var twitter = '<div id="not"><div class="not twitter"><div class="left"><i class="zmdi zmdi-twitter"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';
var android = '<div id="not"><div class="not android"><div class="left"><i class="zmdi zmdi-android"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';
var github = '<div id="not"><div class="not github"><div class="left"><i class="zmdi zmdi-github"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';
var apple = '<div id="not"><div class="not apple"><div class="left"><i class="zmdi zmdi-apple"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';
var behance = '<div id="not"><div class="not behance"><div class="left"><i class="zmdi zmdi-behance"></i></div><div class="right"><h1>notification name</h1><p>Lorem ipsum dolor sit amet</p></div></div></div>';

$('#notification1 a.facebook').on('click' , function () {
    $.notifications( {

      // className: 'notify1',
      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: facebook
    });

});
$('#notification1 a.twitter').on('click' ,function () {
    $.notifications( {

      // className: 'notify1',
      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: twitter
    });

});
$('#notification1 a.android').on('click' ,function () {
    $.notifications( {

      // className: 'notify1',
      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: android
    });

});
$('#notification1 a.github').on('click' , function () {
    $.notifications( {

      // className: 'notify1',
      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: github
    });

});
$('#notification1 a.apple').on('click' , function () {
    $.notifications( {

      // className: 'notify1',
      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: apple
    });

});
$('#notification1 a.behance').on('click' , function () {
    $.notifications( {

      alive: 2000,
      fadeIn: 600,
      fadeOut: 800,
      sticky: false,

      tpl: behance
    });

});


// notification end

// start anemation
$('head').append('<link rel="stylesheet" href="src/plug/animate.min.css"> ')
$('.user').on('click' , function (){
  $('.dropdown-menu').addClass('animated flipInY');
})

// start custmizer
//$('body').prepend('<div class="custmizer"></div>'); 	
// logoBg.addClass('invers');
// end the main function
});




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
$("#myinbox .setNormal").on('click',function(){
	
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


