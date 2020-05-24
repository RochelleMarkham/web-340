/*
===============================================
; Title:  Exercise 5.3
; Author: Professor Krasso
; Date: 24 May 2020
; Modified By: Rochelle Markham
; Description: Pug Templates
;==============================================
*/

//requires the use of express, http and pug as well
//as the use of file paths
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//sets express application to a variable
var app = express();

//tells express the views are in a file called views
app.set("views", path.resolve(__dirname, "views"));
//tells express to use the pug view engine
app.set("view engine", "pug");

//prints the message when the homepage is accessed
app.get("/", function(request, response){
    response.render("index", {
        message: "This message is brought to you by Pug!"
    });
});

//creates a local server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

