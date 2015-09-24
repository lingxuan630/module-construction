var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var routers = require('./routers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

//gobel var
app.locals._layoutFile = 'layout.html';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

console.log(app.get('env'));

app.use('/', routers);

// error handlers
// development error handler
// will print stacktrace

var server = app.listen(3000, function(){
  console.log('App is runing');
})

module.exports = app;