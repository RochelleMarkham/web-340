/*
========================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: Mocha and Chai
========================================
*/

//describes the file path to the function to be tested
var fruits = require("../Markham-fruits");
//requires chair and the assert module
var chai = require("chai");
var assert = chai.assert;

//sets a test to check that the function returns an array of fruits
describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f=fruits('Apple, Orange, Mango');
        assert(Array.isArray(f));
    });
});