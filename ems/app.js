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
//mongoose, csrf, helmet, body parser, cookie parser 
//and the use of file paths
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");
const Employee = require("./models/employee");

//mongoDB connection
var mongoDB="mongodb+srv://RochelleMarkham:Camilla2008@buwebdev-cluster-1-yqegs.mongodb.net/test";
  mongoose.connect(mongoDB, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }).then(() => {
    console.log("Application connected to MongoDB instance");
  }).catch(err => {
    console.log(`MongoDB Error: ${err.message}`);
  });

//set up csrf protection
var csrfProtection = csrf({cookie:true});

//initializes express application
var app = express();

//uses the short version of the morgan logger
app.use(logger("short")); 
//uses the extended body parser
app.use(
  bodyParser.urlencoded({
      extended: true
  })
);
//uses the helmet cross site scripting filter
app.use(helmet.xssFilter());
//uses cookie parser
app.use(cookieParser());
//uses csurf Protection
app.use(csrfProtection);
//sets up use of csrf tokens
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});
//lets express know where to find public/css files
app.use(express.static(__dirname + "/public"));

//lets express know the views are in a file named views
app.set("views", path.resolve(__dirname, "views"));
//lets express know to use the ejs view engine
app.set("view engine", "ejs");

//routing - responds with the homepage when the site 
//is accessed
app.get("/", function(request, response){
      response.render("index", {
        title: "Home Page"
  });
});

//redirects to the new employee entry page
app.get("/new", function(request, response){
  response.render("new", {
    title: "New Employee Entry",
    message: "Enter New Employee"
  });
});

//redirects to the list page 
app.get("/list", function(request, response){
  Employee.find({}, function(error, employees){
    if (error) throw error;
    response.render("list", {
      title: "Current Employees",
      employees: employees
    });
  });
});

//redirects the page after form submission
app.post("/process", function(request, response){
    if(!request.body.txtFirstName){
      response.status(400).send("Entries must have a name");
      return;
    }
    if(!request.body.txtLastName){
      response.status(400).send("Entries must have a name");
      return;
    } 
    //get request form data 
    var empName = request.body.txtFirstName + " " + request.body.txtLastName;
    console.log(empName)
    //create an employee model
    var employee = new Employee({
      name: empName
    });
    //save
    employee.save(function(err){
      if (err){
        console.log(err);
        throw err;
      } else {
        console.log(empName + " saved successfully!");
        response.redirect("/");
      }
    });
});

//creates a local server on port 8080 and prints message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
