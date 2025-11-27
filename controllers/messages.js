const express = require('express');
const Data = require('../models/messages');
const axios = require('axios');

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
        })}
    )
    .catch ((err)=>{
        console.log(err);
    })
    const sendData = {
            email: 'aryan.mnitj@gmail.com',
            subject: 'New message from your portfolio website',
            body: `You have received a new message from ${name} (${email}):\n\n${message}`
          };

          axios.patch(`https://auth-project-swart.vercel.app/api/email/send`, sendData, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Email sent:', response.data);
             
            })
            .catch(error => {
              console.error('Error sending email:', error);
            });
}