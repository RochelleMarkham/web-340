/*
========================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: Mocha and Chai
========================================
*/

//splits a string of fruits and returns an array
function fruits(str){
    return str.split(',');
}

//allows the function to be exported
module.exports = fruits;