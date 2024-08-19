require('dotenv').config()
const jwt = require('jsonwebtoken')
exports.auth = (req,res,next)=>{

    try{
        //fetch token
        const {token} = req.body
    
        if(!token){
            return res.status(400).json({messge:'invalid token'})
        }
    
        //verify token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user=decode
        }catch(err){
            console.log(err)
            res.json({message:'incorrect token'})
        }
    
        next();
    }catch(err){
        console.log(err)
        res.status(500).json({message:'invalid request'})
    }

}

exports.isStudent = async(req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
            res.status(400).json({message:"not authenticated"})
        }
        next();
    }catch(err){
        console.log(err)
        res.status(401).json({message:'User role not matching'})
    }
}
exports.isAdmin = async(req,res,next)=>{
    try{
        if(req.user.role!=="Admin"){
            res.status(400).json({message:"not authenticated"})
        }
        next();
    }catch(err){
        console.log(err)
        res.status(401).json({message:'User role not matching'})
    }
}