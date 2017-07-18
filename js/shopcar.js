	window.onload = function(){
			function $(id){
				return document.getElementById(id);
			}
			//打勾时计算总共多少钱
			function sumM(){
				var sum = 0;
				if ($("ci1").checked) {sum += parseInt($("p1").innerHTML)}
				if ($("ci2").checked) {sum += parseInt($("p2").innerHTML)}
				if ($("ci3").checked) {sum += parseInt($("p3").innerHTML)}
				return sum;
			}
			//打勾是计算总共几件商品
			function sumC(){
				var tNum = 0;
				if ($("ci1").checked) {tNum += parseInt($("count1").value)}
				if ($("ci2").checked) {tNum += parseInt($("count2").value)}
				if ($("ci3").checked) {tNum += parseInt($("count3").value)}
				return tNum;
			}
			//全选与背景
			var isCheck = false;
			$("check-all1").onclick = function(){
				isCheck = !isCheck;
				$("ci1").checked = isCheck;
				$("ci2").checked = isCheck;
				$("ci3").checked = isCheck; 
				$("shop-all").checked = isCheck; 
				$("check-all2").checked = isCheck; 
				bg1();bg2();bg3();
				$("s2").innerHTML = sumM();
				$("s3").innerHTML = sumC();
			}
			$("check-all2").onclick = function(){
				isCheck = !isCheck;
				$("ci1").checked = isCheck;
				$("ci2").checked = isCheck;
				$("ci3").checked = isCheck; 
				$("shop-all").checked = isCheck; 
				$("check-all1").checked = isCheck; 
				bg1();bg2();bg3();
				$("s2").innerHTML = sumM();
				$("s3").innerHTML = sumC();
			}
			$("ci1").onclick = function(){
				if ($("ci1").checked) {
					$("good-box1").style.backgroundColor = "#fff4e8";
			 		$("s2").innerHTML = sumM();
			 		$("s3").innerHTML = sumC();
			 	}else{
			 		$("good-box1").style.backgroundColor = "#fff";
			 		$("s2").innerHTML = sumM();
			 		$("s3").innerHTML = sumC();
			 	}

			}
			$("ci2").onclick = function(){
				if ($("ci2").checked) {
					$("good-box2").style.backgroundColor = "#fff4e8";
					$("s2").innerHTML = sumM();
					$("s3").innerHTML = sumC();
			 	}else{
			 		$("good-box2").style.backgroundColor = "#fff";
			 		$("s2").innerHTML = sumM();
			 		$("s3").innerHTML = sumC();
			 	}
			}
			$("ci3").onclick = function(){
				if ($("ci3").checked) {
					$("good-box3").style.backgroundColor = "#fff4e8";
					$("s2").innerHTML = sumM();
					$("s3").innerHTML = sumC();
			 	}else{
			 		$("good-box3").style.backgroundColor = "#fff";
			 		$("s2").innerHTML = sumM();
			 		$("s3").innerHTML = sumC();
			 	}
			}
			function bg1(){
				if ($("ci1").checked) {
					$("good-box1").style.backgroundColor = "#fff4e8";
				}else{
					$("good-box1").style.backgroundColor = "#fff";
				}
			}
			function bg2(){
				if ($("ci2").checked) {
					$("good-box2").style.backgroundColor = "#fff4e8";
				}else{
					$("good-box2").style.backgroundColor = "#fff";
				}
			}
			function bg3(){
				if ($("ci3").checked) {
					$("good-box3").style.backgroundColor = "#fff4e8";
				}else{
					$("good-box3").style.backgroundColor = "#fff";
				}
			}
			//数量与价格
			$("add1").onclick = function(){
				
				var num = parseInt($("count1").value);
				$("count1").value = num+1;
				var money = parseInt($("p1").innerHTML);
				$("s11").innerHTML = $("count1").value*money;
			}
			$("add2").onclick = function(){
				var num = parseInt($("count2").value);
				$("count2").value = num+1;
				var money = parseInt($("p2").innerHTML);
				$("s12").innerHTML = $("count2").value*money;
			}
			$("add3").onclick = function(){
				var num = parseInt($("count3").value);
				$("count3").value = num+1;
				var money = parseInt($("p3").innerHTML);
				$("s13").innerHTML = $("count3").value*money;
			}
			$("sub1").onclick = function(){
				var num = parseInt($("count1").value);
				$("count1").value = num-1;
				var money = parseInt($("p1").innerHTML);
				$("s11").innerHTML = $("count1").value*money;
			}
			$("sub2").onclick = function(){
				var num = parseInt($("count2").value);
				$("count2").value = num-1;
				var money = parseInt($("p2").innerHTML);
				$("s12").innerHTML = $("count2").value*money;
			}
			$("sub3").onclick = function(){
				var num = parseInt($("count3").value);
				$("count3").value = num-1;
				var money = parseInt($("p3").innerHTML);
				$("s13").innerHTML = $("count3").value*money;
			}
			// 猜你喜欢
			var img = $("gu-list").getElementsByTagName("img");
			var title = $("gu-list").getElementsByTagName("p");
			var picSrc = ["../images/jbig1.jpg","../images/jbig2.jpg","../images/jbig3.jpg","../images/jbig4.jpg"]	
			var desc = ["戴尔DELL灵越游匣15PR-2648B 15.6英寸游戏笔记本电脑(i5-6300HQ 4G","Apple iPhone 7 Plus 256G 红色特别版 移动联通电信4G手机","尼康（Nikon）D7100 单反套机（ AF-S 18-140mmf/3.5-5.6G ED VR 镜头）","佳能（Canon）EOS 77D 单反机身"]
			for (var i = 0; i < img.length ; i++) {
				var pi = img[i];
				var picS = picSrc[i];
				pi.src = picS;
				var tit = title[i];
				var des = desc[i];
				tit.innerHTML = des;
			}
			var lis = $("gu-list").getElementsByTagName("li");
			lis.onmouseover = function(){
				lis.style.border = "1px solid #e4393c";
			}
		}