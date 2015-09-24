/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          baseUrl: "./asset",
          dir: "./public",
          optimize: "none",
          optimizeCss: "standard.keepLines",
          removeCombined: true,
          fileExclusionRegExp: /^\./,
          paths: {
            validor: 'helpers/validor',
            http: 'helpers/http',
            assetMap: 'main',
            router: 'router',
            config: 'config'
          },
          modules: [
            {
              name: "helpers",
              include: ['validor', 'http'],
              out: "helpers",
              create: true,
            },
            {
              name: "config",
              include: ['assetMap', 'router', 'config'],
              out: "config",
              create: true,
            }
          ]
        }
      }
    },

    // 检测文件变化
    watch: {
      requirejs: {
        options: {
          event: ['changed','added', 'deleted']
        },
        files: ['asset/*.js'],
        tasks: ['requirejs'],
      }
    }

  });

  // task that expects its argument (another task) to fail
  grunt.registerTask('expectFail', function(){
    var task = this.args.join(':');

    var done = this.async();

    function onComplete(error, result, code) {
      grunt.log.write("\n > " + result.stdout.split("\n").join("\n > ") + "\n");
      var rv = error ? true : new Error("Task " + task + " unexpectedly passed.");
      done(rv);
    }

    grunt.util.spawn({
      grunt : true,
      args : task
    }, onComplete);

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 自动运行时执行
  grunt.registerTask('default', [
    'requirejs'
  ]);

  grunt.registerTask('init', [
    'watch'
  ]);

};
