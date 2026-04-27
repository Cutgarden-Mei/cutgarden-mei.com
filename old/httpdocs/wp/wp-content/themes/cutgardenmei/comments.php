<section class="commentsArea">
	<?php if( have_comments() ): ?>
	<h3 id="comments" class="commentsArea_title">Comment</h3>
	<ol class="commentsArea_list">
		<?php wp_list_comments( 'avatar_size=40' ); ?>
	</ol><!-- /commentsArea_list -->
	<?php endif; ?>
	<?php
		$commenter = wp_get_current_commenter();
		$req = get_option( 'require_name_email' );
		$aria_req = ( $req ? " aria-required='true'" : '' );
		$args = array(
			'title_reply' => 'Leave a Reply',
			'label_author'  => 'Name',
			'email'  => 'Mail',
			'url'  => 'Website',
			'label_submit' => 'Submit Comment'
		);
	  comment_form( $args );
?>
</section><!-- /commentsArea -->