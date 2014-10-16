// JavaScript Document

$(function(){
	//二级页面 侧导航
	$(".right:gt(0)").hide();
	$(".left ul li").eq(0).addClass("libg");
	$(".left ul li").click(function(){
		$(this).addClass("libg").siblings().removeClass("libg");
		var index=$(this).index();
		$(".right").eq(index).show().siblings(".right").hide();
	})
	
	
	//会员  input获得焦点
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
	//二级页面 侧导航
	$(".one:gt(0)").hide();
	$("#smallimg img").eq(0).addClass("border");
	$("#smallimg img").mouseover(function(){
		$(this).addClass("border").siblings().removeClass("border");
		var index=$(this).index();
		$("#bigimg img").eq(index).show().siblings("#bigimg img").hide();
	})

})

