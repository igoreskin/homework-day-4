// • Create a file app.js
// • Require the 'http' core module in your app.js.
// • Assign a port number of your choice.
// • Create a server to and listen to the port.
// • Console the message “server running on port: port #”.

const dateAndTime = require('./date');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    res.end(dateAndTime());
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});