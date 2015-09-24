{
  baseUrl: "./public",
  dir: "./public/combile",
  optimize: "uglify",
  optimizeCss: "standard.keepLines",
  // mainConfigFile: "public/main.js",
  removeCombined: true,
  fileExclusionRegExp: /^\./,
  paths: {
    validor: 'helpers/validor',
    http: 'helpers/http'
  },
  modules: [
    {
      name: "helpers",
      include: ['validor', 'http'],
      out: "helpers",
      create: true,
    }
  ]
}