'use strict';

const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const session = require("express-session");

const login = require('./router/login');
const feed = require('./router/feed');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.listen(config.APP_PORT, () => console.log(`App running on ${config.APP_PORT}`));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', login);
app.use('/feed', feed);

app.use(function (req, res, next) {
    res.status(404).send('Route Not Found');
    res.render('login');
});

module.exports = app;
