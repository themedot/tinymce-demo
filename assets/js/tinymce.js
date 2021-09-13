;(function(){
    tinyMCE.PluginManager.add('tmcd_plugin',function(editor,url){
        editor.addButton('tmcd_button_one',{
            text:'B1',
            onclick: function(){
                editor.insertContent("Hello world");
            }
        });
        editor.addButton('tmcd_button_two',{
            type: 'listbox',
            text:'Select something',
            values:[
                {text:'Apple',value:'You have selected <b>Apple</b>'},
                {text:'Orange',value:'You have selected <em>Orange</em>'},
                {text:'Banana',value:'You have selected <u>Banana</u>'},
            ],
            onselect:function(){
                editor.insertContent(this.value());
            },
            onPostRender:function(){
               this.value('You have selected <em>Apple</em>');
            }
        });
    });
})();