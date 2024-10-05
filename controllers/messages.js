const express = require('express');

exports.getMessages = (req,res,next) =>{
    res.status(200).json({name : "Aryan", message: "Hello how are you"})
};
