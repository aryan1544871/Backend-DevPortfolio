const express = require('express');
const Data = require('../models/messages');

exports.getMessages = (req,res,next) =>{
    Data.find()
    .then( data =>{
        res.status(200).json({messages : data})
    })
    .catch( err =>{
        console.log(err);
    })
};

exports.createMessage = (req,res,next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const data = new Data ({
        name : name , 
        email : email,
        message : message,
    })

    data.save()
    .then (result => 
        {res.status(201).json({
            msg : 'Message created successfully',
        })})
    .catch ((err)=>{
        console.log(err);
    })
}