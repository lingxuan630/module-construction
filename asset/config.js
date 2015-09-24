//load require config
define(['main.js', 'router.js'], function(assetMap, routers){
  
  var config = {
  	map: {},
  	routers: {}
  };

  if(assetMap){
  	assetMap.paths.app = '/modules/application/app.js';
  	config.map = assetMap;
  }

  if(routers){
  	config.routers = routers;
  }

  return config;

})