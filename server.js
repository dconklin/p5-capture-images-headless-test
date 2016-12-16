module.exports = {

    handleRequest: function(req, res) {
        var path = require('path');
        var fs = require('fs');

        // What did we request?
        var pathname = req.url;

        // If blank let's ask for index.html
        if (pathname == '/') {
            pathname = '/index.html';
        }

        // Ok what's our file extension
        var ext = path.extname(pathname);

        // Map extension to file type
        var typeExt = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css'
        };
        // What is it?  Default to plain text

        var contentType = typeExt[ext] || 'text/plain';

        // User file system module
        fs.readFile(__dirname + pathname,
            // Callback function for reading
            function(err, data) {
                // if there is an error
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ' + pathname);
                }
                // Otherwise, send the data, the contents of the file
                res.writeHead(200, {
                    'Content-Type': contentType
                });
                res.end(data);
            }
        );
    }

}
