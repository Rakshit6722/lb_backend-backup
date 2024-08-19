const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//middleware
app.use(bodyParser.json())

//server creation
app.listen(3000, () => { console.log('server started at 3000') }
)

//routes
app.get('/', (req, res) => {
    res.send("hello express")
})

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send('car submitted successfully')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/expensetracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection successful'))
    .catch((error) => {
        console.error('Received an error:', error.message);
        console.error('Error stack:', error.stack);
    });

