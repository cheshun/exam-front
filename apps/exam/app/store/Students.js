Ext.define('Exam.store.Students', {
    extend: 'Ext.data.Store',
    model: 'Exam.model.Student',
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/Student.json',
            update: 'update/student',
            create  : 'add/student',
            destroy : 'delete/student'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});