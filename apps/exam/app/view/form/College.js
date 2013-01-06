Ext.define('Exam.view.form.College', {
    title: '添加信息',
    extend: 'Ext.window.Window',
    contrain: true,
    contrainHeader: true,
    width: 400,
    modal: true,
    layout: 'fit',
    autoShow: true,
    initComponent: function() {
        //var form = this.down('form');
        var me = this,
        url=me.url,
            recordData = me.recordData || {},
            fieldAvailble = [{
                xtype: 'textfield',
                name: 'college',
                fieldLabel: '学院名称',
                value: recordData.college || ''
            }, {
                xtype: 'hiddenfield',
                name: 'collegeid',
                value: recordData.collegeid || ''
            }, {
                xtype: 'textfield',
                name: 'major',
                fieldLabel: '专业名称',
                value: recordData.major || ''
            }, {
                xtype: 'hiddenfield',
                name: 'majorid',
                value: recordData.majorid || ''
            }, {
                xtype: 'textfield',
                name: 'grade',
                fieldLabel: '班级名称',
                value: recordData.grade || ''
            }, {
                xtype: 'hiddenfield',
                name: 'gradeid',
                value: recordData.gradeid || ''
            }];
        var fieldConf = [{
            xtype: 'hiddenfield',
            name: 'type',
            value: ''
        }],
            types = ['college', 'marjor', 'grade'],
            fieldIndex = me.itemType;
        fieldConf[0].value = types[me.itemType - 1];

        for(var i = 0; i < fieldIndex * 2 - 1; i++) {

            fieldConf.push(fieldAvailble[i]);
        }
        if(!me.isFatherEditable) {
            for(var i = 2; i <= fieldIndex; i++) {
                var disabledFieldIndex = fieldConf[2 * (i - 1) - 1];
                disabledFieldIndex.readOnly = true;
            }
        }
        this.items = [{
            xtype: 'form',
            height: 'auto',
            layout: 'anchor',
            bodyPadding: 12,
            defaults: {
                labelAlign: 'right',
                labelWidth: 60,
                anchor: '80%',
                readOnly: false,
                allowBlank: false,
                readOnly: false
            },
            items: fieldConf,
            buttonAlign: 'center',
            buttons: [{
                text: '确定',
                formBind: true,
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if(form.isValid()) {
                        form.submit({
                            url: me.url||'add/college',
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                    }
                }
            }]
        }];
        
        this.callParent(arguments);
    }

});