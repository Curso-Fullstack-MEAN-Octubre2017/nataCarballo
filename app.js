var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var jquery = require('jquery');

const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petStore', { useMongoClient: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Nuevas Rutas van aqui:
app.use('/api', require('./routes/customers')(router));
app.use('/api', require('./routes/pets')(router));
app.use('/api', require('./routes/appointments')(router));


//require('./text/crud_test.js');//introducir datos para pruebas



//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 console.error(err)
  res.sendStatus(err.status || 500);
});

module.exports = app;