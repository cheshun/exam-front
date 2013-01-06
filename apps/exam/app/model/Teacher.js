Ext.define('Exam.model.Teacher', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
		type: 'string'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'college',
		type: 'string'
	}, {
		name: 'courses'
	}]
});