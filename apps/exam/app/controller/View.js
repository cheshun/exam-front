/**
 * @class Exam.controller.View
 * @controller
 * used for controlling the  navigation tree whose item is clicked to show a tab
 */
Ext.define('Exam.controller.View', {
	extend: 'Ext.app.Controller',
	stores: ["Navigations"],
	models: ["Navigation"],
	refs: [{
		ref: 'navigation',
		selector: 'navigation'
	}, {
		ref: 'banner',
		selector: 'banner'
	}, {
		ref: 'mainCenter',
		selector: 'maincenter'
	}],
	init: function() {
		var me = this;

		this.control('navigation', {
			itemclick: me.showTabPanel
		});

		this.getNavigationsStore().on({
			load: function(store, model, records, successful) {

			}
		});
	},
	showTabPanel: function(view, record, item, index, e, eOpts) {
		var componentMap = {
			"院系管理": "tabcollege",
			"教师管理": "tabteacher",
			"学生管理": "tabstudent",
			"机房IP管理": "tabiproom",
			"课程管理": "tabcourse",
			"个人信息": "tabperson",
			"组建试卷": "tabpaperbuilding",
			"智能出卷": "tabpaperintel",
			"在线出卷": "tabpaperonline",
			"试卷列表": "tabpaperlist",
			"批阅试卷": "tabpaperreadover",
			"新建题目": "tab",
			"题目列表": "tabtopicbank",
			"题型管理": "",
			"考试监控": "",
			"强制注销": ""
		};
		if(record.get("leaf") == false) {
			return;
		}
		var title = record.get("text"),
			xtype = componentMap[title],
			mainCenter = this.getMainCenter(),
			targetPanel = mainCenter.query(xtype)[0];

		if( !! targetPanel) {
			mainCenter.setActiveTab(targetPanel);
			return;
		}

		newPanel = this.getMainCenter().add({
			xtype: xtype,
			title: title
		});
		mainCenter.setActiveTab(newPanel);

	},
	onLaunch: function() {
	   
		//console.log(userInfo);
	}
});