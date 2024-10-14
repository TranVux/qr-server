const express = require('express');
const getMac = require('getmac').default

var router = express.Router();

router.get('/user-app', function (req, res) {
    console.log('enter handler user app')
    res.render('invite', {title: 'User App', mac: getMac()})

})
router.get('/sale-app', function (req, res) {
    console.log('enter handler sale app')
    res.render('invite', {title: 'Sale App', mac: getMac()})
})

router.get('/success', function (req, res) {
    console.log('✅ get referral code success', req.query?.referralCode)
    res.json({result: 'success'})
})

module.exports = router;
