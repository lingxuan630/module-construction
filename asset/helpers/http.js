/**
 * http helper
 * 封装http请求
 * by lingxuan 2014-10-8
 */
define('helpers/http', ['jquery'], function($){
	var Http = function(){};

	Http.prototype.ajax = ajaxHandler;
	Http.prototype.post = postHandler;
	Http.prototype.get = getHandler;

	function commonHandler(options){
		var defferd = $.Deferred();

		var options = options ? options : {};

		$.ajax(options)
		.done(function(data){
			defferd.resolve(data);
		})
		.fail(function(data){
			defferd.reject(data);
		});

		return defferd.promise();
	}

	// ajax请求
	function ajaxHandler(options){
		return commonHandler(options);
	}

	function postHandler(url, data){
		var options = {
			url: url,
			data: data,
			dataType: 'json',
			type: "POST"
		};

		return commonHandler(options);
	}

	function getHandler(url, data){
		var options = {
			url: url,
			data: data,
			dataType: 'json',
			type: "GET"
		};

		return commonHandler(options);

	}

	return new Http();
});