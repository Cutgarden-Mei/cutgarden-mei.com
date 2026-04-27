// 文字遅延
$(function(){
	$(window).load(function(){
		/*var delaySpeed = 300;
		var fadeSpeed = 1500;*/
		setTimeout(function(){
			$('#frontInfo span:nth-of-type(n+9)').delay(1500),
			$('#frontInfo span:nth-of-type(n+18)').delay(1500),
			$('#frontInfo span').each(function(i){
				$(this).delay(i*(300)).css({display:'inline',opacity:'0'}).animate({opacity:'1'},1300);
			});
		},1500);
	});
});