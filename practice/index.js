const express = require('express')
const app = express();
require("dotenv").config();
app.use(express.json());
const route = require('./routes/createTodoRoute')
app.use("/api/v1", route);
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get("/", (req, res) => {
    res.send('This is homepage')
})

const dbConnect = require('./config/database');
dbConnect()