const express = require('express');

const Fruits = require('../fruits/fruits-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
});

server.get('/fruits', (req, res) => {
    Fruits.get()
        .then(fruits => {
            res.status(200).json(things);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;