"use strict";
const db = require('../services/db');
function getAll() {
    const data = db.query(`SELECT * FROM books`);
    return {
        data
    };
}
module.exports = {
    getAll
};
