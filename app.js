var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homeRouter');
var favoritosRouter = require('./routes/favoritosRouter');
var generoResultRouter = require('./routes/generoResultRouter');
var generosRouter = require('./routes/generosRouter');
var peliculaRouter = require('./routes/peliculaRouter');
var resultBuscadorRouter = require('./routes/resultBuscadorRouter');
var listaUsuariosRouter = require('./routes/listaUsuarios');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/home", homeRouter);
app.use("/favoritos", favoritosRouter);
app.use("/generoResult", generoResultRouter);
app.use("/generos", generosRouter);
app.use("/pelicula", peliculaRouter);
app.use("/resultBuscador", resultBuscadorRouter);
app.use("/usuarios", listaUsuariosRouter);





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
