const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    email: {
        required: [ true, 'Email is Required' ],
        type: String,
        unique: true
    },
    password: {
        required: [ true, 'Password is Required' ],
        type: String
    }
});

module.exports = mongoose.model('UserLogin', userLoginSchema);