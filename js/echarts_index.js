//	console.log(screen.width);//屏幕宽度
//	console.log(screen.height);//屏幕高度
//	console.log(screen.availWidth);//屏幕可用宽度
//	console.log(screen.availHeight);//屏幕可用高度
//	console.log(window.outerWidth);//游览器宽度
//	console.log(window.outerHeight);//游览器高度
//	console.log(window.innerWidth);//页面可用宽度
//	console.log(window.innerHeight);//页面可用高度
//	console.log(document.documentElement.clientWidth);//body展示宽度
//	console.log(document.documentElement.clientHeight);//body展示高度
//	console.log(document.documentElement.scrollWidth);
//	console.log(document.documentElement.scrollHeight);

window.onload = function(){
	//index.html宽高
	var width = document.documentElement.clientWidth/3.10;
	var height = document.documentElement.clientHeight/3.20;
	$(".main_width").css({'width':width.toFixed(2)});
	$(".main_height").css({'height':height.toFixed(2)});
	var gundongheight = document.documentElement.clientHeight/3.0;
	$(".gundong_height").css({'height':gundongheight.toFixed(2)});
	$(".content_width").css({'width':width.toFixed(2)});
	$(".content_height").css({'height':height.toFixed(2)});
	$(".ranks_width").css({'width':width.toFixed(2)});
	$(".oneranks_width").css({'width':width.toFixed(2)});
	var oneranksheight_first = (height/3.10)-30;
	$(".oneranks_height_first").css({'height':oneranksheight_first.toFixed(2)});
	var oneranksheight = height/3.10;
	$(".oneranks_height").css({'height':oneranksheight.toFixed(2)});
	var oneranksheight_last = (height/3.10)+30;
	$(".oneranks_height_last").css({'height':oneranksheight_last.toFixed(2)});
	var labelwidth_one = width/3.10;
	var labelwidth_two = labelwidth_one*2;
	$(".labelwidth_one").css({'width':labelwidth_one.toFixed(2)});
	$(".labelwidth_two").css({'width':labelwidth_two.toFixed(2)});
	var labelheight = oneranksheight/3.10;
	$(".labelheight").css({'height':labelheight.toFixed(2)});
	var pie_width = width/4;
	$(".pie_width").css({'width':pie_width.toFixed(2)});
	var pie_height = (height/3.10)+30;
	$(".pie_height").css({'height':pie_height.toFixed(2)});
	var containerpiewidth = width/2.10;
	var containerpieheight = height/2;
	$(".containerpie_width").css({'width':containerpiewidth.toFixed(2)});
	$(".containerpie_height").css({'height':containerpieheight.toFixed(2)});
	loadecharts();
	window.onresize=function(){
	   var width = document.documentElement.clientWidth/3.10;
	   var height = document.documentElement.clientHeight/3.20;
	   $(".main_width").css({'width':width.toFixed(2)});
	   $(".main_height").css({'height':height.toFixed(2)});
	   var gundongheight = document.documentElement.clientHeight/3.0;
	   $(".gundong_height").css({'height':gundongheight.toFixed(2)});
	   $(".content_width").css({'width':width.toFixed(2)});
	   $(".content_height").css({'height':height.toFixed(2)});
	   $(".ranks_width").css({'width':width.toFixed(2)});
	   $(".oneranks_width").css({'width':width.toFixed(2)});
	   var oneranksheight_first = (height/3.10)-30;
	   $(".oneranks_height_first").css({'height':oneranksheight_first.toFixed(2)});
	   var oneranksheight = height/3.10;
	   $(".oneranks_height").css({'height':oneranksheight.toFixed(2)});
	   var oneranksheight_last = (height/3.10)+30;
	   $(".oneranks_height_last").css({'height':oneranksheight_last.toFixed(2)});
	   var labelwidth_one = width/3.10;
	   var labelwidth_two = labelwidth_one*2;
	   $(".labelwidth_one").css({'width':labelwidth_one.toFixed(2)});
	   $(".labelwidth_two").css({'width':labelwidth_two.toFixed(2)});
	   var labelheight = oneranksheight/3.10;
	   $(".labelheight").css({'height':labelheight.toFixed(2)});
	   var pie_width = width/4;
	   $(".pie_width").css({'width':pie_width.toFixed(2)});
	   var pie_height = (height/3.10)+30;
	   $(".pie_height").css({'height':pie_height.toFixed(2)});
	   var containerpiewidth = width/2.10;
	   var containerpieheight = height/2;
	   $(".containerpie_width").css({'width':containerpiewidth.toFixed(2)});
	   $(".containerpie_height").css({'height':containerpieheight.toFixed(2)});
	   loadecharts();
	}
}
