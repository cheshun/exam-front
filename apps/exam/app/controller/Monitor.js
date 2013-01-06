Ext.define('Exam.controller.Monitor', {
	extend: 'Ext.app.Controller',
	//stores: ["Colleges", "Teachers" ],
	//models: ["College", "Teacher","Student","IPRoom","Course"],
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
	}, {
		ref: 'tabIPRoom',
		selector: 'tabiproom'
	}, {
		ref: 'tabCourse',
		selector: 'tabcourse'
	}],
	init: function() { 
	},
	onLaunch: function() {

	}
});