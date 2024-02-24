const userModel = require('../models/userModel');


const add = async (req, res) => {
    try {
        const { name } = req.body;

        //validation 
        if (!name || name.trim().length === 0) {
            return res.status(400).send({ status: false, message: "Invalid Name" })
        }

        //to check name is exists
        const isNameExists = await userModel.findOne({ name: name })

        if (isNameExists) {
            //to delete existing name
            const isDeleted = await userModel.deleteOne({ name: name })
        }

        //to create new user
        const user = await userModel.create({ name: name })

        return res.status(201).send({ status: true, message: 'Add successfully!' })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}




module.exports = add;


