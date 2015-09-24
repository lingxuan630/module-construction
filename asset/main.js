/** 
 * main
 */
define([], function(){
  var assetMap = {
    waitSeconds: 200,
    paths:{
      angular: '/components/angular/angular-pack.js',
      jquery : '/components/jquery/jquery.js',
      bootstrap : '/components/bootstrap/js/bootstrap.js',
      underscore : '/components/underscore/underscore.js',

      // main app
      app : '/modules/system/app.js',
      helpers: '/helpers.js',

      // plugins
      validor : '/plugins/parsley/parsley.remote.min.js',
      routerRecognizer: '/plugins/route-recognizer/route-recognizer.js',

      //helpers
      'helpers/validor': '/helpers.js',
      'helpers/editor': '/helpers.js',
      'helpers/http': '/helpers.js',

      // controllers
      app_index_ctrl: 'controllers/index.js'
    },
    shim:{
      'app' : {
        deps : ['backbone','helpers']
      },
      'bootstrap' : {
        deps : ['jquery']
      },
      'validor' : {
        deps : ['jquery']
      }
    }
  };

  return assetMap;
})