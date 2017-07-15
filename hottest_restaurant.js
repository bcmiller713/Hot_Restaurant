var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

console.log("it runs");

app.get('/', function (req, res) {
    console.log('hey, it works');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/tables', function (req, res) {
    console.log('tables');
    res.sendFile(path.join(__dirname, '/tables.html'));
});

app.get('/reservations', function (req, res) {
    console.log('reservations');
    res.sendFile(path.join(__dirname, '/reservations.html'));
});

var tables = [];

app.get('/api/tables', function (req, res) {
  res.json(tables);
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});