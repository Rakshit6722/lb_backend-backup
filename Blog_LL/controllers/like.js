const Like = require('../model/likeModel')
const Post = require('../model/postModel')

exports.createLike = async (req, res) => {
    try {
        const { post, user } = req.body

        const newLike = new Like({
            post, user
        })                                                   
        const savedLike = await newLike.save()

        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })

        res.status(200).json({
            post: updatedPost
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "like not updated"
        })
    }
}

exports.createUnlike = async (req, res) => {
    try {
        const { post, like } = req.body
        const deleteLike = await Like.findOneAndDelete({ post: post, _id: like })

        if (!deleteLike) {
            return res.status(404).json({ message: 'Like not found' })
        }

        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } }, { new: true })

        res.status(200).json({
            post: updatedPost
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Failed to unlike post' })
    }
}
