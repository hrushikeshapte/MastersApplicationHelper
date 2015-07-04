var express = require('express');
var dbHelper = require('./dbHelper.js');
var app = express();
var bodyParser = require('body-parser');

var connection = dbHelper.initializeConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "applicationdb"
});


app.use(express.static( __dirname+"/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.post('/info', function(req, res) {
    console.log(req.body);
    res.send("ok");

   var queryString = 'INSERT INTO userinfo VALUES("'+req.body[1]+'",'+req.body[2]+','+req.body[3]+','+req.body[4]+','+req.body[5]+','+req.body[6]+','+req.body[7]+',"'+req.body[8]+'","'+req.body[9]+'",'+req.body[10]+',"'+req.body[11]+'")';
    connection.query(queryString, function(err, rows, fields) {
        if (err)
        {
            console.log("error");
        }

        else{
           console.log("success");
        }
    });


});

app.listen(2000);
