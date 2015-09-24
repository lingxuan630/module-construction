/**
 * App.js 
 * 用于启动
 */
define(['config.js', 
			  'components/route-recognizer/route-recognizer.js'], function(Config, RouteRecognizer){
	
	var App = function(){};

	App.prototype.controller = '';
	App.prototype.bootstrap = bootstrap;
	App.prototype._bootstrap = _bootstrap;
	App.prototype.init = init;
	App.prototype.config = {};
	App.prototype.router = function(){};
	App.prototype.routerHander = routerHander;

	// 初始化，并启动app
	function bootstrap(){
		var vm = this;
		require(['config'], function(config){
			vm.config = config;
			require.config(vm.config.map);
			vm._bootstrap();
		});
	}

	function _bootstrap(){
		var vm = this;

		require(['route-recognizer','jquery', 'underscore', 'bootstrap', 'helpers'], function(RouteRecognizer){
			// add router
			vm.router = new RouteRecognizer();

			if(!_.isEmpty(vm.config.routers)){
				_.each(vm.config.routers, function(handler, path){
					// check has controller
					if(_.has(vm.config.map.paths, handler)){
						vm.router.add([{path: path, handler: handler}]);
					}
				});
			}
			
			vm.init();
		})
	}

	function init(){
		var vm = this;

		var mainPath = window.location.pathname;
		mainPath = mainPath + window.location.search;
		var currentRouters = vm.router.recognize(mainPath);
		if(currentRouters){
			var currentRouter = currentRouters[0];
			var params = {};
			var queryParams = currentRouters['queryParams'];
			params = _.extend(params, queryParams);
			params = _.extend(params, currentRouter.params);
			vm.routerHander(currentRouter.handler, params);
		}
	}

	function routerHander(ctrlName, params){
		var vm = this;
		require([ctrlName], function(ctrl){
			if(_.isFunction(ctrl)){
				ctrl(vm, params);
			}
		})
	}

	return new App();
})