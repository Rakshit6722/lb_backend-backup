const Blog = require('../models/blogModel')

exports.updateLike = async(req,res)=>{
    try{
        const{id} = req.params
        if(!id) return res.status(404).json({message:"id not found"})
        const blog =  await Blog.findByIdAndUpdate(id,{$inc:{like:1}},{new:true})
        res.status(200).json({
            success:true,
            response: blog,
            message:"Like incremented"
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