<?php get_header(); ?>
	<div class="outer">
	<?php if ( have_posts() ): ?>
		<section id="post-<?php the_ID(); ?>" <?php post_class( 'archivePage' ); ?>>
			<header class="content_header">
				<div class="inner">
					<h2>
						<?php
							if ( is_category() ) : echo 'カテゴリー：'.single_cat_title().'の記事一覧';
							elseif ( is_tag() ) : echo 'タグ：'.single_tag_title().'の記事一覧';
							elseif ( is_month() ) : echo trim( wp_title( '', false ).'の記事一覧' );
							elseif ( is_search() ) : echo '『', the_search_query(),'』の検索結果';
							endif;
						?>
					</h2>
				</div><!-- /inner -->
			</header><!-- /content_header -->
			<?php while ( have_posts() ): the_post(); ?>
			<article class="indexList">
				<a href="<?php the_permalink(); ?>">
					<h3><?php the_title(); ?></h3>
					<p class="indexList_date"><?php echo get_the_date(); ?></p>
				</a>
			</article><!-- /indexList -->
			<?php endwhile; ?>
			<?php if ( $wp_query -> max_num_pages > 1 ) : ?>
				<div class="pager clearfix">
						<p class="alignleft"><?php previous_posts_link( '<span class="new">NEW</span>' ); ?></p>
						<p class="alignright"><?php next_posts_link( '<span class="prev">PREV</span>' ); ?></p>
				</div><!-- /pager -->
			<?php endif; ?>
		</section><!-- /WP=id&class -->
	<?php endif; ?>
	</div><!-- /outer -->
<?php get_footer(); ?>