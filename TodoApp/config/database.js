const mongoose = require('mongoose')
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("connection is successful"))
    .catch(err=>{
        console.log("issue id db connection")
        console.log(err);
        process.exit(1);
    })
}
module.exports = dbConnect;