$(function(){
	// 空のspan要素を消す
	$("span:empty").remove();
	
	// 空のp要素を消す
	$("p:empty").remove();
	
	// メニューバー現在ページハイライト
	var url = window.location;
	$('#globalNav a[href="'+url+'"]').addClass('active');
	
	// 外部リンクアイコン
	$('a[href^=http]')
	.not('[href*="'+location.hostname+'"]')
	.attr({target:"_blank"})
	.addClass("newTab")
});

// ヘッダーメニューボタン
$('#menuBtn').click(function(){
	if ($('.togMenu').css('display') == 'none'){
		$('.togMenu').slideDown('fast');
	} else {
		$('.togMenu').slideUp('fast');
	}
});

// ToTop
$(function(){
	$('#toTop').hide();
	$(window).on('scroll', function(){
	  if ($(this).scrollTop() > 100){
			$('#toTop').slideDown('slow');
		} else {
			$('#toTop').slideUp('slow');
		}
		// フッターを固定する
		scrollHeight = $(document).height(); 
		scrollPosition = $(window).height() + $(window).scrollTop(); 
		footHeight = $('footer').innerHeight();
		if ( scrollHeight - scrollPosition  <= footHeight ){        
			$('#toTop').css({"position":"absolute", "bottom": footHeight + 8});
		} else {
			$('#toTop').css({"position":"fixed", "bottom": "8px"});
		}
	});
	// トップへスムーススクロール
	$('#toTop a').click(function () {
		$('body,html').animate({scrollTop: 0}, 'slow','swing');
		return false;
	});
});

// ページ内リンク
$(function(){
	$('#pageInLink a[href^=#]').click(function(){
		var speed = 800;
		var href= $(this).attr('href');
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 16;
		$('html, body').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});