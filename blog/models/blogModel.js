const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    createadAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    like:{
        type:Number,
        default:0
    },
    unlike:{
        type:Number,
        default:0
    },
    comment:{
        type:String,
       
    }

})

module.exports = mongoose.model("blog",blogSchema);