var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req, res) {
  res.send("main page");
});

app.get('/test', function (req, res) {
  res.send("hello world");
});

app.get('/test2', function (req, res) {
  res.send("hello world24");
});

app.get('/file', function (req, res) {
  res.sendfile("hello.html");
});

app.get('/file2', function (req, res) {
  res.sendfile("rawfile");
});

app.get('/imagegun', function (req, res) {
  res.sendfile("image/gun.jpg");
});

app.get('/imagepuppy', function (req, res) {
  res.sendfile("image/puppy.jpg");
});

app.get('/file3', function (req, res) {
  res.sendfile("howareyou.html");
});

app.get('/file4', function (req, res) {
  res.sendfile("table.html");
});

app.get('/file5', function (req, res) {
  res.sendfile("TABLE2.html");
});

app.get('/file6', function (req, res) {
  res.sendfile("check.html");
});


app.get('/file7', function (req, res) {
  res.sendfile("css.html");
});


app.get('/file8', function (req, res) {
  res.sendfile("script.html");
});

app.get('/file9', function (req, res) {
  res.sendfile("input.html");
});

app.get('/file10', function (req, res) {
  res.sendfile("forPractice.html");
});

app.get('/file11', function (req, res) {
  res.sendfile("0416.html");
});
console.log("running");
