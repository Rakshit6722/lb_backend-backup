const SignUp = require('../model/signup')
const bcrypt = require('bcrypt')

exports.createAccount = async (req, res) => {
    try {    //fetching data
        const { name, email, password, role } = req.body

        //find if user is already present
        const alreadyExist = await SignUp.findOne({ email: email })
        if (alreadyExist) {
            return res.status(404).json({ message: 'user already exist' })
        }

        //creating hashedpassword
        let hashedpassword
        try {
            hashedpassword = await bcrypt.hash(password, 10)
        }
        catch (err) {
            console.log(err)
            res.status(400).json({
                success: false,
                message: 'error in password hashing'
            })
        }

        //saving new user in database
        const newUser = new SignUp({
            name, email, password:hashedpassword, role
        })
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            data: savedUser,
            messaege: 'new user created'
        })
    }

    catch(err){
        console.log(err)
        res.status(500).json({message:'Server Error'})
    }


}