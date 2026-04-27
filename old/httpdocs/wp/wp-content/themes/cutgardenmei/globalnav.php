<?php if( is_front_page() || is_home() ){ ?>
	<ul id="pageInLink">
		<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">ホーム</a></li>
		<li><a href="#title01">ケラチンパーマ</a></li>
		<li><a href="#title02">クリニック縮毛矯正</a></li>
		<li><a href="#title03">リセットカット</a></li>
		<li><a href="#title04">イオントリートメント</a></li>
		<li><a href="#title05">メニュー</a></li>
	</ul><!-- /pageInLink -->
<?php } else{
	wp_nav_menu( array( 'theme_location' => 'global-nav' ) );
}
?>