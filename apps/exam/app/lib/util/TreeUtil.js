Ext.define("Exam.lib.util.TreeUtil",{
	singleton:true,
	getNodeDepth:function(node){
		var i=0;
		while(node.parentNode){
			i++;
			node=node.parentNode;
		}
		return i;
	}
});