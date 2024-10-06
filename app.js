const express = require('express');
const messageRoutes = require ('./routes/messages');
const bodyParser = require ('body-parser');

const mongoose = require ('mongoose');


const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use (bodyParser.json()); //application/json

app.use ((req, res ,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next ();
})

app.use('/data', messageRoutes);

mongoose.connect ('mongodb+srv://aryanmnitj:Arykush1$U+762817@cluster0.dvnql.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0') .then ( result => {
app.listen(8080);
}).catch(err => console.log(err)); 
