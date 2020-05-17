/*
============================================
; Title:  Exercise 4.2
; Author: Professor Krasso
; Date: May 16 2020
; Modified By: Rochelle Markham
; Description: JSON APIs
;===========================================
*/

//requires the express module
var express = require ("express");
//requires the http module
var http = require ("http");
//sets express to a variable to set up the app
var app = express();

//creates a response when server/car/:id is accessed
app.get("/car/:id", function (request, response){
    //parses the request and sets it to the variable id
    var id = parseInt(request.params.id, 10);
    //creates response for the request    
    response.json({
        make: "toyota",
        model: "camry",
        year: "2019",
        carId: id,
    });
});

//creates server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

