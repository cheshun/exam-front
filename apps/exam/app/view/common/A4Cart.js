Ext.define('Exam.view.common.A4Cart', {   
    extend:'Ext.Component',
    xtype:'cmna4cart',
    initComponent:function(){
        this.html=  ['<div id="scanPaper">',
                    '<div class="a4-header">',
                        '<a target="_blank" href="html/paper.html">查看试卷</a>',
                    '</div>',
                    '<div class="a4-content">',
                        '<span>(+'+this.initData.total+')</span>',
                    '</div>',
                    '<div class="a4-footer">',
                        '<a href="#" class="a4-delete" title="删除试卷">╳</a>',
                    '</div>',
            '</div>'].join('');
    	this.callParent(arguments);
    }
});