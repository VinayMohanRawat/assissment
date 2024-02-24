const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000
const DATABASE = process.env.DATABASE
console.log(DATABASE)


const route = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://vinaymohanrawat1:3bipUK1oTq9XbnL1@cluster0.77vgl.mongodb.net/neuron_project?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/', route);

app.listen(port, () => {
    console.log("Express is running PORT 3000")
})