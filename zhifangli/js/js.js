// JavaScript Document
$(function(){
	var $top = $("#totop");
		var showHeight=$(window).height();
        $(this).scroll(function(){
            var scrolltop=$(this).scrollTop();   
            if(scrolltop>=showHeight){              
                $top.show();
            }
            else{
                $top.hide();
            }
		 		
        });	
		 $("#totop").click(function(){
			  $("html,body").animate({scrollTop: 0},100); 
			 
	 });
	 
	 
	 
	 $(".sou").focus(function(){
		if($(this).val()==this.defaultValue)
		{
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()=="")
		{
			$(this).val(this.defaultValue); 
		}
	})
})