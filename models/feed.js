'use strict';

let Mysql = require('../db/mysql');

function tweet(tweet, feeling) {
    let date = new Date();
    let query = `INSERT INTO feed VALUES ('${tweet}', '${feeling}', '${date.toGMTString()}')`;

    let result = Mysql.exeQuery(query);

    return result;
}

function getTweets() {
    let query = 'SELECT * FROM feed ORDER BY time DESC';

    let result = Mysql.exeQuery(query);

    return result;
}

module.exports = {
    tweet,
    getTweets
};
