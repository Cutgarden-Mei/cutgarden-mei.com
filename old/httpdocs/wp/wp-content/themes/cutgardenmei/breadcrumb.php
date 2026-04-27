<ul>
	<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" itemprop="url"><span itemprop="title">ホーム</span></a>
	</li>
	<?php
		$categories = get_the_category( $post->ID );
		$cat = $categories[0];
		if( $cat -> parent != 0 ){
			$ancestors = array_reverse( get_ancestors( $cat -> cat_ID, 'category' ) );
			foreach( $ancestors as $ancestor ){ ?>
	<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
		<a href="<?php echo esc_url( get_category_link( $ancestor ) ); ?>" itemprop="url"><span itemprop="title"><?php echo get_cat_name( $ancestor ); ?></span></a>
	</li>
			<?php }
		} ?>
	<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
		<a href="<?php echo esc_url( get_category_link( $cat -> cat_ID ) ); ?>" itemprop="url"><span itemprop="title"><?php echo $cat-> cat_name; ?></span></a>
	</li>
	<li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
		<a class="active" href="<?php the_permalink(); ?>" itemprop="url"><span itemprop="title"><?php the_title(); ?></span></a>
	</li>
</ul>