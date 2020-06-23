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
var EmployeeSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true},
    id: {type: String, required: true}
  });

//defines the employee module
var Employee = mongoose.model("Employee", EmployeeSchema);

//allow the employee schema to be exported
module.exports = Employee;