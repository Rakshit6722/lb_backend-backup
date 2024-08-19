const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () =>{
    mongoose.connect(process.env.URL)
    .then(()=>console.log('Database connected'))
    .catch((err)=>console.log('Connection failed'))
}

module.exports = dbConnect