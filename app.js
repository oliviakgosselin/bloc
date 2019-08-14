const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const app = express();

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/img/favicons/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.html');
})

/// catch 404 and forward to error handler
app.use((req, res) => {
  res.redirect('/');
})

module.exports = app;
