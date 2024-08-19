const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config()

const routes = require('./routes/route')

app.use("/api/v1",routes)

const PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log(`Server working at ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect()