'use strict';

var express = require('express');

var app = express();
app.get('/', function (req, res, next) {
    res.send('hello world!');
});

app.get('/ping', function (req, res) {
    res.send('pong\n');
});

var port = process.env.PORT || 8088;
app.listen(port, '0.0.0.0', function () {
    console.log('listening on port ' + port);
});
