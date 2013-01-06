Ext.define('Exam.store.Colleges', {
    extend: 'Ext.data.TreeStore',
    model: 'Exam.model.College' ,
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/College.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'children',
            successProperty: 'status'
        }
    }
});
 