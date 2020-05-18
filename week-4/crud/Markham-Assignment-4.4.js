/*
============================================
; Title:  Assignment 4.4
; Author: Professor Krasso
; Date: May 16 2020
; Modified by: Rochelle Markham
; Description: crud example
;===========================================
*/

//requires the express module
var express = require("express");
//requires the http module
var http = require ("http");
//sets express to a variable
var app = express();

//sends a message when a get a get request occurs
app.get("/", function(request, response){
    response.send("API invoked as an HTTP GET request.");
});

//sends a message when a put request occurs
app.put("/", function(request, response){
    response.send("API invoked as an HTTP PUT request");
});

//sends a message when a post request occurs
app.post("/", function(request, response){
    response.send("API invoked as an HTTP POST request");
});

//sends a message when a delete request occurs
app.delete("/", function(request, response){
    response.send("API invoked as an HTTP DELETE request");
});

//creates a local server on port 8080 and prints a message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});