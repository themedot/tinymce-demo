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
        editor.addButton('tmcd_menu',{
            type: 'menubutton',
            text:'Choices',
            
            menu:[
                {
                    text:"Option A",
                    menu:[
                        {
                            text:"Option A - 1",
                            onclick:function(){
                                console.log("Option A - 1")
                            }
                        },
                        {
                            text:"Option A - 2",
                            onclick:function(){
                                console.log("Option A - 2")
                            }
                        },
                        {
                            text:"Option A - 3",
                            onclick:function(){
                                console.log("Option A - 3")
                            }
                        }
                    ]
                },
                {
                    text:"Option B",
                    onclick:function(){
                        console.log('this from a')
                    }
                },
                {
                    text:"Option C",
                    menu:[
                        {
                            text:"Option C - 1",
                            onclick:function(){
                                console.log("Option C - 1")
                            }
                        },
                        {
                            text:"Option C - 2",
                            onclick:function(){
                                console.log("Option C - 2")
                            }
                        },
                        {
                            text:"Option C - 3",
                            onclick:function(){
                                console.log("Option C - 3")
                            }
                        }
                    ]
                },
            ]
        });
    });
})();