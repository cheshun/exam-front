 /**
 * @class Ext.lib
 * @singleton
 * used like this:
 * Exam.lib.Singleton.getInstance(),the return value is an object of logined user
*/
Ext.define("Exam.lib.Singleton", {
 	singleton: true,
 	isLoad:false,

 	constructor: function() {
 		var me=this;
 		 
 		Ext.Ajax.request({
 			url: 'testdata/Login.json',
 			params: {
 				id: 1
 			},
 			success: function(response) {
 				var resObj=Ext.JSON.decode(response.responseText);
 				me.isLoad=true;
 				me.data=resObj.data;
 			}
 		});
 	},
 	getInstance: function( ) {
 		debugger;
 		var me=this,
 			data=me.data;		 
 		var LoginUser = function(id,name,age ) {
			this.name =id  ;
			this.id = name;
			this.age =age ;			 
		};
		var _getData = function(key) {
			if(isLoad == false) {
				throw new Error("login data is not loaded!");
			}
			return this[key] || null;
		};
		LoginUser.prototype = {
			getData: _getData
		};
 		if(me.isLoad == false) {
 			throw new Error("login data is not loaded!"); 			
 		}
 		var instance=new LoginUser(data.id,data.name,data.age);
 		return  instance;
 	}
 });
 