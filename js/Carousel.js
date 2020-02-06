$(function(){
	item1();
	item2();
	item3();
	item4();
	item5();
	item6();
})
function item1(){
	var n=0;
	var div=$(".item1 ul li");
	var div2=$(".item1 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item1 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item1 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
function item2(){
	var n=0;
	var div=$(".item2 ul li");
	var div2=$(".item2 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item2 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item2 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
function item3(){
	var n=0;
	var div=$(".item3 ul li");
	var div2=$(".item3 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item3 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item3 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
function item4(){
	var n=0;
	var div=$(".item4 ul li");
	var div2=$(".item4 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item4 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item4 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
function item5(){
	var n=0;
	var div=$(".item5 ul li");
	var div2=$(".item5 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item5 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item5 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
function item6(){
	var n=0;
	var div=$(".item6 ul li");
	var div2=$(".item6 ol li");
	var autoplay;
	for(var i=0; i<div.length;i++){
		div.eq(i).css("left",i*100+"%");	
	}
	autoplay=setInterval(function(){auto(1);},3000);
	$('.item6 .btn_left').click(function(){
		clearInterval(autoplay);
		n--;
		auto(0);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	$('.item6 .btn_right').click(function(){
		clearInterval(autoplay);
		auto(1);
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div.mousemove(function(){
		clearInterval(autoplay);
	})
	div.mouseout(function(){
		autoplay=setInterval(function(){auto(1);},3000);
	})
	div2.click(function(){
		clearInterval(autoplay);
		n=$(this).index();
		for(var i=0; i<div.length;i++){
			div.eq(i).animate({
				left:(i-n)*100+"%"
			},500)	
		}
		$(this).addClass("current").siblings().removeClass("current");
		autoplay=setInterval(function(){auto(1);},3000);
	})
  	function auto(e){
		if(e==1){
			if(n<div.length-1&&n>=0){
				n++;
				div.animate({
					left:"-=100%"
				},500)
			}else{
				n=0;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:i*100+"%"
					},500)	
				}
			}
		}
		if(e==0){
			if(n>=0){
				div.animate({
					left:"+=100%"
				},500)
			}else{
				n=div.length-1;
				for(var i=0; i<div.length;i++){
					div.eq(i).animate({
						left:(i-n)*100+"%"
					},500)	
				}
			}
		}
		div2.eq(n).addClass("current").siblings().removeClass("current");
	}
}
