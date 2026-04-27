<?php 
	$imgset = array(
	'post_type' => 'attachment',
	'post_mime_type' => 'image',
	'post_parent' => $post->ID,
	'numberposts' => '1' 
	);
	$images = get_children( $imgset );
	$image = array_shift( $images );
?>
<div class="excerptLink">
	<a href="<?php the_permalink(); ?>">
	<div class="excerptLink_inner">
			<p class="excerptLink_thumb">
				<?php if ( has_post_thumbnail() ): ?> 
				<?php the_post_thumbnail( 'home_thumb' ); ?>
				<?php elseif ( $image ): ?> 
				<?php echo wp_get_attachment_image( $image->ID, 'home_thumb' ); ?>
				<?php else: ?> 
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/noimage.png" alt="No Image">
				<?php endif; ?> 
			</p><!-- /excerptLink_thumb -->
	</div><!-- /excerptLink_inner -->
	<header class="excerptLink_header">
		<h3><?php the_title(); ?></h3>
		<p class="excerptLink_header_date"><span><?php echo get_the_date(); ?></span></p>
	</header><!-- /excerptLink_header -->
	<div class="excerptLink_cont">
		<?php the_excerpt(); ?><span class="more">More</span>
	</div><!-- /excerptLink_cont -->
	</a>
</div><!-- /excerptLink -->