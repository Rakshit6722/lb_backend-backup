const express = require('express')
const app = express();
require('dotenv').config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("2000")
})

const fileupload = require('express-fileupload')
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const routes = require('./routes/route')
app.use("/api/v1",routes)

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect();

const cloudinaryConnect = require('./config/cloudinary')
cloudinaryConnect()