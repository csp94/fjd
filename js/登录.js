$(function(){
	$(".sm").click(function(){
		$(".code").show();
		$(".account").hide();
		$(".sm>a").css({"color":"#e4393c"});
		$(".zh>a").css({"color":"#666"});
	})
	$(".zh").click(function(){
		$(".code").hide();
		$(".account").show();
		$(".zh>a").css({"color":"#e4393c"});
		$(".sm>a").css({"color":"#666"});
	})
	$(".denglu").click(function(){
		var account = $("#account").val();
		var pwd = $("#password").val();
		if(account&&pwd){
			window.location.href="../index.html";
		}
	})
})
