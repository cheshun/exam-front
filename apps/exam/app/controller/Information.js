/**
 * @class Exam.controller.Information
 * @controller
 * used for controlling the information management of navigation tree
 */
Ext.define('Exam.controller.Information', {
	extend: 'Ext.app.Controller',
	stores: ["Colleges", "Teachers", "CollegeSelections", "Students","IPRooms","Courses"],
	models: ["College", "Teacher", "Student","IPRoom","Course"],
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
		var me = this;
		/**
		 *control xtype tabcollege
		 */
		this.control("maincenter > tabcollege", {
			itemclick: me.onButttonAccess
		});
		this.control("maincenter > tabcollege > toolbar >button[action=add-college]", {
			click: me.onAddCollege
		});
		this.control("maincenter > tabcollege > toolbar >button[action=add-major]", {
			click: me.onAddMajor
		});
		this.control("maincenter > tabcollege > toolbar >button[action=add-grade]", {
			click: me.onAddGrade
		});
		/**
		 *control xtype tabteacher
		 */
		this.control("maincenter > tabteacher", {
			render: function(panel, eOpts) {
				panel.getStore().reload();
			}
		});
		this.control("maincenter > tabteacher >combobox", {
			render: function(panel, eOpts) {
				panel.down('combobox').setValue(-1);
			}
		});
		this.getCollegeSelectionsStore().on({
			load: function(store, records, successful, eOpts) {
				var defaultField = {
					id: -1,
					name: '┈┈请选择┈┈'
				};
				store.insert(0, defaultField);
			}
		});

		/**
		 * control xtype tabstudent
		 */
		this.control("maincenter > tabstudent", {
			render: function(panel, eOpts) {
				panel.getStore().load();
			}
		});
	},
	/**
	 *@for  xtype:tabcollege,set children element toolbar button[action=add-college,add-major,add-grade]
	 *accessable,bridging event name gird itemclick
	 */
	onButttonAccess: function(view, record, item, index, e, eOpts) {
		var depth = Exam.lib.util.TreeUtil.getNodeDepth(record);
		switch(depth) {
		case 1:
			break;
		case 2:

			view.up('tabcollege').down('toolbar > button[action=add-major]').enable(true);
			view.up('tabcollege').down('toolbar > button[action=add-grade]').disable(true);
			break;
		case 3:

			view.up('tabcollege').down('toolbar > button[action=add-major]').disable(true);
			view.up('tabcollege').down('toolbar > button[action=add-grade]').enable(true);
			break;
		default:
			break;
		}
	},
	onAddCollege: function(button, e, eOpts) {
		Ext.create('Exam.view.form.College', {
			itemType: 1,
			recordData: null
		});
	},
	onAddMajor: function(button, e, eOpts) {
		var record = button.up('tabcollege').getSelectionModel().getSelection()[0],
			collegeRecord = record.parentNode;

		recordData = {
			college: collegeRecord.get('name'),
			collegeid: collegeRecord.get('id'),
			major: record.get('name'),
			majorid: record.get('id')
		};
		record && Ext.create('Exam.view.form.College', {
			itemType: 2,
			recordData: recordData
		});
	},
	onAddGrade: function(button, e, eOpts) {
		var record = button.up('tabcollege').getSelectionModel().getSelection()[0],
			majorRecord = record.parentNode,
			collegeRecord = majorRecord.parentNode;

		recordData = {
			college: collegeRecord.get('name'),
			collegeid: collegeRecord.get('id'),
			major: majorRecord.get('name'),
			majorid: majorRecord.get('id'),
			grade: record.get('name'),
			gradeid: record.get('id')
		};
		record && Ext.create('Exam.view.form.College', {
			itemType: 3,
			recordData: recordData
		});
	},
	onLaunch: function() {
		
	}
});