const db = require('../data/db-config.js');

module.exports = {
    add,
    get,
    getById,
    remove,
};

async function add(fruit) {
    return null;
};

async function get() {
    return db('fruits');
};

async function getById(id) {
    return null;
};

async function remove(id) {
    return null;
};