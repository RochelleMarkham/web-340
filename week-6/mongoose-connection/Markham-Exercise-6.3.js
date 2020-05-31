/*
====================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 28 May 2020
; Modified by: Rochelle Markham
; Description: Mongoose connection
====================================
*/

//requires the use of mongoose, the express and
//http modules, as well as the morgan logger
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//sets the express application to a variable
var app = express();

//tells express to use the dev version of the logger
app.use(logger("dev"));

//sets the connection string to a variable
var mongoDB = "mongodb+srv://RochelleMarkham:Camilla2008@buwebdev-cluster-1-yqegs.mongodb.net/test?retryWrites=true&w=majority";

//uses mongoDB to connect
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

//sets the database connection to mongoose
var db = mongoose.connection;

//prints the message if there is a connection error
db.on("error", console.error.bind(console, "MongoDB connected error: "));

//prints the message when the application connects
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

//creates a local server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started and listening on port 8080!");
});