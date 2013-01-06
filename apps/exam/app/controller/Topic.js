/**
 * @class Exam.controller.Topic
 * @controller
 * used for controlling the Topic management of navigation tree
 */
Ext.define('Exam.controller.Topic', {
	extend: 'Ext.app.Controller',
	stores: ["TopicBank", "CollegeSelections", 'LocalPaper'],
	models: [],
	requires: ["Exam.lib.util.TreeUtil"],
	refs: [{
		ref: 'tabTopicBank',
		selector: 'tabtopicbank'
	},{
		ref: 'a4cart',
		selector: 'cmna4cart'
	}],
	init: function() {},
	onLaunch: function() {
		var me = this;
		/**
		 * control the item and distribute event by the source element
		 */
		debugger;
		this.control('tabtopicbank', {
			render: function(view, e) {
				setTimeout(function() {
					var localPaper = Ext.create("Exam.store.LocalPaper");
					localPaper.load();
					var total = localPaper.getCount();
					var target = Ext.get('scanPaperWrapper').dom;
					var a4 = Ext.create("Exam.view.common.A4Cart", {
						renderTo: target,
						initData: {
							total: total
						}
					});
					//delete localPaper;
					Ext.EventManager.addListener( target, 'click', function(e){
						debugger;
					}, null, null );
				}, 1000);

			}
		});
		this.control('tabtopicbank > dataview', {
			itemclick: me.dispatchEvent
		});

		this.control('tabtopicbank >   #scanPaper', {
			click: function() {
				debugger;
			}
		});

		this.control("tabtopicbank > cmna4cart",{
			click:function(cmp, e,   eOpts ){
				debugger;
			}
		});
	},
	dispatchEvent: function(view, record, item, index, e, eOpts) {
		var data = record.getData(),
			target = e.target,
			operation = target.getAttribute('data-opertaion');
		if(operation == 'edit') {
			this.doItemEdit(data);
		} else if(operation == 'delete') {
			this.doItemDelete(data);
		} else if(operation == 'add-a4cart') {
			this.doItemToA4Cart(data, target);
		}
		e.preventDefault();
	},
	doItemEdit: function(data) {
		Ext.Ajax.request({
			url: 'topic/edit',
			params: {
				id: data.id
			},
			success: function(res) {
				debugger;
				Ext.Msg.alert('提示', "成功!");
			},
			failure: function(req, res) {
				debugger;
			}
		});
	},
	doItemDelete: function(data) {
		Ext.Ajax.request({
			url: 'topic/edit',
			params: {
				id: data.id
			},
			success: function(res) {
				debugger;
				Ext.Msg.Alert('提示', "成功!");
			},
			failure: function(req, res) {
				debugger;
			}
		});
	},
	doItemToA4Cart: function(data, target) {
		var localPaper = Ext.create("Exam.store.LocalPaper");
		localPaper.load();
		debugger;
		if(localPaper.addRecord(data, 'radio')) {
			//Ext.Msg.alert('提示', "已加入~");
			target.innerHTML = "√已在试卷中";

			target.className = 'added-to-a4';
			var localPaper = Ext.create("Exam.store.LocalPaper");
			localPaper.load();
			var total = localPaper.getCount();
			Ext.query('#scanPaper .a4-content span')[0].innerHTML = '(+' + total + ')';

			var targetX=Ext.get(target).getLeft(),
			    	targetY=Ext.get(target).getTop();
			    	debugger;
			Ext.create('Ext.Component', {
			    html: ' ',
			  	width: Ext.get(target).getStyle('width'),
		    	height: Ext.get(target).getStyle('height'),			     
			    style: {			       
			        left:targetX,
			        right:targetY,
			        backgroundColor:'#F5831F',zIndex:99999,position:'absolute'
			    },
			    renderTo: Ext.getBody()
			}).animate({to:{top:500,opacity:0},duration:1000,callback:function(i,j){
				this.destroy();
				debugger;
			}});
		 
		} else {
			target.className = 'added-to-a4';
			target.innerHTML = "√已在试卷中";
			Ext.Msg.alert('提示', "已在试卷中!");
		}
	}
});
