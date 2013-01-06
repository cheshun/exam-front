Ext.define("Exam.view.tab.College", {
	extend: "Ext.tree.Panel",
	xtype: 'tabcollege',
	title: '学院机构',
	collapsible: true,
	useArrows: true,
	rootVisible: false,
	store: "Colleges",
	multiSelect: false,
	singleExpand: false,
	columns: [{
		xtype: 'treecolumn',
		text: '名称',
		flex: 1,
		sortable: true,
		dataIndex: 'name'
	}, {
		text: '编号',
		flex: 1,
		sortable: true,
		dataIndex: 'id'
	}, {
		xtype: 'actioncolumn',
		text: '编辑',
		width: 40,
		menuDisabled: true,
		tooltip: 'Edit task',
		align: 'center',
		icon: 'static/img/icon-edit.png',
		handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
			var depth = Exam.lib.util.TreeUtil.getNodeDepth(record),recordData=null;
			switch(depth) {
			case 1:
				recordData = {
					college: record.get('name'),
					collegeid: record.get('id') 
				};
				
				break;
			case 2:

				var  collegeRecord = record.parentNode;

				recordData = {
					college: collegeRecord.get('name'),
					collegeid: collegeRecord.get('id'),
					major: record.get('name'),
					majorid: record.get('id')
				};
				
				break;
			case 3:
				var majorRecord = record.parentNode,
					collegeRecord = majorRecord.parentNode;

				recordData = {
					college: collegeRecord.get('name'),
					collegeid: collegeRecord.get('id'),
					major: majorRecord.get('name'),
					majorid: majorRecord.get('id'),
					grade: record.get('name'),
					gradeid: record.get('id')
				};
				 
				break;
			default:
				break;
			}
			Ext.create('Exam.view.form.College', {
					itemType: depth,
					recordData: recordData,
					isFatherEditable:false,
					url:'update/collge'
				});
		}
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			xtype: 'button',
			disabled: false,
			action: 'add-college',
			icon: 'static/img/icon-add.png',
			text: '添加学院'
		}, "-",
		{
			xtype: 'button',
			disabled: true,
			action: 'add-major',
			icon: 'static/img/icon-add.png',
			text: '添加专业'			
		}, "-",
		{
			xtype: 'button',
			disabled: true,
			action: 'add-grade',
			icon: 'static/img/icon-add.png',
			text: '添加班级'
		}]
	}],
	initComponent: function() {
		this.callParent(arguments);
	},
	onSelectionChange: function(selModel, selected, eOpts) {
		var depth = Exam.lib.util.TreeUtil.getNodeDepth(record);
		debugger;
	}
});