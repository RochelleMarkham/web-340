/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: May 4 2020
; Modified By: Rochelle Markham
; Description: Routes
;===========================================
*/

//requires the express module
var express = require("express");
//require the http module
var http = require("http");
//assigns the express module to a variable
var app = express();

//displays message when user visits the homepage
app.get("/", function (request, response){
    response.end("Welcome to the Homepage!");
});

//displays message when user visits the about page
app.get("/about", function (request, response){
    response.end("Welcome to the about page!");
});

//displays message when user visits the contact page
app.get("/contact", function (request, response){
    response.end("Welcome to the contact page!");
});

//displays an error message and error code if user tries
//to access an unknown page
app.use(function (request, response){
    response.statusCode = 404;
    response.end("404!");
});

//creates server on port 8080
http.createServer(app).listen(8080);