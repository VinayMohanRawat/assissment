const userModel = require('../models/userModel');


const update = async (req, res) => {
    try {
        const { name } = req.body;

        //validation 
        if (!name || name.trim().length === 0) {
            return res.status(400).send({ status: false, message: "Invalid Name" })
        }

        //to check name is exists
        const data = await userModel.findOne({ name: name })

        //to update existing user
        const user = await userModel.updateOne({ name: name, count: data.count + 1 })

        return res.status(200).send({ status: true, message: 'Update successfully!' })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}






module.exports = update;