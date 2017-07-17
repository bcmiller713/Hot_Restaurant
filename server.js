var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

app.listen(port, function () {
    console.log("App listening on port " + port);
});