const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
var app = express();
// var server = http.createServer((req,res)=>{

// })

var server = http.createServer(app);
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
// console.log(__dirname + '/../public');
// console.log(publicPath);

