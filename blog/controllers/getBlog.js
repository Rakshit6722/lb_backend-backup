
const Blog = require('../models/blogModel');

exports.getBlog = async(req,res) => {
    try{
        const data = await Blog.find({})
    
        res.status(200).json({
            success:true,
            response:data,
            message:"Fetched successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            error:err,
            message:"Server Error"
        })
    }
    
}

exports.getBlogById = async(req,res) => {
    try{
        const {id} = req.params
        const data = await Blog.findById(id)
        if(!id){
            return res.status(404).json({
                success:false,
                message:"Invalid id"
            })
        }
        res.status(200).json({
            success:true,
            response:data,
            message:"Fetched successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            error:err,
            message:"Server Error"
        })
    }
}