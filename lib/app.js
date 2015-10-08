var express = require('express');
var http = require('http');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);

app.get('/', function(req, res){
  res.render('test', {
    s: 'Hello'
  });
})

var server = http.createServer(app);
server.listen(3000);
console.log('server started on http://127.0.0.1:3000');
