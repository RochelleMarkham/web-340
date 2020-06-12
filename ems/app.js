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
var helmet = require("helmet");

//initializes express
var app = express();

//lets express know where to find public/css files
app.use(express.static(__dirname + '/public'));

//uses the short version of the morgan logger
app.use(logger("short")); 

//uses the helmet cross site scripting filter
app.use(helmet.xssFilter());

//lets express know to use the ejs view engine
app.set("view engine", "ejs");

//lets express know the views are in a file named views
app.set("views", path.resolve(__dirname, "views"));

//responds with the homepage when the site is accessed
app.get("/", function(request, response){
    response.render("index", {
        title: "Home page",
    });
});

//lets express know where to find the employee model
var Employee = require("./models/employee")

var employee = new Employee({
    firstName: "Rochelle",
    lastName: "Markham"
});

//mongoDB connection
var mongoDB="mongodb+srv://RochelleMarkham:Camilla2008@buwebdev-cluster-1-yqegs.mongodb.net/test"
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

//sets the mongoose connection to a variable
var db = mongoose.connection;

//prints error message if mongoose connection error
db.on("error", console.error.bind(console, "MongoDB connection error: "));

//prints message once mongoose is connected
db.once("open", function(){
    console.log("Application connected to MongoDB instance");
});

//creates a local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
