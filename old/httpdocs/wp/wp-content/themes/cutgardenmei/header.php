<!DOCTYPE html>
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php get_template_part( 'meta', 'element'); ?>
<meta name="format-detection" content="telephone=no">
<link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicon.ico">
<link rel="apple-touch-icon-precomposed" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/webclip.png">
<link rel="alternate" title="<?php bloginfo( 'name' ); ?> &raquo; RSSフィード" href="<?php bloginfo( 'rss2_url' ); ?>" type="application/rss+xml">
<!--[if lt IE 9]> 
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5shiv-printshiv.js" type="text/javascript"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/css3-mediaqueries.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="container" class="container">
<header id="header" class="header">
<div class="outer">
	<div class="inner clearfix">
		<div class="logo">
			<h1 class="siteName"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" alt="カットガーデンMei" title="<?php bloginfo( 'name' ); ?>" rel="home" width="452" height="64"></a></h1><!-- /siteName -->
			<p class="siteDescription">カットガーデンMeiは、大阪市平野区のアットホームな美容室です</p>
		</div><!-- /logo -->
		<div id="menuBtn" class="menuBtn">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon/sp-menu-w.png" width="40" height="40" alt="スマホ用メニューボタン">
		</div><!-- /menuBtn -->
		<div class="contactBtn togMenu">
			<div class="mail">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>/contact/">
					<span>フォームから</span><span>お問い合わせ</span>
				</a>
			</div><!-- /mail -->
			<div class="tel">
				<a href="tel:0667030307"><span>電話でお問い合わせ・予約</span><span>０６−６７０３−０３０７</span></a>
			</div><!-- /tel -->
		</div><!-- /snsBtn -->
	</div><!-- /inner -->
</div><!-- /outer -->
</header><!-- /header -->
<div id="globalNav" class="globalNav togMenu outer">
	<div class="inner">
		<?php get_template_part( 'globalnav' ); ?>
	</div><!-- /inner -->
</div><!-- /globalNav -->
<div class="mainContainer <?php global $template; echo $template_name = basename( $template, '.php'); ?>-cont">
<div class="content clearfix">
<?php if( is_single() ): ?>
<div class="breadCrumb">
	<?php get_template_part( 'breadcrumb' ); ?>
</div><!-- /breadCrumb -->
<?php endif; ?>