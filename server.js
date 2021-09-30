var express = require('express');
var app = express();


app.get('/', function (req, res) {
   res.send('Hey, I came from the express server');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})