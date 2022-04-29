require('dotenv').config();
var express = require('express');
var app = express();
/*console.log("Hello World");
app.get('/', (req, res) => { res.send("Hello Express") });*/
app.get('/', (req, res) => { res.sendFile(__dirname+"/views/index.html") });
app.use("/public", express.static(__dirname+"/public"));
var l_hello = "Hello json";
console.log(process.env.MESSAGE_STYLE)
if (process.env.MESSAGE_STYLE=="uppercase")
{
    l_hello=l_hello.toUpperCase();
    console.log(l_hello);
} 
console.log({"message":'l_hello'});
app.get('/json', (req, res) => {res.json({ message :l_hello})});































module.exports = app;
