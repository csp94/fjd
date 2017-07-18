$(function(){
	$(".prew-sj").mouseover(function(){
		$(".desc").show();
		$(".bigimg").show();
	})
	$(".prew-sj").mouseleave(function(){
		$(".desc").hide();
		$(".bigimg").hide();
	})
	var desc = $(".prew-sj>.desc").get(0);
	var sj = $(".prew-sj").get(0);
	var big = $(".bigimg").get(0);
	var bigimg = big.children[0];
	sj.onmousemove=function(e){
		var e = event || window.event;
		var x = e.clientX-desc.offsetWidth/2;
		var y = e.clientY-desc.offsetHeight/2;
		if(x<=0){
			x=0;
		}
		if(y<=0){
			y=0;
		}
		if(x>=sj.offsetWidth-desc.offsetWidth){
			x=sj.offsetWidth-desc.offsetWidth;
		}
		if(y>=sj.offsetHeight-desc.offsetHeight){
			y=sj.offsetHeight-desc.offsetHeight;
		}
		desc.style.left=x+"px";
		desc.style.top=y+"px";

		bigimg.style.left=-x*big.offsetWidth/sj.offsetWidth+"px";
		bigimg.style.top=-y*big.offsetHeight/sj.offsetHeight+"px";
	}
	//右边图标
	$("#tab li").mouseover(function(){
		$(this).addClass("red");
		$(this).children("div").stop().animate({"width":75},"slow");
	});
	$("#tab li").mouseleave(function(){
		$(this).removeClass("red");
		$(this).children("div").stop().animate({"width":0},"slow");
	});
	var num=0;
	$(".prev").click(function(){
		num--;
		if(num<0){
			num=0;
		}
		num%=9;
		console.log(num);
		$(".simg").stop().animate({"left":-80*num})
	})
	$(".next").click(function(){
		num++;
		if(num>7){
			num=0;
		}
		num%=9;
		console.log(num)
		$(".simg").stop().animate({"left":-80*num})
	})

	var bigImgs = ["images/big1.jpg","images/big2.jpg","images/big3.jpg",
	"images/big4.jpg","images/big5.jpg","images/big6.jpg","images/big7.jpg",
	"images/big8.jpg","images/big9.jpg"];
	var biggestImgs = ["images/big01.jpg","images/big02.jpg","images/big03.jpg",
	"images/big04.jpg","images/big05.jpg","images/big06.jpg","images/big07.jpg",
	"images/big08.jpg","images/big09.jpg"];
	var commonpath = "../";
	var bigsr = sj.children[0];
	$(".simg li").mouseover(function(){
		bigsr.src=commonpath+biggestImgs[$(this).index()];
		bigimg.src=commonpath+biggestImgs[$(this).index()];
	})


	function select(ele){
		for(var i=1;i<ele.length;i++){
			ele[i].onmouseover=function(){
				for(var j=1;j<ele.length;j++){
					ele[j].className="kind";
				}
				this.className="on";
			}
		}
	}
	var colors = $(".select-color>ul").children();
	select(colors);
	var versions = $(".select-version>ul").children();
	select(versions);
	var methods = $(".select-way>ul").children();
	select(methods);
	var baos = $(".select-bao>ul").children();
	select(baos);
	var fenqis = $(".select-fenqi>ul").children();
	select(fenqis);

	// 人气配件
	var uls = $(".clear-fix").children();
	$(".fit-list li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(uls[$(this).index()]).removeClass("hide").siblings().addClass("hide");
	})

	//手机热销榜
	var tabs = $(".tab-con").children();
	$(".tab-main li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(tabs[$(this).index()]).removeClass("hide").siblings().addClass("hide");
	})

	var selects = $(".select").children();
	$(".tab-selects li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(selects[$(this).index()]).removeClass("hide").siblings().addClass("hide");
	})

	//点击数量变化
	var shuliang = $(".shuliang").get(0);
	var ad = $(".ad").get(0);
	var de = $(".de").get(0);
	var value = shuliang.value;
	console.log(value);
	ad.onclick=function(){
		value++;
		shuliang.value=value;
	}
	de.onclick=function(){
		if(value>0){
			value--;
		}
		shuliang.value=value;
	}
});








