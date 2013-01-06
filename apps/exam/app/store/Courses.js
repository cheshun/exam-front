Ext.define('Exam.store.Courses', {
    extend: 'Ext.data.Store',
    model: 'Exam.model.Course',
    proxy: {
        type: 'ajax',
        api: {
            read: 'testdata/Courses.json',
            update: 'update/course',
            create  : 'add/course',
            destroy : 'delete/course'
        },
        reader: {
            type: 'json',
            root: 'data.hello',
            successProperty: 'success',
            totalProperty:'data.total',
        }
    }
});