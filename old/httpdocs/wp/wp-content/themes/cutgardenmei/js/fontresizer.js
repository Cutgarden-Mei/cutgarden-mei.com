$(function(){
	//クッキーがあればfontsizeを取得
	var f-s = $.cookie('fontSize');
	if(f-s) {
		if(f-s == 'f-sS'){
			$('html').css('fontSize', '75%');
		} else if(fz == 'fzL'){
			$('html').css('fontSize', '150%');
		}
	}
	//サイズ変更時にクッキーに保存
	$('li').click(function(){
		//idを取得する
		var thisSize = this.id;
		//クッキーに保存
		$.cookie('fontSize', thisSize);
		//クリックしたサイズを反映
		if(thisSize == 'f-sS') {
			$('html').css('font-size', '75%');
		}else if(thisSize == 'f-sM') {
			$('html').css('font-size', '100%');
		}else if(thisSize == 'f-sL') {
			$('html').css('font-size', '150%');
		}
	});
});

/*
<ul>
	<li id="f-sS">小</li>
	<li id="f-sM">中</li>
	<li id="f-sL">大</li>
</ul>
*/