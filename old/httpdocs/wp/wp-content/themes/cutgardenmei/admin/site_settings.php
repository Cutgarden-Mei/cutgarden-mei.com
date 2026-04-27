<?php
// add_option
add_option( 'headerdescription' );
add_option( 'copyright' );
add_option( 'twitter_name' );
add_option( 'facebook_name' );
 
// update_option
update_option( 'blogname', $_REQUEST['blogname'] );
update_option( 'headerdescription', $_REQUEST['headerdescription'] );
update_option( 'copyright', $_REQUEST['copyright'] );
update_option( 'twitter_name', $_REQUEST['twitter_name'] );
update_option( 'facebook_name', $_REQUEST['facebook_name'] );
?>
 
<div id="icon-options-general" class="icon32"></div>
<div class="wrap">
	<h1>サイト設定</h1>
<form method="post" action="options.php">
	<table class="form-table">
		<tr valign="top">
			<th scope="row"><label for="blogname">サイトのタイトル</label></th>
			<td><input name="blogname" type="text" value="<?php echo get_option( 'blogname' ); ?>" class="regular-text"></td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="headerdescription">キャッチフレーズ</label></th>
			<td><input name="headerdescription" type="text" value="<?php echo get_option( 'headerdescription' ); ?>" class="regular-text">
			<p class="description">このサイトの簡単な説明（ヘッダー内に表示されますが、「head」内の「meta＝description」には反映されません）</p></td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="copyright">Copyright</label></label></th>
			<td><input name="copyright" type="text" value="<?php echo get_option( 'copyright' ); ?>" class="regular-text">
			<p class="copyright">フッターのCopyright表記（例：© 2015 STUDIO OPT.　※ ©マークとサイト開設年とサイトの名前）</p></td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="twitter_name">Twitterアカウント</label></th>
			<td><input name="twitter_name" type="text" value="<?php echo get_option( 'twitter_name' ); ?>" class="regular-text"></td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="facebook_name">Facebookアカウント</label></label></th>
			<td><input name="facebook_name" type="text" value="<?php echo get_option( 'facebook_name' ); ?>" class="regular-text"></td>
		</tr>
	</table>
	<?php submit_button(); ?>
</form>
</div>