// // config twitter (deal with this later).
// var config = require('./config.js');
// var Twit = require('twit');
// var T = new Twit(config);

// set up server (if needed)
var http = require('http');
var theServer = require('./server.js');
var server = http.createServer(theServer.handleRequest);
var exec = require('child_process').exec;

server.listen(8080);
console.log('Server started on port 8080');

var cmd = 'phantomjs capturesite.js http://localhost:8080';
exec(cmd, function(error, sdout, sderr) {
    console.log(sdout);
    server.close(function() {
        console.log("Server has closed.");
    })
});
