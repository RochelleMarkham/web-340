/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: May 4 2020
; Modified By: Rochelle Markham
; Description: Hello World with Express
;===========================================
*/

//require express module
var express = require ("express");
//require http module
var http = require ("http");
//assign the express module to a variable
var app = express();

//requires a request and a response as params
app.use(function(request, response){
    //logs where the request is coming in to
    console.log("In comes a request to: " + request.url);
    //prints Hello World as the response
    response.end("Hello World");
});

//creates the server on port 8080
http.createServer(app).listen(8080);