const Opening = require('@/models/opening.model')

exports.createOpening = async (req, res) =>{

    try {

        const { roleName, roleType } = req.body

        const opening = await Opening.create({
            roleName,
            roleType
        })

        res.status(201).json({
            success: true,
            msg: "Opening Created Successfully",
            opening
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}
exports.getOpenings = async (req, res) => {

    try {

        const openings = await Opening.find({}).sort({ createdAt: -1 })

        res.status(201).json({
            success: true,
            openings
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}
exports.getOpening = async (req, res) => {

    try {
        const { id } = req.params;

        const openings = await Opening.findOne({ _id: id })

        res.status(201).json({
            success: true,
            openings
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}
exports.deleteOpening = async (req, res) => {

    try {
        const { id } = req.params;

        const openings = await Opening.findOneAndDelete({ _id: id })

        res.status(201).json({
            success: true,
            msg: "Opening Deleted Successfully"
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })

    }
}
