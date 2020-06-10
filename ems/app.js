/*
====================================
; Title: EMS app
; Author: Professor Krasso
; Date:
; Modified By: Rochelle Markham
; Description: Employee Records App
====================================
*/

//requires the use of express, http, the morgan logger,
//mongoose, and the use of file paths
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");

//lets express know where to find the employee model
var Employee = require("./models/employee")

//mongoDB connection
var mongoDB="mongodb+srv://RochelleMarkham:Camilla2008@buwebdev-cluster-1-yqegs.mongodb.net/test"
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

//sets the mongoose connection to a variable
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function(){
    console.log("Application connected to MongoDB instance");
});

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

app.get("/new", function(request, response){
    response.render("/new", {
        title: "New employee"
    });
});

var employee = new Employee({
    firstName: "Rochelle",
    lastName: "Markham"
});

//creates a local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

