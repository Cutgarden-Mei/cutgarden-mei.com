<?php

// --------------------------------------------
// wp_headの出力停止項目
// --------------------------------------------

// 管理バー非表示
add_filter( 'show_admin_bar', '__return_false' );
// WordPressのバージョン情報の出力を停止
remove_action( 'wp_head','wp_generator' );
// RSSコメントフィード情報の出力停止
remove_action( 'wp_head', 'feed_links_extra', 3 );
// shortlink（デフォルトurl）の出力停止
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
// prev&nextリンクの出力停止
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head' );

add_action( "init", function(){
    add_filter("comments_open", "__return_false");
    add_filter("pings_open", "__return_false");
} );
// セルフピンバックの停止
function no_self_ping( &$links ){
	$home = get_option( 'home' );
	foreach ( $links as $l => $link )
		if ( 0 === strpos( $link, $home ) )
		unset( $links[$l] );
}
add_action( 'pre_ping', 'no_self_ping' );
// remove X-Pingback header
function remove_x_pingback( $headers ){
	unset( $headers['X-Pingback'] );
	return $headers;
}
add_filter( 'wp_headers', 'remove_x_pingback' );

/*********************************************************************/
// editor-style適用
if ( !function_exists( 'my_theme_add_editor_styles' ) ){
	function my_theme_add_editor_styles(){
		add_editor_style( 'css/editor-style.css' );
	}
}
add_action( 'after_setup_theme', 'my_theme_add_editor_styles' );

/*********************************************************************/
// カスタムメニュー
function register_my_menu(){
	register_nav_menus( array(
		'header-nav'  => 'ヘッダーナビゲーション',
		'sns-nav-btn' => 'SNSボタン',
		'global-nav-home'  => 'グローバルナビゲーション（ホーム）',
		'global-nav' => 'グローバルナビゲーション',
		'footer-nav'  => 'フッターナビゲーション',
	) );
}
add_action( 'after_setup_theme', 'register_my_menu' );

/*********************************************************************/
// カスタムヘッダー
$custom_header_defaults = array(
	'default-image'		=> get_template_directory_uri().'/images/headerimages/default-image.jpg',
	'width'						=> 1056,
	'height'					=> 424,
	'header-text'			=> false,	//ヘッダー画像上にテキストをかぶせる
);
add_theme_support( 'custom-header', $custom_header_defaults );

