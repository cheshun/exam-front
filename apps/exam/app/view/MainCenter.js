Ext.define("Exam.view.MainCenter", {
    extend: 'Ext.tab.Panel',
    alias: "widget.maincenter",
    xtype:'maincenter',
    region: "center",
    requires: ["Exam.view.tab.College", "Exam.view.tab.Teacher","Exam.view.tab.Student","Exam.view.tab.TopicBank","Exam.view.tab.IPRoom","Exam.view.tab.Course","Exam.view.tab.Person"],
    defaults: {
        closable: true,
        closeAction: 'destroy'
    },
    initComponent: function() {
        Ext.apply(this, {
            items: [{
                title: '起始页',
                xtype: 'panel',
                closable: false,
                frame:true,
                loader: {
                        url: 'static/html/startpage.html',
                        autoLoad: true
                }
                //html: "<iframe frameborder='0' width='100%' height='100%' src='static/html/startpage.html'></iframe>"
            }]
        });
        this.callParent(arguments);
    }
});