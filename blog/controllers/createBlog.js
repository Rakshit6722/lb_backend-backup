const blogModel = require("../models/blogModel")
const Blog = require("../models/blogModel")

exports.createBlog = async (req,res) => {
    try{
        const {title,description} = req.body
        const blog = await Blog.create({title,description})
    
        res.status(200).json({
            success:true,
            response:blog,
            message:"Post created successfully"
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