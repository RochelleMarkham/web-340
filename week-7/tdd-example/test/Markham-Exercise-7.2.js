/*
========================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: TDD in Action
========================================
*/

//requires the assert module
var assert = require("assert");

//test for function that turns a string into an array
describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple, Orange, Mango'.split(',')));
    });
});

