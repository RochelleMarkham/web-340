/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: May 12 2020
; Modified By: Rochelle Markham
; Description: Putting it all together
;===========================================
*/

//requires the express module
var express = require("express");
//requires the http module
var http = require("http");
//requires the use of file paths
var path = require("path");
//requires the use of the morgan logger
var logger = require("morgan");
//sets express to a variable
var app = express();
//tells express the views are in a file called views
app.set("views", path.resolve(__dirname, "views"));
//tells express to use the ejs view engine
app.set("view engine", "ejs");
//tells express to use the short version of the morgan logger
app.use(logger("short"));

//displays home page when the home page is accessed
app.get("/", function(request, response){
    response.render("index", {
        message: "home page"    
    });
});

//displays about page when the about page is accessed
app.get("/about", function(request, response){
    response.render("about", {
        message: "about page"
    });
});

//displays contact page when the contact page is accessed
app.get("/contact", function(request, response){
    response.render("contact", {
        message: "contact page"
    });
});

//displays products page when the products page is accessed
app.get("/products", function(request, response){
    response.render("products", {
        message: "products page"
    });
});

//creates a local server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

