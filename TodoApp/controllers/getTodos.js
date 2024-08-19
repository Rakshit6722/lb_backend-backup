const Todo = require('../models/todo')

exports.getTodo = async (req,res) => {
    try{
       const todos = await Todo.find({});
       res.status(200).json({
        success:true,
        data:todos,
        message:"Entire todo data is fetched"
       })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            error:err,
            message:"data fetching failed"
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        const id = req.params.id
        const todo = await Todo.findById({_id:id})
        
        if(!todo){
            return res.status(404).json({
                success:false,
                message:'No data found'
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully found`
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            error:err,
            message:"Server error"
        })
    }
}