var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

app.listen(port, function () {
    console.log('App listening on port ' + port);
});