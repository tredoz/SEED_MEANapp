var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//html5 mode
app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

// To connect using the mongo shell:
//     mongo ds133348.mlab.com:33348/amaber -u <dbuser> -p <dbpassword>
// To connect using a driver via the standard MongoDB URI (what's this?):
//
// mongodb://<dbuser>:<dbpassword>@ds133348.mlab.com:33348/amaber
//root/welcome
