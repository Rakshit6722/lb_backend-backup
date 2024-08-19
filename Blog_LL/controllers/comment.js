const Comment = require('../model/commentModel')
const Post = require('../model/postModel')

exports.createComment = async (req, res) => {
    try {  //fetching data from body
        const { post, user, body } = req.body

        //creating new comment
        const comment = new Comment({
            post, user, body
        })
        //save it in db
        const savedComment = await comment.save();

        //adding this comment id in actual post comment array
        const updatedComment = await Post.findByIdAndUpdate(post, { $push: { comment: savedComment._id } }, { new: true })
             .populate("comment")//use to show show actual comment content in the array 
            .exec()

        res.status(200).json({
            post:updatedComment
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        })
    }
}