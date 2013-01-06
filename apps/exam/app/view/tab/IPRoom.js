  /**
  * @Exam.view.tab.IPRoom
  * @view
  * a tab for show IPRoom information
  */
  Ext.define("Exam.view.tab.IPRoom", {
    extend: "Ext.grid.Panel",
    xtype: "tabiproom",
    store: "IPRooms",
    multiSelect:true,
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: '机房名',
        dataIndex: 'name'
    }, {
        text: 'IP范围',
        dataIndex: 'iprange',
        flex:1
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
    }],
    initComponent: function() {
        var me = this;
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
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
                icon: 'static/img/icon-delete.png',
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