 /**
  * @Exam.view.tab.Student
  * @view
  * a tab for show student information
  */
 Ext.define("Exam.view.tab.Student", {
     extend: "Ext.grid.Panel",
     xtype: "tabstudent",
     store: "Students",
     //selType: 'checkboxmodel',
     //选择框组件 
     requires:['Exam.view.common.CollegeSelection'], 
     multiSelect: true,

     columns: [{
         text: 'ID',
         dataIndex: 'id'
     }, {
         text: '姓名',
         dataIndex: 'name',
         flex: 1
     }, {
         text: '学院',
         dataIndex: 'college',
         flex: 1
     }, {
         text: '专业',
         dataIndex: 'major',
         flex: 1
     }, {
         text: '班级',
         dataIndex: 'grade',
         flex: 1
     }, {
         xtype: 'actioncolumn',
         width: 'auto',
         header: '编辑信息',
         items: [{
             icon: 'static/img/icon-edit.png',
             tooltip: '编辑',
             iconCls: 'grid-icon-gap',
             handler: function(grid, rowIndex, colIndex) {
                 var rec = grid.getStore().getAt(rowIndex);
                 alert("Edit " + rec.get('firstname'));
             }
         }]
     }, {
         xtype: 'actioncolumn',
         width: 'auto',
         header: '修改课程',
         items: [{
             icon: 'static/img/icon-course-reg.png',
             tooltip: '修改课程',
             iconCls: 'grid-icon-gap',
             handler: function(grid, rowIndex, colIndex) {
                 var rec = grid.getStore().getAt(rowIndex);
                 alert("Terminate " + rec.get('firstname'));
             }
         }]
     }],
     initComponent: function() {
         var me = this;

         this.dockedItems = [ {
             xtype: 'toolbar',
             dock: 'top',
             items: [{
                 xtype: 'button',
                 action: 'add-college',
                 icon: 'static/img/icon-add.png',
                 text: '添加'
             }, "-",

             {
                 xtype: 'button',
                 action: 'add-grade',
                 icon: 'static/img/icon-edit.png',
                 text: '修改'
             }, "-",
             {
                 xtype: 'button',
                 action: 'add-major',
                 icon: 'static/img/icon-delete.png',
                 text: '删除'
             }, {
                 xtype: 'button',
                 action: 'add-major',
                 icon: 'static/img/icon-delete.png',
                 text: '批量导入'
             }, {
                 xtype: 'tbfill'
             }, {
                 xtype: 'button',
                 icon: 'static/img/icon-delete.png',
                 text: '帮助'
             }]
         },{
             xtype: 'cmncollegeselection'
         }, {
             xtype: 'pagingtoolbar',
             store: me.store,
             // same store GridPanel is using
             dock: 'bottom',
             displayInfo: true
         }];
         this.callParent(arguments);
     }
 });