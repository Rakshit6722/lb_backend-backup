const mongoose = require('mongoose')
require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('Connection successfull'))
    .catch((err)=>console.log(err));
}
module.exports = dbConnect;