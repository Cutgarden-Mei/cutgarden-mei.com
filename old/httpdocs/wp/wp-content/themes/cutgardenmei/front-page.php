<?php
/*
Template Name: front-page
*/
?>
<?php get_header(); ?>
	<div class="headerImage">
		<div class="inner">
			<img src="<?php header_image(); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="カットガーデンMeiイメージ画像">
			<p id="frontInfo" class="frontInfo"><span>あ</span><span>な</span><span>た</span><span>の</span><span>髪</span><span>の</span><span>悩</span><span>み</span><br><span class="frontInfo_low">お</span><span>ま</span><span>か</span><span>せ</span><span>く</span><span>だ</span><span>さ</span><span>い</span><span>！</span></p>
		</div><!-- /inner -->
	</div><!-- /headerImage -->
	<div class="outer">
		<div class="frontInfoLow">
			<div class="inner">
				<div class="searchBox">
					<?php get_template_part( 'searchform' ); ?>
				</div><!-- searchbox -->
					<div class="recentBox clearfix">
						<?php get_template_part( 'recent' ); ?>
					</div><!-- /recentBox -->
			</div><!-- inner -->
		</div><!-- /frontInfoLow -->
	</div><!-- /outer -->
	<?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php the_content(); ?>
	</div><!-- /WP=id&class -->
	<?php endwhile; endif; ?>
<?php get_footer(); ?>