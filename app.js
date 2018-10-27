var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConnect=require('./config/dbConnect');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);


var indexRouter = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.use(session({
  secret:'ysoi',
  resave:false,
  saveUnintialized:false,
  cookie:{secure:false,maxAge:1000*60*60*24},
  store:new MongoStore({mongooseConnection: dbConnect})
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api',require('./controller/index'));
app.use('/', indexRouter);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //unauthorized未经授权的
  if(err.name==="UnauthorizedError"){   
    res.json({
      code:401,
      data:"登录状态失效",
      msg:'登录状态失效'
    })
    return 
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
