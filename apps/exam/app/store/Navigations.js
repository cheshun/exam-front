Ext.define('Exam.store.Navigations', {
    extend: 'Ext.data.TreeStore',
    model: 'Exam.model.Navigation',
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/Navigation.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'children',
            successProperty: 'success'
        }
    },
    root:{
        text:'导航栏',
        expand:true
    },
    listeners:{
        load:function( store, model,  records ,   successful ){
           
        }
    }
});