var express = require('express');
var dbHelper = require('./dbHelper.js');
var app = express();

var connection = dbHelper.initializeConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "applicationdb"
});


app.use(express.static( __dirname+"/public"));

app.listen(2000);
