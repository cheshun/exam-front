Ext.define('Exam.model.Student', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
		type: 'string'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'password',
		type: 'string'
	}, {
		name: 'college',
		type: 'string'
	},{
		name: 'collegeid',
		type: 'string'
	},{
		name: 'major',
		type: 'string'
	},{
		name: 'majorid',
		type: 'string'
	},{
		name: 'grade',
		type: 'string'
	},{
		name: 'gradeid',
		type: 'string'
	}]
});