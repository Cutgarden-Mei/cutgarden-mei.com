<?php get_header(); ?>
	<div class="outer">
	<?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>
		<section id="post-<?php the_ID(); ?>" <?php post_class( 'page-type1' ); ?>>
			<header class="content_header">
				<div class="inner">
					<h2><?php the_title(); ?></h2>
				</div><!-- /inner -->
			</header><!-- /content_header -->
			<div id="mainPost" class="mainPost">
				<div class="inner">
					<?php the_content(); ?>
				</div><!-- /inner -->
			</div><!-- /mainPost -->
		</section><!-- /WP=id&class -->
	<?php endwhile; endif; ?>
	</div><!-- /outer -->
<?php get_footer(); ?>