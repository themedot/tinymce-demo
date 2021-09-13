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

        editor.addButton('tmcd_form_button',{
            text:'Form',
            onclick:function(){
                editor.windowManager.open({
                    title:"User Input Form",
                    body:[
                        {
                            type:'textbox',
                            name: 'userinput1',
                            label: 'Some text',
                            value: 'hello'
                        },
                        {
                            type:'colorpicker',
                            name: 'userinput2',
                            label: 'Color',
                            value: '#222222'
                        },
                        {
                            type:'listbox',
                            name: 'userinput3',
                            label: 'Options',
                            values: [
                                {text:'Option 1', value :1},
                                {text:'Option 2', value :2},
                                {text:'Option 3', value :3},
                            ]
                        }
                    ],
                    onsubmit:function(e){
                        console.log(e.data.userinput1);
                        console.log(e.data.userinput2);
                        editor.insertContent("Text = "+e.data.userinput1 + "Color = "+e.data.userinput2);
                    }
                })
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