/*
========================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 7 June 2020
; Modified By: Rochelle Markham
; Description: TDD in Action
========================================
*/

//splits a string of fruits and returns an array
function getFruits(str){
    return str.split(',');
};

//allows the module to be exported
module.exports=getFruits;