const express = require('express');

const server = express();

server.use(express.json());

//server.get('/', (req, res) => )

module.exports = server;