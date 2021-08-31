const http = require('http'); 
const port = 3000;
const host = 'localhost';
var server = http.createServer(function (req, res) {   
    //incoming requests will be handled here
});

server.listen(port,host, () => {
    console.log('The server is running on port', port);
});
