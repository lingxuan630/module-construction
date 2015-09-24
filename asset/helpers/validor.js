/**
 * validor helper
 * by lingxuan 2014-10-8
 */

define('helpers/validor',['validor'], function(){
	function validorHandler(ele, option, noTrigger){
		var defaults = {
  	successClass : null
		}
		
		if(!noTrigger){
			defaults.trigger = 'focusout';
		}

		if(option){
			var options = _.extend(defaults, option);
		}else{
			var options = defaults;
		}

		return $(ele).parsley(options);
	}

	return validorHandler;
});