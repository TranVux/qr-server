const mongoose = require("mongoose");

const {Schema} = mongoose

const referralSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    referralData: {
        type: String,
        required: true
    }
})

const ReferralModel = mongoose.model('referral', referralSchema)

module.exports = ReferralModel
