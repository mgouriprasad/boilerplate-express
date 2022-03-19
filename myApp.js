var express = require('express');
var app = express();
/*console.log("Hello World");
app.get('/', (req, res) => { res.send("Hello Express") });*/
var absolutePath = __dirname+"views/index.html"
/*app.get('/', (req, res) => { res.sendFile(__dirname+"/views/index.html") });*/
app.get('/', (req, res) => { res.sendFile(absolutePath) });


































module.exports = app;
