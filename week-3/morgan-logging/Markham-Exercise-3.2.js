/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: May 10 2020
; Modified By: Rochelle Markham
; Description: Logging
;===========================================
*/

//requires the express module
var express = require("express");
//requires the http module
var http = require("http");
//requires the use of file paths
var path = require("path");
//requires the morgan logger for request logging
var logger = require("morgan");
//sets the express module to a variable
var app = express();

//Tells express views are in the views directory
app.set("views", path.resolve(__dirname, "views"));
//Tells express to use the EJS view engine
app.set("view engine", "ejs");
//Tells morgan which version of the logger to use
app.use(logger("short"));

app.get("/", function(request, response){
    response.render("index",{
        message: "Check out this awesome logger!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
