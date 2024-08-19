const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

const routes = require('./routes/routes')

app.use("/api/v1",routes)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect();
