'use strict';

let Mysql = require('../db/mysql');

function getUsers(username, password) {
    let query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    let result = Mysql.exeQuery(query);

    return result;
}

module.exports = {
    getUsers
};
