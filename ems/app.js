/*
====================================
; Title: EMS app
; Author: Professor Krasso
; Date:
; Modified By: Rochelle Markham
; Description: Employee Records App
====================================
*/

//requires the use of express, http, the morgan logger
//and the use of file paths
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//sets the express application to a variable
var app = express();

//lets express know the views are in a file named views
app.set("views", path.resolve(__dirname, "views"));

//lets express know where to find public/css files
app.use(express.static(__dirname + '/public'));


//lets express know to use the ejs view engine
app.set("view engine", "ejs");

//uses the short version of the morgan logger
app.use(logger("short"));

//responds with the homepage when the site is accessed
app.get("/", function(request, response){
    response.render("index", {
        title: "Home page"
    });
});

//creates a local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

