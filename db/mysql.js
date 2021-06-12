'use strict';

const mysql = require('mysql');
const config = require('../config');

let conn;
if (config.APP_ENV === 'sandbox') {
    conn = mysql.createConnection({
        host: config.MYSQL_SANDBOX.HOST,
        user: config.MYSQL_SANDBOX.USER,
        password: config.MYSQL_SANDBOX.PASSWORD,
        database: config.MYSQL_SANDBOX.DB
    });
} else {
    console.log('[MYSQL] Connected...');

    conn = mysql.createPool({
        host: config.MYSQL_PROD.HOST,
        user: config.MYSQL_PROD.USER,
        password: config.MYSQL_PROD.PASSWORD,
        database: config.MYSQL_PROD.DB
    });
}

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
