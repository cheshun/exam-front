Ext.define('Exam.store.Teachers', {
    extend: 'Ext.data.Store',
    model: 'Exam.model.Teacher',
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/Teacher.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});