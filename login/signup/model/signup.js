const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        requried:true
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"]
    }

})

module.exports = mongoose.model("signup",signupSchema)