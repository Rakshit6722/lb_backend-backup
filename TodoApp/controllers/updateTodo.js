const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title,description} = req.body
        const data =  await Todo.findByIdAndUpdate(id,{title,description,updatedAt: Date.now()})
        res.status(200).json({
            success:true,
            response:data,
            message:"Updation complete"
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
