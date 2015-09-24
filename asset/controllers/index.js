/**
 * App.js 
 * 用于启动整个页面
 */
define(['helpers/validor', 'helpers/http'], function(validor, $http){
	
	var indexCtrl = ctrlHandler;

	function ctrlHandler(app, params){
		
		var vm = this;

		console.log(app.config);
		
	}

	return indexCtrl;
})