const mongoose = require('mongoose')
const {Schema} = mongoose; // =const Schema = mongoose.Schema;  destructuring

const recipientSchema = new Schema ({
    email: String,
    responded: {type: Boolean, default: false}
    
})

module.exports = recipientSchema;