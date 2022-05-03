'use strict'
const io = require('socket.io-client');
const socket = io.connect('http://144.22.174.111:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};