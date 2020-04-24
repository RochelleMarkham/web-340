/*====================================
;Title: Exercise 1.3
;Author: Peter Itskovich
;Date: 23 April 2020
;Modified by: Rochelle Markham
;Description: 
;=====================================
*/

var url = require("url");

var parsedURL = url.parse("http://www.iamawesome.com/profile?Rochelle_Markham");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);