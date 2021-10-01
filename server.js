var express = require('express');
var app = express();


app.get('/', function (req, res) {
   res.send('Hey, I am get response');
})

app.post('/', function (req, res) {
  res.send('Hey, I am post response');
})

app.put('/', function (req, res) {
  res.send('Hey, I am put response');
})

app.delete('/', function (req, res) {
  res.send('Hey, I am delete response');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})