const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employers = require('./controllers/employers');

// create app
const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

// db conn
mongoose.connect(process.env.CONNECTION_STRING, {
}).then((res) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Connection Failed');
});

app.use('/api/employers', employers);

// start server
app.listen(3000);
module.exports = app;