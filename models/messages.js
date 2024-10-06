const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const messagesSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
},{timestamps: true})

module.exports = mongoose.model('Messages',messagesSchema);