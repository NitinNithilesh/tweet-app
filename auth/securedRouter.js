'use strict';

var post = function (router, route, secured, callback) {
    router.post(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.session.authuser) {
            callback(req, res, next);
            return;
        }
        return res.redirect('/');
    });
};

var get = function (router, route, secured, callback) {
    router.get(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.session.authuser) {
            callback(req, res, next);
            return;
        }
        return res.redirect('/');
    });
};

module.exports = {
    post: post,
    get: get
};
