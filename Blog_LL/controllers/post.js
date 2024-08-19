const Post = require('../model/postModel')

exports.createPost = async (req,res) => {
    try{
        const {title,body} = req.body
        const post = new Post({
            title,body
        })
        const savedPost = await post.save()

        res.status(200).json({
            post:savedPost
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:"Error in post creation"
        })
    }
}