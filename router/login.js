'use strict';

const express = require('express');
const router = express.Router();
const login = require('../models/login');

router.get('/', function (req, res) {
    return res.render('login');
});

router.get('/login', function (req, res) {
    return res.render('login');
});

router.post('/auth', async function (req, res) {
    let body = req.body;

    if (body && body.username && body.password) {
        let users = await login.getUsers(body.username, body.password);

        if (users && users.length == 1) {
            req.session.authuser = true;
            return res.redirect('/feed');
        }
    }

    req.session.authuser = false;
    return res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.session.authuser = false;
    return res.redirect('/');
});

module.exports = router;
