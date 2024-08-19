

const Todo = require('../model/Todo')

exports.createTodo = async (req,res) => {
    try{
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            data:'error'
        })
    }
}



