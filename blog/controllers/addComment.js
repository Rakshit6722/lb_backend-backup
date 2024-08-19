const Blog = require('../models/blogModel')

exports.addComment = async(req,res)=>{
    try{
        const{id} = req.params
        if(!id) return res.status(404).json({message:"invalid id"})
        const {comment} = req.body
        const data = await Blog.findByIdAndUpdate(id,{comment:comment})
        res.status(200).json({
            success:true,
            response:data,
            message:"Comment added successfully"
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