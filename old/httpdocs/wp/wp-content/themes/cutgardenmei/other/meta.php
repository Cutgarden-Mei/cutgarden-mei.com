<?php 
	if( is_front_page() ){
	echo 'frontPage';
} elseif( is_page() ){
	echo 'page';
} elseif( is_single() ){
	echo 'single';
} elseif( is_category() ){
	echo 'category';
} elseif( is_tag() ){
	echo 'tags';
} elseif( is_search() ){
	echo 'search';
} elseif( is_date() ){
	echo 'date';
} elseif( is_author() ){
	echo 'author';
} elseif( is_404() ){
	echo 'error';
} elseif( is_archive() ){
	echo 'archive';
} else {
	echo 'index';
}
?>