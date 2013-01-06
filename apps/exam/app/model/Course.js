Ext.define('Exam.model.Course', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
		type: 'string'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'kpoint'
	}, {
		name: 'college',
		type:'string'
	}]
});