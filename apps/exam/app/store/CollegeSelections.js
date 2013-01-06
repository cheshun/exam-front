Ext.define('Exam.store.CollegeSelections', {
    extend: 'Ext.data.Store',
    fields:['id','name'],
    proxy: {
        type: 'ajax',
        url:'testdata/CollegeSelections.json',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});
 