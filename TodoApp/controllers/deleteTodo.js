const Todo = require('../models/todo')

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params
        await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"todo deleted"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}