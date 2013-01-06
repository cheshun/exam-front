Ext.define("Exam.view.common.TopicTypeList", {
    extend: "Ext.toolbar.Toolbar",
    xtype: "cmntopictypelist",
    dock: 'top',
    defaults:{
        labelAlign:'right',
        labelWidth:"auto",
        style:"margin-left:12px",                 
        editable:false
    },
    requires: ["Ext.toolbar.Toolbar", "Ext.form.field.ComboBox"],
    initComponent: function() {
        var me = this;
        var defaultField={id:-1,name:'┈┈请选择┈┈'};
        var topicTypeStore = Ext.create('Ext.data.Store', {
            fields:["id","name",'order'],
            proxy: {
                 type: 'ajax',
                 url: 'testdata/TopicType.json',
                 reader: {
                     type: 'json',
                     root: 'data'
                 }
             },
             autoLoad: true,
             listeners:{
                load:function( store,   records,   successful,   eOpts ){
                    store.sort('order', 'ASC');
                    store.insert(0,defaultField);
                   
                    //myStore.sort('order', 'DESC');
                }
             }
        });
        var courseSelectionStore = Ext.create('Ext.data.Store', {
            fields:["id","name"],
            proxy: {
                 type: 'ajax',
                 url: 'testdata/Courses.json',
                 reader: {
                     type: 'json',
                     root: 'data'
                 }
             },
             autoLoad: true,
             listeners:{
                load:function( store,   records,   successful,   eOpts ){
                    store.insert(0,defaultField);
                }
            }
        });
        var kpointStore = Ext.create('Ext.data.Store', {
            fields:["id","name"],
            proxy: {
                 type: 'ajax',
                 url: 'testdata/GradeSelections.json',
                 reader: {
                     type: 'json',
                     root: 'data'
                 }
             },
             autoLoad: true,
             listeners:{
                load:function( store,   records,   successful,   eOpts ){
                    store.insert(0,defaultField);
                }
            }
        });
        var difficultyStore = Ext.create('Ext.data.Store', {
            fields:["value","desc"],
            proxy: {
                 type: 'ajax',
                 url: 'testdata/Difficulty.json',
                 reader: {
                     type: 'json',
                     root: 'data'
                 }
             },
             autoLoad: true,
             listeners:{
                load:function( store,   records,   successful,   eOpts ){
                    store.insert(0,defaultField);
                }
            }
        });
        Ext.apply(this, {            
            items: [{
                xtype: 'combobox',
                fieldLabel: '题型',
                name:'type',
                displayField: 'name',
                valueField: 'id',
                store: topicTypeStore,
                listeners:{
                    render:function( field,   eOpts ){
                        field.setValue(-1);
                    },
                    change:function( field,   newValue,   oldValue,   eOpts ){
                        var fieldId=newValue,
                        nextField=field.nextSibling("combobox");
                        if(fieldId==-1){
                            nextField.setValue(-1);
                            return;
                        }                                                    
                        var nextStore=nextField.getStore( );
                        nextStore.reload({id:fieldId});
                    }
                }
            },{
                xtype: 'combobox',
                fieldLabel: '课程名',
                name:'course',
                displayField: 'name',
                valueField: 'id',
                store: courseSelectionStore,
                listeners:{
                    render:function( field,   eOpts ){
                        field.setValue(-1);
                    },
                    change:function( field,   newValue,   oldValue,   eOpts ){
                        var fieldId=newValue,
                        nextField=field.nextSibling("combobox");
                        if(fieldId==-1){
                            nextField.setValue(-1);
                            return;
                        }                                                    
                        var nextStore=nextField.getStore( );
                        nextStore.reload({id:fieldId});
                    }
                }
            },{
                xtype: 'combobox',
                fieldLabel: '知识点',
                name:'kpoint',
                displayField: 'name',
                valueField: 'id',
                store: kpointStore,
                listeners:{
                    render:function( field,   eOpts ){
                        field.setValue(-1);
                    },
                    change:function( field,   newValue,   oldValue,   eOpts ){
                         
                    }
                }
            },{
                xtype: 'combobox',
                fieldLabel: '等级',
                name:'difficulty',
                displayField: 'desc',
                valueField: 'value',
                store: difficultyStore,
                listeners:{
                    render:function( field,   eOpts ){
                        field.setValue(-1);
                    },
                    change:function( field,   newValue,   oldValue,   eOpts ){
                         
                    }
                }
            },{
                xtype:'textfield',
                emptyText:'搜索关键词'
            },{
                xtype:'button',
                text:'搜索',
                //scale:'medium',
                style:'border:1px solid #A1A1A1',
                icon:'static/img/search.png',
                iconAlign:'right',
                listeners:{
                    click:function( button, event ,  eOpts ){
                        var comboFieldList= button.ownerCt.query("combobox"),
                        clgid=comboFieldList[0].getValue(),
                        mjrid=comboFieldList[1].getValue(),
                        grdid=comboFieldList[2].getValue(),
                        keywords=button.previousSibling().getValue();
                        var params={
                            clgid:clgid,
                            mjrid:mjrid,
                            grdid:grdid,
                            keywords:keywords
                        };
                        debugger;
                        button.up('tabtopic').getOwnStore();
                        console.log(params);
                    }
                }
                    
            }]
        });
         
        this.callParent(arguments);
    }
});