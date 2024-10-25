const ReferralModel = require("../models/referral");

class InviteService {
    static async setReferralCode(id, referralData) {
        const preData = await ReferralModel.findOne({id}).lean()

        if (preData) {
            await ReferralModel.deleteOne({id})
            throw new Error(`Was existed user with referral id ${id}`)
        }

        await ReferralModel.create({id, referralData})
    }

    static async getReferralCode(id) {
        const data = await ReferralModel.findOne({id}).lean()

        if (!data) {
            throw new Error(`Can't found referral data with ${id}`)
        }

        return data
    }
}

module.exports = InviteService
