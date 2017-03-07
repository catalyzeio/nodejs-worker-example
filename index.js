'use strict';

var express = require('express');

var app = express();
var off = false;
app.get('/', function (req, res, next) {
    res.send('hello world!');
});

app.get('/ping', function (req, res) {
    if (off) {
	res.writeHead(404)
	res.close()
    } else {
	res.send('pong\n');
    }
});

app.get('/off', function (req, res) {
    off = true;
    res.send('off\n')
});

app.get('/on', function (req, res) {
    off = false;
    res.send('on\n')
});

var port = process.env.PORT || 8088;
app.listen(port, '0.0.0.0', function () {
    console.log('listening on port ' + port);
});
