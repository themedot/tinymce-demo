<?php 
/*
Plugin Name: TinyMCE Demo
Plugin URI: http://example.com/
Description: Demo plugin for various Tinymce related task
Version: 1.1
Author: sadat himel
Author URI: http://example.com/
License: GPLv2 or later
Text Domain: tinymce-demo
Domain Path: /languages
*/

// function tinymc_load_textdomain(){
//     load_plugin_textdomain('tinymce-demo', plugin_dir_path(__FILE__).'/languages');
// }
// add_action( 'plugin_loaded',"tinymc_load_textdomain");

function tmcd_mce_external_plugins($plugins){

    $plugins['tmcd_plugin'] = plugin_dir_url(__FILE__).'assets/js/tinymce.js';
    return $plugins;
}

function tmcd_mce_buttons($buttons){
    $buttons[] = 'tmcd_button_one';
    $buttons[] = 'tmcd_button_two';
    $buttons[] = 'tmcd_menu';
    return $buttons;
}

function tmcd_admin_assets(){
    add_filter( 'mce_external_plugins','tmcd_mce_external_plugins' );
    add_filter( 'mce_buttons', 'tmcd_mce_buttons'  );
}
add_action( 'admin_init','tmcd_admin_assets');