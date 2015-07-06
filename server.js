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

var query = function(data,successCallback){
    connection.query(data, function(err, rows, fields) {
        if (err)
        {
            console.log("error");
        }

        else{
            console.log("success");
            successCallback(rows);
        }
    });
};

app.post('/info', function(req, res) {

   var queryString = 'INSERT INTO userinfo VALUES("'+req.body[1]+'",'+req.body[2]+','+req.body[3]+','+req.body[4]+','+req.body[5]+','+req.body[6]+','+req.body[7]+',"'+req.body[8]+'","'+req.body[9]+'",'+req.body[10]+',"'+req.body[11]+'")';
   query(queryString,function(data){
       console.log("Insert successful");
   });

    var letaGRE = req.body[2] - 4 ;
    var getaGRE = req.body[2] + 2;
    console.log(getaGRE);
    var queryString = 'Select name from universities WHERE avg_q > '+letaGRE+' and avg_q < '+getaGRE+'';
    query(queryString,function(data){
        res.send(data);
});

});

app.listen(2000);
