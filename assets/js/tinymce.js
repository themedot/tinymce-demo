;(function(){
    tinyMCE.PluginManager.add('tmcd_plugin',function(editor,url){
        editor.addButton('tmcd_button_one',{
            text:'B1',
            onclick: function(){
                editor.insertContent("Hello world");
            }
        });
    });
})();