/*********************************************************************/
// サイドバーウィジェット
function my_widgets_init(){
	register_sidebar( array(
		'name' => 'sideMenu-1',
		'id' => 'sideMenu-1',
		'description'   => 'サイドメニュー【全ページ共通】',
		'before_widget' => '<div class="sideMenuWidget">'."\n",
		'after_widget'  => "</div><!-- /sideMenuWidget -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
	register_sidebar( array(
		'name' => 'sideMenu-2',
		'id' => 'sideMenu-2',
		'description'   => 'サイドメニュー【投稿用】',
		'before_widget' => '<div class="sideMenuWidget2">'."\n",
		'after_widget'  => "</div><!-- /sideMenuWidget -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
	register_sidebar( array(
		'name' => 'sideMenu-3',
		'id' => 'sideMenu-3',
		'description'   => 'サイドメニュー【固定ページ用】',
		'before_widget' => '<div class="sideMenuWidget3">'."\n",
		'after_widget'  => "</div><!-- /sideMenuWidget -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
	register_sidebar( array(
		'name' => 'optionalWidget',
		'id' => 'optionalWidget',
		'description'   => 'その他',
		'before_widget' => '<div class="optionalMenuWidget">'."\n",
		'after_widget'  => "</div><!-- /optionalMenuWidget -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
	register_sidebar( array(
		'name' => 'headerWidget',
		'id' => 'headerWidget',
		'description'   => 'ヘッダーウィジェット',
		'before_widget' => '<div class="headerMenuWidget">'."\n",
		'after_widget'  => "</div><!-- /headerMenuWidget -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
	register_sidebar( array(
		'name' => 'footerWidget',
		'id' => 'footerWidget',
		'description'   => 'フッターウィジェット',
		'before_widget' => '<div class="fmw-outer">'."\n".'<div class="footerMenuWidget">'."\n",
		'after_widget'  => "</div><!-- /footerMenuWidget -->\n</div><!-- /fmw-outer -->\n",
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => "</h3>\n"
	) );
}
add_action( 'widgets_init', 'my_widgets_init' );

/*********************************************************************/
// アイキャッチ画像
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 150, 150, true );
add_image_size( 'eye-cach', 736, 414, true );
add_image_size( 'standard' , 300, 225, true );

/*********************************************************************/
// 概要（抜粋）の省略記号
function my_excerpt_more( $more ){
	return ' …';
}
add_filter( 'excerpt_more', 'my_excerpt_more' );

// 概要（抜粋）の文字数指定
function my_excerpt_mblength( $length ){
	return 60;
}
add_filter( 'excerpt_mblength', 'my_excerpt_mblength' );


/*********************************************************************/
// wp_titleの$sepが空文字または半角スペースの場合は余分な空白削除
function my_title_fix( $title, $sep, $seplocation ){
	if( !$sep || $sep == " " ){
		$title = str_replace( ' '.$sep.' ', $sep, $title );
	}
	return $title;
}
add_filter( 'wp_title', 'my_title_fix', 10, 3 );

/*********************************************************************/
// アーカイブページの年月入れ替え
function jp_date_wp_title( $title, $sep, $seplocation ){
	if( is_date() ) {
		$m = get_query_var( 'm' );
		if( $m ) {
			$year = substr( $m, 0, 4 );
			$month = intval( substr( $m, 4, 2 ) );
			$day = intval( substr( $m, 6, 2 ) );
		} else {
			$year = get_query_var( 'year' );
			$month = get_query_var( 'monthnum' );
			$day = get_query_var( 'day' );
		}
		$title = ( $seplocation != 'right' ? " $sep " : '' ) .
			( $year ? $year . '年' : '' ) .
			( $month ? $month . '月' : '' ) .
			( $day ? $day . '日' : '' ) .
			( $seplocation == 'right' ? " $sep " : '' );
	}
	return $title;
}
add_filter( 'wp_title', 'jp_date_wp_title', 10, 3 );

/*********************************************************************/
// jQuery設定 Google CDN
function load_cdn(){
	if ( !is_admin() ){
		wp_deregister_script( 'jquery' );
		wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', array(), '1.11.1', true );
		global $is_IE;
		if ( $is_IE ){
			$classes[] = 'ie';
			if( preg_match( '/MSIE ([0-9]+ )( [a-zA-Z0-9.]+ )/', $_SERVER['HTTP_USER_AGENT'], $browser_version) )
			$classes[] = 'ie'.$browser_version[1];{
				wp_enqueue_script( 'jquery-mig', '//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js', array(), '1.2.1', true );
			}
		} else $classes[] = 'unknown';
	}
}
add_action( 'init', 'load_cdn' );

// js&css一括読み込み
function add_myscripts(){
	// css
	wp_enqueue_style( 'whitebase_style', get_stylesheet_uri(), array(), null, 'all' );
	// 共通js
	wp_enqueue_script( 'common_js',  get_template_directory_uri().'/js/common.js', array(), false, true );
	// タッチデバイス用js
	if( is_front_page() ){
		wp_enqueue_script( 'frontpage_js',  get_template_directory_uri().'/js/frontpage.js', array(), false, true );
	}
	if( wp_is_mobile() ){
		wp_enqueue_script( 'touchDevices_js',  get_template_directory_uri().'/js/touch_devices.js', array(), false, true );
	}
}
add_action( 'wp_enqueue_scripts', 'add_myscripts' );

// iPhone用jsファイルの読み込み
function load_scripts(){
	global $is_iphone;
	if( $is_iphone ){
		wp_enqueue_script( 'ios-orientationchange-fix', get_template_directory_uri().'/js/ios-orientationchange-fix.js', array(), false, true );
	}
}
add_action( 'init', 'load_scripts' );

/*********************************************************************/
// RSSフィードにアイキャッチ画像を出力する
function rss_post_thumbnail( $content ){
	global $post;
	if( has_post_thumbnail( $post->ID ) ){
		$content = '<div>' . get_the_post_thumbnail( $post->ID ) . '</div>' . $content;
	}
	return $content;
}
add_filter( 'the_excerpt_rss', 'rss_post_thumbnail' );
add_filter( 'the_content_feed', 'rss_post_thumbnail' );

//オリジナル画像にtitle属性を表示
function image_send_alt_title( $html, $id, $caption, $title, $align, $url, $size, $alt = '' ){
	if ( $alt !== '' ){
		return preg_replace( '#<a #', '<a title="' . $alt . '" ', $html, 1 );
	}
	else {
		return $html;
	}
}
add_filter( 'image_send_to_editor', 'image_send_alt_title', 1, 8 );

/*********************************************************************/
// エディターボタン消去
function default_quicktags( $qtInit ){
	//表示するボタンのIDを羅列
  $qtInit['buttons'] = 'Clear,PageInLink,ShopInfo,p_i-b,Table1,Table2,Gallery';
  return $qtInit;
}
add_filter('quicktags_settings', 'default_quicktags', 10, 1);
// エディターボタン追加
function add_my_quicktag() { 
?>
  <script type="text/javascript">
	//QTags.addButton('ID', 'ボタンのラベル', '開始タグ', '終了タグ');
	QTags.addButton('Clear','<p>float解除','<p class="clear">','</p>');
	QTags.addButton('Clear2','<hr>float解除','<hr class="clear ff0">','');
	QTags.addButton('PageInLink','ページ内リンク','<ol id="pageInLink">' + '\n' + '<li><a href="#link-1"></a></li>' + '\n' + '<li><a href="#link-2"></a></li>' + '\n' + '</ol>','');
	QTags.addButton('p_i-b','<p>インラインブロック','<p class="i-b">','</p>');
	QTags.addButton('Table1','テーブル1','<div class="table1">' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt>？</dt>' + '\n' + '<dd>？</dd>' + '\n' + '</dl>' + '\n' + '</div>','');
	QTags.addButton('Table2','テーブル2','<div class="table2">' + '\n' + '<p class="table2_p"></p>' + '\n' + '<dl>' + '\n' + '<dt></dt>' + '\n' + '<dd></dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt></dt>' + '\n' + '<dd></dd>' + '\n' + '</dl>' + '\n' + '<dl>' + '\n' + '<dt></dt>' + '\n' + '<dd></dd>' + '\n' + '</dl>' + '\n' + '</div>','');
	QTags.addButton('Table3','テーブル3','<ul class="table3">' + '\n' + '<li>' + '\n' + '</li>' + '\n' + '<li>'  + '\n' + '</li>' + '\n' + '<li>' + '\n' + '</li>'  + '\n' + '<li>' + '\n' + '</li>' + '\n' + '</ul>' + '\n' + '</div>','');
	QTags.addButton('Gallery','ギャラリー','<div class="galleryPage">' + '\n' + '<ul>' + '\n' + '<li>ここに画像</li>' + '\n' + '<li></li>' + '\n' + '<li></li>' + '\n' + '<li></li>' + '\n' + '<li></li>' + '\n' + '</ul>' + '\n' + '</div>','');
	</script>
<?php
}
add_action( 'admin_print_footer_scripts','add_my_quicktag' );

/*********************************************************************/
// 関数＆変数
// オリジナルクラス付与
/*
function create_custom_meta_classname() {
	require TEMPLATEPATH.'/other/meta.php';
}
$meta_className = create_custom_meta_classname();
*/
/*
// 画像出力設定
function thumbnail_image_set() {
	$imgset = array(
	'post_type' => 'attachment',
	'post_mime_type' => 'image',
	'post_parent' => $post->ID,
	'numberposts' => '1' 
	);
	$images = get_children( $imgset );
	$image = array_shift( $images );
}
$first_set_img = thumbnail_image_set();
*/

/*********************************************************************/
// ダッシュボードカスタマイズ
/*
function register_custom_menu_page() {
	// add_options_page で設定内にカスタムメニューを追加
	add_menu_page('サイト設定', 'サイト設定', 'administrator', 'site_settings', 'create_custom_menu_page');
}
function create_custom_menu_page() {
	// カスタムメニューページを読み込む
	require TEMPLATEPATH.'/admin/site_settings.php';
}
// admin_menu にフック
add_action('admin_menu', 'register_custom_menu_page');
*/

/*********************************************************************/
// WPバージョン消去
function vc_remove_wp_ver_css_js( $src ){
	if ( strpos( $src, 'ver=' . get_bloginfo( 'version' ) ) )
		$src = remove_query_arg( 'ver', $src );
	return $src;
}
add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );

/*********************************************************************/
// 登録済みショートコード一覧
function add_my_box(){
	global $post;
	echo '<p style="margin-bottom: 24px;"><span style="font-size: 18px; font-weight: bold;">【記事の書き方】</span><br>※ 更新画面には、ビジュアルモードとテキストモードがあります。<br>ビジュアルモードは実際の見た目に近く、テキストモードではHTMLタグやCSSなどのコードが挿入できます。<br><span style="font-weight: bold;">※ 「改行」について</span><br>ビジュアルモードでは「shift＋enter」で同じ段落内での改行（<br>）、「enter」で次の段落となり、段落の下部に一定の空白が出来ます。<br><span style="font-size: 18px; font-weight: bold;">【登録済みショートコード一覧】</span><br>[vtr]コンテンツ[/vtr] → Youtubeなどのプレイヤーを、縦横比を保ったまま横幅100％で表示させます。<br>[bq]コンテンツ[/bq] → 引用文。<br>[fc]コンテンツ[/fc] → トップページのコンテンツに複数用いる事で、コンテンツを分割させる事ができます。</p>';
}
function add_my_box_hooks(){
	//add_meta_box('my_box', 'タイトル', 'add_my_box', '投稿タイプ', 'normal', 'high');
	add_meta_box('my_box', 'このページの記事の書き方', 'add_my_box', 'post', 'normal', 'high');
}
function add_my_box_init(){
	add_action('admin_menu', 'add_my_box_hooks');
}
add_action('init', 'add_my_box_init');

/*********************************************************************/
// ShortCode[]の前後の<p></p><br />を取り除く
function shortcode_empty_paragraph_fix( $content ){
	$array = array(
		'<p>[' => '[',
		']</p>' => ']',
		']<br />' => ']'
	);
	$content = strtr( $content, $array );
	return $content;
}
add_filter( 'the_content', 'shortcode_empty_paragraph_fix' );

// ウィジェット内でショートコードを使う
add_filter('widget_text', 'do_shortcode');

// ショートコード
function PlayerWrap( $atts, $content = null ){
	return '<div class="playerWrap">' . $content . '</div>';
}
add_shortcode( 'vtr', 'PlayerWrap' );

function Blockquote( $atts, $content = null ){
	return '<blockquote class="bq clearfix">' . $content . '</blockquote>';
}
add_shortcode( 'bq', 'Blockquote' );

function FreeContent( $atts, $content = null ){
	$content = do_shortcode( shortcode_unautop( $content ) );
	return '<div class="outer"><div class="inner">' . $content . '</div></div>';
}
add_shortcode( 'fc', 'FreeContent' );

function FreeContentInner( $atts, $content = null ){
	$content = do_shortcode( shortcode_unautop( $content ) );
	return '<div class="inner_inner">' . $content . '</div>';
}
add_shortcode( 'fc_i', 'FreeContentInner' );