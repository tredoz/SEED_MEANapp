var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var mongoose = require('mongoose');

var app = express();

app.config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
date = new Date();
app.config.year = date.getFullYear();

mongoose.connect(app.config.db_connect_string);

app.db = mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', function () {
        console.info('connected to database');
    });


fs.readdirSync(path.join(__dirname, "api")).forEach(function (file) {
    require("./api/" + file)(app);
});

fs.readdirSync(path.join(__dirname, "schemata")).forEach(function (file) {
    require("./schemata/" + file)(app);
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//html5 mode
app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
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
//console.log(app.config);