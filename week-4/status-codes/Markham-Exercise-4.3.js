/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso
; Date: May 16 2020
; Modified By: Rochelle Markham
; Description: HTTP status codes
;===========================================
*/

//requires the express module
var express = require ("express");
//requires the http module
var http = require ("http");
//sets express to a variable
var app = express();

app.get("/not-found", function(request, response){
  response.status(404);
  response.json({
    error: "Hmmmm...I can't seem to find what you're looking for."
  })
});

app.get("/ok", function(request, response){
  response.status(200);
  response.json({
    message: "Everything is working as it should!"    
  });
});

app.get("/not-implemented", function(request, response){
  response.status(501);
  response.json({
    error: "I'm sorry. I'm unable to fulfill your request at this time."
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});
