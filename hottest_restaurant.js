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
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function (req, res) {
    console.log('tables');
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function (req, res) {
    console.log('make');
    res.sendFile(path.join(__dirname, 'make.html'));
});

var tables = [];

app.get('/api/tables', function (req, res) {
  res.json(tables.slice(0,5));
});

app.get('/api/waitlist', function(req, res) {
  res.json(tables.slice(5));
})

app.post('/api/new', function (req, res) {
  console.log('reserve request submitted');
  console.log(req.body);

  var newReservation = req.body;

  tables.push(newReservation);

  // var isBooked;
  // if(tables.length <= 5){
  //   isBooked = true;
  // }
  // else{
  //   isBooked = false;
  // }

  res.json(newReservation);

});

app.post('/api/clear', function (req, res) {
  console.log('clear all tables');
  tables = [];
  res.sendFile(path.join(__dirname, 'app/public/tables.html'));
});


app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});