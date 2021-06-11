'use strict';

const mysql = require('mysql');
const config = require('../config');

var conn = mysql.createConnection({
    host: config.MYSQL.HOST,
    user: config.MYSQL.USER,
    password: config.MYSQL.PASSWORD,
    database: config.MYSQL.DB
});

function exeQuery(query) {
    return new Promise((resolve, reject) => {
        conn.query(query, function (err, result, fields) {
            if (err) reject(err);
            return resolve(result);
        });
    });
}

module.exports = {
    conn,
    exeQuery
};
