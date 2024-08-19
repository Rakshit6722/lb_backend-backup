const express = require('express')
const routes = require('./routes/blogRoutes')
const dbConnect = require('./config/database')
require("dotenv").config()

const app = express()
app.use(express.json())
app.use("/api/v1",routes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

dbConnect()

