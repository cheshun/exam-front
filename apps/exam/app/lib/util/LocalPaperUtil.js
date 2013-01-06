/**
 * @class Exam.lib.LocalPaperUtil
 * this is class for local paper item add ,delete, query, stasitics
 */
Ext.define('Exam.lib.util.LocalPaperUtil', {		
	constructor: function() {
		alert(1);
		Ext.create('Ext.data.Store', {
    model: "Search"
});
		this.localstore=Ext.create("Exam.store.LocalPaper");
	},
	addRecord: function(topic, type) {
		/**
		 * check if the topic is in the localStorage
		 */
		var store=this.localstore;
		if(this.isExisted(topic.id)) {
			this.add({
				type: 'type',
				topic: topic
			});
		}
	},
	isExisted: function(id) {
		debugger;
		var store=this.localstore;
		store.load();
		store.each(function(rec) {
			debugger;
		});
	},
	deleteRecord: function() {

	},
	getTypeTotal: function() {

	},
	serializeById: function() {

	},
	serialize: function() {

	}
});

