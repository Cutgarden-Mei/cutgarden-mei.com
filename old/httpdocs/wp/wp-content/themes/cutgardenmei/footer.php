</div><!-- /content -->
</div><!-- /mainContainer -->
<div class="footerMenu_info outer">
	<div class="footerMenu inner">
		<?php dynamic_sidebar( 'footerWidget' ); ?>
	</div><!-- /footerMenu -->
</div><!-- /footerMenu_info -->
<div id="toTop" class="toTop">
	<p><a href="#container"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon/circle-up.png" alt="ページの上へ" width="48" height="48"><span>ページの上へ</span></a></p>
</div><!-- /toTop -->
<footer id="footer" class="footer">
<?php if( has_nav_menu( 'footer-nav' ) ): ?>
<div class="footerNav_info outer">
	<div class="footerNav inner">
		<?php wp_nav_menu( array( 'theme_location' => 'footer-nav', 'items_wrap' => '<ul class="clearfix">%3$s</ul>' ) ); ?>
	</div><!-- /footerNav -->
</div><!-- /footerNav_info -->
<?php endif; ?>
<div class="copyright_info outer">
	<p class="copyright inner">© 2015 CUT GARDEN Mei.</p>
</div><!-- /copyright_info -->
</footer><!-- /footer -->
</div><!-- /container -->
<?php wp_footer(); ?>
</body>
</html>