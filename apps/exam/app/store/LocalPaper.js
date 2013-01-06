Ext.define('Exam.store.LocalPaper', {
	model: 'Exam.model.LocalPaper',
	extend: 'Ext.data.Store',
	addRecord: function(topic, type) {
		/**
		 * check if the topic is in the localStorage
		 */
		var id = typeof topic === "object" ? topic.id : topic;
		if(this.isExisted(id) == false) {
			debugger;
			this.add({
				type: type,
				topic: topic
			});
			this.sync();
			return true;
		}
		return false;
	},
	isExisted: function(id) {

		var flag = false;
		this.load();
		this.each(function(rec) {
			debugger;
			if(rec.data.topic.id == id) {
				flag = true;
				return false;
			}
		});
		return flag;
	},
	deleteRecord: function(id) {
		/**
		 * by topic.id  not ext localstorage id
		 */
		var recrod=null;
		this.load();
		this.each(function(rec, idx) {
			if(rec.data.topic.id == id) {
				 
				recrod=rec  ;
				return false;
			}
		});
		this.remove(record);
		this.sync();
		return !!record;
	},
	getTypeTotal: function(type) {

	},
	serializeById: function() {

	},
	serialize: function() {

	}
});
/*
a=Ext.create("Exam.store.LocalPaper")

a.addRecord({id:1,options:[{label:"A",text:"dsfafdadsfasd这个"}],answer:"A",rating:4},'radio')
*/