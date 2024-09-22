// Create web server
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = [
  { name: 'John', message: 'Hello World' }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  console.log(comment);
  comments.push(comment);
  res.json(comment);
});

http.createServer(app).listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});

