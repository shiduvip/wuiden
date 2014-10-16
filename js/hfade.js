// JavaScript Document
$(function(){
	var adimglen=$("#hfade .ad_listimg ul").find("li").length;
	var nowlan=0;			//从0个开始动画
	var autoadtime=5; 		//自动播放时间3秒
	$("#hfade .ad_listimg ul li").eq(nowlan).show();
	$("#hfade .ad_imgmin").find("span").eq(nowlan).addClass("actminon");
	
	$("#hfade").hover(function(){
		clearInterval(upic);
		$("#hfade .ad_listimg p").show();
	},function(){
		$("#hfade .ad_listimg p").hide();
		nowlan = $("#hfade .ad_imgmin span.actminon").index();
		nowlan = nowlan+1 ==adimglen ?0:nowlan + 1;
		
		fadeimg = function(){
			$("#hfade .ad_listimg ul li").fadeOut("slow");
			$("#hfade .ad_listimg ul li").eq(nowlan).fadeIn("slow");
			$("#hfade .ad_imgmin span").removeClass("actminon");
			$("#hfade .ad_imgmin span").eq(nowlan).addClass("actminon");

			nowlan = nowlan+1 ==adimglen ?0:nowlan + 1;
		}
		upic = setInterval(fadeimg,autoadtime*1000);
	}).trigger("mouseleave");
	
	//prev
	$("#hfade .ad_listimg p.prev").click(function(){
		nowlan = $("#hfade .ad_imgmin span.actminon").index();
		nowlan = nowlan-1 <0 ?adimglen-1:nowlan - 1;
		cfade();
	});
	
	//next
	$("#hfade .ad_listimg p.next").click(function(){
		//nowlan = $("#hfade .ad_listimg ul").children("li:visible").index();
		nowlan = $("#hfade .ad_imgmin span.actminon").index();
		nowlan = nowlan+1 ==adimglen ?0:nowlan + 1;
		cfade();
	});
	
	//selfade
	$("#hfade .ad_imgmin").find("span").mouseenter(function(){
		nowlan = $(this).index();
		$("#hfade .ad_listimg ul li").fadeOut("fast");
		$("#hfade .ad_listimg ul li").eq(nowlan).fadeIn("fast");
		$("#hfade .ad_imgmin span").removeClass("actminon");
		$("#hfade .ad_imgmin span").eq(nowlan).addClass("actminon");
	})
	
	//sel
	cfade = function(){
		if(! $("#hfade .ad_listimg ul li").is(":animated") ){ 
			$("#hfade .ad_listimg ul li").fadeOut("fast");
			$("#hfade .ad_listimg ul li").eq(nowlan).fadeIn("fast");
			$("#hfade .ad_imgmin span").removeClass("actminon");
			$("#hfade .ad_imgmin span").eq(nowlan).addClass("actminon");
		}
	}
})