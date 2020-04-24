/*====================================
;Title: Exercise 1.3
;Author: Professor Krasso
;Date: 23 April 2020        
;Modified by: Rochelle Markham
;Description: Modules
;=====================================
*/

//sets up variable requiring a url as a parameter
var url = require("url");

//creates variable to parse the URL
var parsedURL = url.parse("http://www.iamawesome.com/profile?Rochelle_Markham");

//prints the protocol section of the URL
console.log(parsedURL.protocol);

//prints the host section of the URL
console.log(parsedURL.host);

//prints the query section of the URL
console.log(parsedURL.query);