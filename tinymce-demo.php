<?php 
/*
Plugin Name: TinyMCE Demo
Plugin URI: http://example.com/
Description: Demo plugin for various Tinymce related task
Version: 1.0
Author: sadat himel
Author URI: http://example.com/
License: GPLv2 or later
Text Domain: tinymce-demo
Domain Path: /languages
*/

function tinymc_load_textdomain(){
    load_plugin_textdomain('tinymce-demo', plugin_dir_path(__FILE__).'/languages');
}
add_action( 'plugin_loaded',"tinymc_load_textdomain");