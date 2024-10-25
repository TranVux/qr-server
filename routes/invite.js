const express = require('express');
const InviteController = require("../controller/invite");

const router = express.Router();

router.get("/get-referral", InviteController.getReferralCode)
router.post("/set-referral", InviteController.setReferralCode)

router.get('/user-app', function (req, res) {
    console.log('enter handler user app')
    res.render('invite', {title: 'User App'})

})
router.get('/sale-app', function (req, res) {
    console.log('enter handler sale app')
    res.render('invite', {title: 'Sale App'})
})

router.get('/success', function (req, res) {
    console.log('✅ get referral code success', req.query?.referralCode)
    res.json({result: 'success'})
})

module.exports = router;
