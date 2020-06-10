/*
========================================
; Title: EMS
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: Employee Records App.
========================================
*/

//requires the use of the express, http, mongoose
var express = require("express");
var http = require("http");
var mongoose = require ("mongoose");
var logger = require ("morgan");
var Employee = require("../models/employee");