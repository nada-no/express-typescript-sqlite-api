const sqlite = require('better-sqlite3');
const path = require('path');
const database = new sqlite(path.resolve('databasefile.db'), { fileMustExist: true });

function query(sql: String) {
    return database.prepare(sql).all();
}

function run(sql: String, params: String) {
    return database.prepare(sql).run(params);
}

module.exports = {
    query, run
}