var t;
var address;
var system = require('system');
var page = require('webpage').create();

// if no URL was supplied as an argument.
if (system.args.length === 1) {
    console.log('Did not recieve a URL argument.');
    phantom.exit();
} else {
    page.open(system.args[1], function(status) {
        console.log("Status: " + status);
        if (status === "success") {
            page.render('images/' + "img" + '.png');
            console.log("Saved image!")
        }
        phantom.exit();
    });
}
