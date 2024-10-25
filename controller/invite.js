const InviteService = require("../services/invite");

class InviteController {
    static async setReferralCode(req, res, next) {
        try {
            const id = req.body.id
            const referralData = req.body.referralData

            await InviteService.setReferralCode(id, referralData)
            res.status(200).json({status: 200, message: 'success'})
        } catch (e) {
            res.status(500).json({status: 500, message: e.toString()})
        }
    }

    static async getReferralCode(req, res, next) {
        try {
            const id = req.query.id

            const data = await InviteService.getReferralCode(id)
            res.status(200).json({status: 200, message: 'success', data})
        } catch (e) {
            res.status(500).json({status: 500, message: e.toString()})
        }
    }
}

module.exports = InviteController
