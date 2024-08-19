const User = require('../model/signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        //fetching info
        const { email, password } = req.body

        //validatin
        if (!email || !password) {
            res.status(400).json({
                message: "Invalid information"
            })
        }

        //check if user exist
        let user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: "User not found" })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        }

        //compare password
        if (bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })
            user = user.toObject();
            user.token = token
            user.password = undefined
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("cookie", token, options).status(200).json({
                success: true,
                token,
                user,
                message: 'user logged In successfully'
            })

        }
        else {
            return res.status(400).json({ message: "incorrect password" })
        }

        // res.status(200).json({message:'log in successfull'})

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
}