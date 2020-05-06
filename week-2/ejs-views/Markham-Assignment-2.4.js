/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: May 5 2020
; Modified By: Rochelle Markham
; Description: EJS Views
;===========================================
*/

//requires the http module
var http = require ("http");
//requires the express module
var express = require ("express");
//requires the path 
var path = require ("path");
//assigns the express module to a variable
var app = express();

//Tells Express the views are in the 'views' file
app.set("views", path.resolve(__dirname, "views"));
//Tells express to use the EJS view engine
app.set("view engine", "ejs");

//response displayed on web page
app.get("/", function (request, response){
    response.render("index", {
        firstName: "Rochelle",
        lastName: "Markham",
        address: "1234 Main St. Anywhere, LA 11111"
    });
});

//creates server on port 8080 and prints the message
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080")
});
