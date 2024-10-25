var express = require('express');

const {getUserAgent} = require("../utils");
const configs = require("../config");

const router = express.Router();

router.get('/sale-app', function (req, res, next) {
    const userAgent = getUserAgent(req)

    const {ios, android, fallback} = configs["sale-app"]

    if (userAgent.includes('android')) {
        res.redirect(android);
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        res.redirect(ios);
    } else {
        res.redirect(fallback);
    }
});

router.get('/user-app', function (req, res, next) {
    const userAgent = getUserAgent(req)

    const {ios, android, fallback} = configs["user-app"]

    if (userAgent.includes('android')) {
        res.redirect(android);
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        res.redirect(ios);
    } else {
        res.redirect(fallback);
    }
});

module.exports = router;
