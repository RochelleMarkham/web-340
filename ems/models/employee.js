/*
========================================
; Title: EMS
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: Employee Records App.
========================================
*/

//requires the use of mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//defines the employee schema
var empSchema = new Schema({
    firstName: String,
    lastName: String,
});

//defines the employee module
var Employee = mongoose.model("Employee", empSchema);

//allow the employee schema to be exported
module.exports = Employee;