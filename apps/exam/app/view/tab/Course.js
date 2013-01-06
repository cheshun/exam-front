  /**
  * @Exam.view.tab.Course
  * @view
  * a tab for show Course information
  */
 Ext.define("Exam.view.tab.Course", {
    extend: "Ext.grid.Panel",
    xtype: "tabcourse",
    store: "Courses",
    multiSelect:true,
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: '课程名',
        dataIndex: 'name',
        flex: 1
    }, {
        text: '知识点列表',
        dataIndex: 'kpoint',
        flex: 1,
        renderer: function(list) {
            var rs = [];
            for(var i = 0, len = list.length; i < len; i++) {
                rs.push(list[i].name);
            }
            return rs.join('，');
        }
    }, {
        text: '所属学院',
        dataIndex: 'college'
    },{
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
        } ]
    },{
        xtype: 'actioncolumn',
        width: 'auto',
        header: '修改课程',
        items: [ {
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
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                labelWidth:'auto',
                xtype: 'combobox',
                fieldLabel: '学院',
                name:'clgid',
                displayField: 'name',
                valueField: 'id',
                store: "CollegeSelections" 
            },{
                xtype:'textfield',
                emptyText:'搜索关键词'
            },{
                xtype:'button',
                text:'搜索',
                //scale:'medium',
                style:'border:1px solid #A1A1A1',
                icon:'static/img/search.png',
                iconAlign:'right',
                listeners:{
                    click:function( button, event ,  eOpts ){
                        var comboFieldList= button.ownerCt.query("combobox"),
                        clgid=comboFieldList[0].getValue(),
                        mjrid=comboFieldList[1].getValue(),
                        grdid=comboFieldList[2].getValue(),
                        keywords=button.previousSibling().getValue();
                        var params={
                            clgid:clgid,
                            mjrid:mjrid,
                            grdid:grdid,
                            keywords:keywords
                        };
                        debugger;
                        button.up('tabtopic').getOwnStore();
                        console.log(params);
                    }
                }
                    
            }, {xtype:'tbfill'},{
                xtype: 'button',
                text: '添加',
                icon: 'static/img/icon-add.png',
                handler: function() {

                }
            }, "-",
            {
                xtype: 'button',
                text: '删除',
                icon: 'static/img/icon-add.png',
                handler: function() {

                }
            }]
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