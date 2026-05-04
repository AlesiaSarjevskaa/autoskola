var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dogsRouter = require('./routes/dogs');
const catsRouter = require('./routes/cats');
const policeOfficersRouter = require('./routes/policeOfficers');
const policeStationsRouter = require('./routes/policeStations');

var app = express();

mongoose
.connect("mongodb+srv://admin:adminadmin@cluster0.olo13ku.mongodb.net/programovanicvika?appName=Cluster0")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dogs', dogsRouter);
app.use('/cats', catsRouter);
app.use('/policeOfficers', policeOfficersRouter);
app.use('/policeStations', policeStationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
