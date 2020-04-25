/*====================================
;Title: Exercise 1.5
;Author: Professor Krasso
;Date: 24 April 2020        
;Modified by: Rochelle Markham
;Description: Server Example
;=====================================
*/

//variable declaration requiring "http"
var http = require("http");

//params: request and response
//output: response string
//description: processes a request and returns a response
function processRequest(req, res) {

//response body text
var body = "Markham Assignment 1.5: Local Servers";
    //sets variable to the length of the response body text
    var contentLength = body.length;
    //describes the header for the response
    res.writeHead(200, {
        //length of response body text
        'Content-Length': contentLength,
        //type of response
        'Content-Type': 'text/plain'

    });
    //ends the response
    res.end(body);

}
//http is used to create a local server that will run the processRequest function
//this command is set to variable s
var s = http.createServer(processRequest);
//listens for port 8080 to be accessed to display the response
s.listen(8080);