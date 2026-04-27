<?php

// 子テーマ有効化
function theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

// エディタースタイルシート
function my_theme_add_editor_styles() {
	add_editor_style( 'css/custom-editor-style.css' );
}
add_action( 'after_setup_theme', 'my_theme_add_editor_styles' );