'use strict';

var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.send('Hello, world!');
});

var port = process.env.PORT || 8088;
app.listen(port, function () {
    console.log('listening on port ' + port);
});
