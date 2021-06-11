'use strict';

const express = require('express');
const router = express.Router();
const feed = require('../models/feed');
const securedRouter = require('../auth/securedRouter');

securedRouter.get(router, '/', true, async function (req, res) {
    const tweets = await feed.getTweets();
    return res.render('index', { tweets });
});

securedRouter.post(router, '/tweet', true, async function (req, res) {
    let body = req.body;

    if (body && body.tweet && body.feeling) {
        await feed.tweet(body.tweet, body.feeling);
        return res.redirect('/feed');
    }
    return res.redirect('/feed');
});

module.exports = router;
