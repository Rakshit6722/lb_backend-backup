const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect = () =>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('successful connection'))
    .catch((err)=>console.log('connection failed'))
}
module.exports=dbConnect;