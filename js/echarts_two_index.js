window.onload = function(){
	var width = document.documentElement.clientWidth/3.10;
	var height = document.documentElement.clientHeight/3.20;
	$(".main_width").css({'width':width.toFixed(2)});
	$(".main_height").css({'height':height.toFixed(2)});
	$(".content_width").css({'width':width.toFixed(2)});
	$(".content_height").css({'height':height.toFixed(2)});
	$(".oneranks_width").css({'width':width.toFixed(2)});
	var oneranksheight_header = (height/3.10)-35;
	$(".oneranksheight_header").css({'height':oneranksheight_header.toFixed(2)});
	var oneranksheight_container = height/3.10;
	$(".oneranksheight_container").css({'height':oneranksheight_container.toFixed(2)});
	var oneranksheight_container_one = (oneranksheight_container/2)-10;
	$(".oneranksheight_container_one").css({'height':oneranksheight_container_one.toFixed(2)});
	var oneranksheight_footer = (height/3.10)+60;
	$(".oneranksheight_footer").css({'height':oneranksheight_footer.toFixed(2)});
	var eightPie_width = width/4;
	$(".eightPie_width").css({'width':eightPie_width.toFixed(2)});
	var eightPie_height = height/2;
	$(".eightPie_height").css({'height':eightPie_height.toFixed(2)});
	var labelwidth_one = width/3.10;
	$(".labelwidth_one").css({'width':labelwidth_one.toFixed(2)});
	loadecharts();
}
window.onresize=function(){
    var width = document.documentElement.clientWidth/3.10;
	var height = document.documentElement.clientHeight/3.20;
	$(".main_width").css({'width':width.toFixed(2)});
	$(".main_height").css({'height':height.toFixed(2)});
	$(".content_width").css({'width':width.toFixed(2)});
	$(".content_height").css({'height':height.toFixed(2)});
	$(".oneranks_width").css({'width':width.toFixed(2)});
	var oneranksheight_header = (height/3.10)-35;
	$(".oneranksheight_header").css({'height':oneranksheight_header.toFixed(2)});
	var oneranksheight_container = height/3.10;
	$(".oneranksheight_container").css({'height':oneranksheight_container.toFixed(2)});
	var oneranksheight_container_one = (oneranksheight_container/2)-10;
	$(".oneranksheight_container_one").css({'height':oneranksheight_container_one.toFixed(2)});
	var oneranksheight_footer = (height/3.10)+60;
	$(".oneranksheight_footer").css({'height':oneranksheight_footer.toFixed(2)});
	var eightPie_width = width/4;
	$(".eightPie_width").css({'width':eightPie_width.toFixed(2)});
	var eightPie_height = height/2;
	$(".eightPie_height").css({'height':eightPie_height.toFixed(2)});
	var labelwidth_one = width/3.10;
	$(".labelwidth_one").css({'width':labelwidth_one.toFixed(2)});
	loadecharts();
}