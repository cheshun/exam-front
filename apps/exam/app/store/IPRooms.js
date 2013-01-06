Ext.define('Exam.store.IPRooms', {
    extend: 'Ext.data.Store',
    model: 'Exam.model.IPRoom',
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/IPRooms.json',
            update: 'update/iproom',
            create  : 'add/iproom',
            destroy : 'delete/iproom'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});