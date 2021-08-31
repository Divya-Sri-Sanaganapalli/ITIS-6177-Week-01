var http = require('http'); 

var server = http.createServer(function (req, res) {   

    //incoming requests will be handled here
});

server.listen(3000); 

console.log('Node.js web server at port 3000 is running..')

