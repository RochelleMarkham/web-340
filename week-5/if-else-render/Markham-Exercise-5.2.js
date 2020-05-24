/*
===============================================
; Title:  Exercise 5.2
; Author: Professor Krasso
; Date: 24 May 2020
; Modified By: Rochelle Markham
; Description: EJS 'if-else-render' operations.
;==============================================
*/

//requires the express and http modules
//as well as the use of file paths
var express = require("express");
var http = require("http");
var path = require("path");

//sets the express application to a variable
app = express();

//tells express the views are in a file called views
app.set("views", path.resolve(__dirname, "views"));
//tells express to use the ejs view engine
app.set("view engine", "ejs");

//sets an array of names
var n = ["Lola", "Luna", "Harlow", "Sadie"];

//when the homepage is accessed, respond with
//the array of names
app.get("/", function(request, response){
    response.render("index", {
        names: n
    });
});

//creates a local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});