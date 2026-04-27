<title><?php
if ( is_home() || is_front_page() ) {
	bloginfo( 'name' );
}elseif ( is_category() ) {
	echo 'Category：'; single_cat_title();
	if ( $paged ) {
		echo ' - ', 'Page'.$paged.'';
	} echo ' | '; bloginfo( 'name' );
}elseif ( is_tag() ) {
	echo 'Tag：'; single_tag_title();
	if ( $paged ) {
		echo ' - ', 'Page'.$paged.'';
	} echo ' | '; bloginfo( 'name' );
}elseif ( is_month() ) {
	echo jp_date_wp_title( $title, $sep, $seplocation );
	if ( $paged ) {
		echo ' - ', 'Page'.$paged.'';
	} echo ' | '; bloginfo( 'name' );
}elseif ( is_search() ) {
	echo the_search_query(),'の検索結果';
	if ( $paged ) {
		echo ' - ', 'Page'.$paged.'';
	} echo ' | '; bloginfo( 'name' );
}elseif ( is_404() ) {
	echo 'Error 404 - Not Found', ' | '; bloginfo( 'name' );
}else {
	wp_title( '', true, 'right' );
	if ( $paged ) {
		echo ' - ', 'Page'.$paged.'';
	} echo ' | '; bloginfo( 'name' );
}
?></title>
<?php if ( !is_search() || !is_archive() ): ?>
<?php if ( $post->my_description ): //meta descriptionの設定 ?>
<meta name="description" content="<?php echo esc_attr( $post->my_description ); ?>">
<?php endif; ?>
<?php if ( $post->my_keywords ): //meta keywordsの設定 ?>
<meta name="keywords" content="<?php echo esc_attr( $post->my_keywords ); ?>">
<?php endif; endif; ?>