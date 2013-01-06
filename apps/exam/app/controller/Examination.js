Ext.define('Exam.controller.Examination', {
	extend: 'Ext.app.Controller',
	stores: ["Colleges", "Teachers" ],
	models: ["College", "Teacher","Student"],
	requires: ["Exam.lib.util.TreeUtil"],
	refs: [{
		ref: 'tabCollege',
		selector: 'tabcollege'
	}, {
		ref: 'tabTeacher',
		selector: 'tabteacher'
	}, {
		ref: 'tabStudent',
		selector: 'tabstudent'
	}],
	init: function() { 
	},
	onLaunch: function() {

	}
});