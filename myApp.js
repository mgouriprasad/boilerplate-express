require('dotenv').config();
var express = require('express');
var app = express();
/*console.log("Hello World");
app.get('/', (req, res) => { res.send("Hello Express") });*/
app.get('/', (req, res) => { res.sendFile(__dirname+"/views/index.html") });
app.use("/public", express.static(__dirname+"/public"));
var l_init = "Hello json";
console.log(process.env.MESSAGE_STYLE);
if (process.env.MESSAGE_STYLE === "uppercase")
{
    l_message = l_init.toUpperCase();
} else {
    l_message = l_init;
}

console.log({message:l_message});
app.get('/json', (req, res) => { res.json({message:l_message})});






























module.exports = app;