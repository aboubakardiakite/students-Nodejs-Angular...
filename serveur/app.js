// var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const error = require('./routes/error');

var indexRouter = require('./routes/index');
var etudiantRouter = require('./routes/etudiant');
var groupeRouter = require('./routes/groupe');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use( cors() );
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/etudiants', etudiantRouter);
app.use('/groupes', groupeRouter);

app.use(error);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");     // OK from a specific origin, here localhost
  res.header("Access-Control-Allow-Origin", "*");                       // OK for all origins
  res.header("Access-Control-Allow-Headers","Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;