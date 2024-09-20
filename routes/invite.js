var express = require('express');

var router = express.Router();

router.get('/user-app', function (req, res) {
    console.log('enter handler user app')
    res.render('invite', {title: 'User App'});
})

router.get('/sale-app', function (req, res) {
    console.log('enter handler sale app')
    res.render('invite', {title: 'Sale App'})
})

router.get('/success', function (req, res) {
    console.log('✅ get referral code success', req.query?.referralCode)
})

module.exports = router;