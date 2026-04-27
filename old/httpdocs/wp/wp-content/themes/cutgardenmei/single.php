<?php get_header(); ?>
	<div class="content_main__outer">
	<?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>
		<section class="content_main clearfix">
			<header class="content_header">
				<div class="content_header_info clearfix">
					<p class="posted alignleft"><span><?php echo get_the_date( 'y/m/d' ); ?></span></p>
					<p class="author alignright"><span><?php the_author(); ?></span></p>
				</div><!-- /content_header_info -->
				<h2><?php the_title(); ?></h2>
				<div class="content_header_infoLow clearfix">
					<p class="cat alignleft"><span><?php the_category( ' ' ); ?></span></p>
					<p class="tags alignright"><span><?php the_tags( '', ' ' ); ?></span></p>
				</div><!-- /content_header_infoLow -->
			</header><!-- /content_header -->
			<div id="mainPost" class="mainPost">
				<?php the_content(); ?> 
			</div><!-- /mainPost -->
			<?php if( get_previous_post() || get_next_post() ): ?>
			<div class="pager clearfix">
				<p class="alignleft"><?php next_post_link( '%link', '<span class="new">NEW</span>' ); ?></p>
				<p class="alignright"><?php previous_post_link( '%link', '<span class="prev">PREV</span>' ); ?></p>
			</div><!-- /pager -->
			<?php endif; ?> 
		</section><!-- /content_main -->
		<?php endwhile; endif; ?>
	</div><!-- /content_main__outer -->
	<?php get_sidebar(); ?>
<?php get_footer(); ?>