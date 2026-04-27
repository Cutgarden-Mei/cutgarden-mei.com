<div class="recentNews">
<h2>最新のおしらせ</h2>
<?php query_posts( "category_name=news&showposts=5" );
if( have_posts() ): ?>
<ul>
<?php while( have_posts() ): the_post(); ?>
	<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
<?php endwhile; ?>
</ul>
<?php endif;
wp_reset_query(); ?>
</div>
<div class="recentPosts">
<h2>最新の記事</h2>
<?php query_posts( "category_name=blog&showposts=5" );
if( have_posts() ): ?>
<ul>
<?php while( have_posts() ): the_post(); ?>
	<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
<?php endwhile; ?>
</ul>
<?php endif;
wp_reset_query(); ?>
</div>