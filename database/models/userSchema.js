const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: [true, 'Email is required'],
        type: String,
        unique: true
    },
    password: {
        required: [true, 'Password is required'],
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

// SAVE HASHED PASSWORD
userSchema.pre('save', async function (next) {
    const result = await bcrypt.hash(this.password, 11);
    console.log('result: ', result);

    this.password = result;
    next();
});

module.exports = mongoose.model('User', userSchema);